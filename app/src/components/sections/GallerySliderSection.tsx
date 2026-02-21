"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, PanInfo } from "framer-motion";
import GalleryModal from "./GalleryModal";
import ScrollReveal from "../ScrollReveal";

const galleryImages = [
    {
        src: "https://res.cloudinary.com/dpjkhhtmt/image/upload/v1769927441/KakaoTalk_Photo_2026-01-25-19-12-22_013_tgsftb.jpg",
        alt: "웨딩 사진 1",
    },
    {
        src: "https://res.cloudinary.com/dpjkhhtmt/image/upload/v1769927448/KakaoTalk_Photo_2026-01-25-19-12-23_014_yxcjbb.jpg",
        alt: "웨딩 사진 2",
    },
    {
        src: "https://res.cloudinary.com/dpjkhhtmt/image/upload/v1769927440/KakaoTalk_Photo_2026-01-25-19-12-19_009_fd3nip.jpg",
        alt: "웨딩 사진 3",
    },
    {
        src: "https://res.cloudinary.com/dpjkhhtmt/image/upload/v1769927436/KakaoTalk_Photo_2026-01-25-19-12-18_008_pc7n0k.jpg",
        alt: "웨딩 사진 4",
    },
    {
        src: "https://res.cloudinary.com/dpjkhhtmt/image/upload/v1769927432/KakaoTalk_Photo_2026-01-25-19-12-24_015_vctzjm.jpg",
        alt: "웨딩 사진 5",
    },
    {
        src: "https://res.cloudinary.com/dpjkhhtmt/image/upload/v1769927439/KakaoTalk_Photo_2026-01-25-19-12-21_012_u7pkrr.jpg",
        alt: "웨딩 사진 6",
    },
    {
        src: "https://res.cloudinary.com/dpjkhhtmt/image/upload/v1769927434/KakaoTalk_Photo_2026-01-25-19-12-16_005_rbzzuv.jpg",
        alt: "웨딩 사진 7",
    },
    {
        src: "https://res.cloudinary.com/dpjkhhtmt/image/upload/v1769927433/KakaoTalk_Photo_2026-01-25-19-12-17_006_pwded0.jpg",
        alt: "웨딩 사진 8",
    },
    {
        src: "https://res.cloudinary.com/dpjkhhtmt/image/upload/v1769927434/L1020941_upakvn.jpg",
        alt: "웨딩 사진 9",
    },
    {
        src: "https://res.cloudinary.com/dpjkhhtmt/image/upload/v1769927431/L1020956_xccrgj.jpg",
        alt: "웨딩 사진 10",
    },
] as const;

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

export default function GallerySliderSection() {
    const [page, setPage] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const total = galleryImages.length;
    // Normalize index for logic but use 'page' for absolute positioning
    const imageIndex = ((page % total) + total) % total;
    const current = galleryImages[imageIndex];

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [dragDistance, setDragDistance] = useState(0);

    const paginate = (newDirection: number) => {
        setPage(page + newDirection);
    };

    const goPrev = () => paginate(-1);
    const goNext = () => paginate(1);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
        setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
        setDragDistance(0);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2; // Scroll-fast
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft = scrollLeft - walk;
        }
        setDragDistance(Math.abs(walk));
    };

    const handleThumbnailClick = (idx: number) => {
        if (dragDistance < 5) {
            // Find shortest path to the index
            const diff = idx - imageIndex;
            // Handle wrap-around distance
            let move = diff;
            if (diff > total / 2) move -= total;
            else if (diff < -total / 2) move += total;

            setPage(page + move);
        }
    };

    // Auto-scroll to selected thumbnail
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

    return (
        <section id="gallery" className="">
            <div className="text-center">
                <p className="text-xs tracking-[0.2em] text-ink/55">GALLERY</p>
                <h2 className="mt-2 text-2xl text-ink">웨딩 갤러리</h2>
            </div>

            <div className="mt-6">
                <ScrollReveal direction="up" delay={0.1}>
                    <div className="relative aspect-[9/13] w-full overflow-hidden rounded-2xl border border-line bg-accent/10">
                        {/* 
                             Stable Image Mount Strategy:
                             Instead of swapping components with AnimatePresence (which triggers network checks),
                             we mount all images and translate them.
                        */}
                        <div className="relative h-full w-full">
                            {galleryImages.map((image, i) => {
                                // Calculate position relative to the current page
                                let diff = i - (page % total);
                                if (diff > total / 2) diff -= total;
                                if (diff < -total / 2) diff += total;

                                return (
                                    <motion.div
                                        key={i}
                                        initial={false}
                                        animate={{
                                            x: `${diff * 100}%`,
                                            opacity:
                                                Math.abs(diff) < 1.5 ? 1 : 0,
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
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover pointer-events-none"
                                            sizes="(max-width: 640px) 90vw, 420px"
                                            priority={i === imageIndex}
                                        />
                                    </motion.div>
                                );
                            })}

                            <motion.div
                                className="absolute inset-0 z-20"
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(
                                    e: any,
                                    { offset, velocity }: PanInfo
                                ) => {
                                    const swipe = swipePower(
                                        offset.x,
                                        velocity.x
                                    );
                                    if (swipe < -swipeConfidenceThreshold) {
                                        paginate(1);
                                    } else if (
                                        swipe > swipeConfidenceThreshold
                                    ) {
                                        paginate(-1);
                                    }
                                }}
                            />
                        </div>

                        <button
                            type="button"
                            onClick={goPrev}
                            className="absolute z-30 left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/50"
                            aria-label="이전"
                        >
                            ‹
                        </button>
                        <button
                            type="button"
                            onClick={goNext}
                            className="absolute z-30 right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/50"
                            aria-label="다음"
                        >
                            ›
                        </button>
                        <div className="absolute z-30 bottom-3 left-3 rounded-full bg-black/30 px-2 py-1 text-xs text-white">
                            {imageIndex + 1} / {total}
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsOpen(true)}
                            className="absolute z-30 bottom-3 right-3 rounded-full bg-background/85 px-3 py-1 text-xs text-ink transition-colors hover:bg-background"
                        >
                            원본보기
                        </button>
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.2} className="mt-3">
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-2 overflow-x-auto p-2 scrollbar-hide cursor-grab active:cursor-grabbing"
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                    >
                        {galleryImages.map((image, idx) => (
                            <button
                                type="button"
                                key={image.src}
                                onClick={() => handleThumbnailClick(idx)}
                                className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border transition-all ${
                                    idx === imageIndex
                                        ? "border-highlight/30 opacity-100 ring-2 ring-highlight/80 ring-offset-1"
                                        : "border-line opacity-70 hover:opacity-100"
                                }`}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover pointer-events-none"
                                    sizes="64px"
                                />
                            </button>
                        ))}
                    </div>
                </ScrollReveal>
            </div>

            <GalleryModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                currentImage={current}
                currentIndex={imageIndex}
                totalImages={total}
                onPrev={goPrev}
                onNext={goNext}
                galleryImages={galleryImages}
            />
        </section>
    );
}
