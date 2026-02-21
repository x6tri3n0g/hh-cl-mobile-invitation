"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { motion, PanInfo } from "framer-motion";
import { SWIPE_CONFIDENCE_THRESHOLD } from "./constants";
import type { GalleryModalProps } from "./types";
import { swipePower, getNormalizedIndex, getShortestMove } from "./utils";

// Inner component that handles the logic and rendering
// This component should only be mounted when isOpen is true
function GalleryModalInner({
    onClose,
    currentIndex,
    totalImages,
    galleryImages,
}: GalleryModalProps) {
    const [page, setPage] = useState(currentIndex);
    const total = galleryImages.length;
    const imageIndex = getNormalizedIndex(page, total);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to selected thumbnail in modal
    useEffect(() => {
        if (!scrollContainerRef.current) return;
        const container = scrollContainerRef.current;
        const thumbnailButton = container.children[imageIndex] as HTMLElement;

        if (thumbnailButton) {
            const containerCenter = container.clientWidth / 2;
            const thumbnailCenter = thumbnailButton.offsetWidth / 2;
            const scrollPos =
                thumbnailButton.offsetLeft - containerCenter + thumbnailCenter;

            container.scrollTo({
                left: scrollPos,
                behavior: "smooth",
            });
        }
    }, [imageIndex]);

    // Lock body scroll
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    const paginate = (newDirection: number) => {
        setPage(page + newDirection);
    };

    return createPortal(
        <div className="animate-fade-in fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-4 md:p-10">
            <div className="relative flex w-full flex-1 items-center justify-center overflow-hidden">
                {/* 
                     Stay Mounted Strategy:
                     We mount all images and translate them to avoid network checks on slide.
                */}
                <div className="relative h-full w-full max-w-4xl overflow-hidden">
                    {galleryImages.map((image, i) => {
                        let diff = i - (page % total);
                        if (diff > total / 2) diff -= total;
                        if (diff < -total / 2) diff += total;

                        return (
                            <motion.div
                                key={i}
                                initial={false}
                                animate={{
                                    x: `${diff * 100}%`,
                                    opacity: Math.abs(diff) < 1.5 ? 1 : 0,
                                }}
                                transition={{
                                    x: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                    },
                                    opacity: { duration: 0.3 },
                                }}
                                className="absolute h-full w-full"
                            >
                                <div className="relative h-full w-full">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-contain pointer-events-none"
                                        sizes="100vw"
                                        quality={90}
                                        priority={i === imageIndex}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}

                    <motion.div
                        className="absolute inset-0 z-20"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e: any, { offset, velocity }: PanInfo) => {
                            const swipe = swipePower(offset.x, velocity.x);
                            if (swipe < -SWIPE_CONFIDENCE_THRESHOLD) {
                                paginate(1);
                            } else if (swipe > SWIPE_CONFIDENCE_THRESHOLD) {
                                paginate(-1);
                            }
                        }}
                    />
                </div>

                <button
                    type="button"
                    onClick={() => paginate(-1)}
                    className="absolute left-2 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/10 p-3 text-2xl text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                    aria-label="이전"
                >
                    ‹
                </button>

                <button
                    type="button"
                    onClick={() => paginate(1)}
                    className="absolute right-2 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/10 p-3 text-2xl text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                    aria-label="다음"
                >
                    ›
                </button>

                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-4 right-4 z-40 p-2 text-white/80 hover:text-white"
                >
                    ✕ 닫기
                </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="mt-4 w-full max-w-2xl px-4">
                <div
                    ref={scrollContainerRef}
                    className="flex gap-2 overflow-x-auto pt-0.5 pb-2 scrollbar-hide"
                >
                    {galleryImages.map((image, idx) => (
                        <button
                            type="button"
                            key={image.src}
                            onClick={() => {
                                const move = getShortestMove(
                                    idx,
                                    imageIndex,
                                    total
                                );
                                setPage(page + move);
                            }}
                            className={`relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-md transition-all ${
                                idx === imageIndex
                                    ? "ring-2 ring-white opacity-100"
                                    : "opacity-50 hover:opacity-80"
                            }`}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover"
                                sizes="56px"
                            />
                        </button>
                    ))}
                </div>
                <div className="text-center text-sm text-white/80 mt-2">
                    {imageIndex + 1} / {totalImages}
                </div>
            </div>
        </div>,
        document.body
    );
}

export default function GalleryModal(props: GalleryModalProps) {
    if (!props.isOpen) return null;
    return <GalleryModalInner {...props} />;
}
