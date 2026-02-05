"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import GalleryModal from "./GalleryModal";
import ScrollReveal from "./ScrollReveal";

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

export default function GallerySliderSection() {
    const [index, setIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const total = galleryImages.length;
    const current = galleryImages[index];

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [dragDistance, setDragDistance] = useState(0);

    const goPrev = () => setIndex((prev) => (prev - 1 + total) % total);
    const goNext = () => setIndex((prev) => (prev + 1) % total);

    // Auto-scroll to selected thumbnail
    useEffect(() => {
        if (!scrollContainerRef.current) return;

        const container = scrollContainerRef.current;
        const thumbnailButton = container.children[index] as HTMLElement;

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
    }, [index]);

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
        // Only select if it was a click, not a drag
        if (dragDistance < 5) {
            setIndex(idx);
        }
    };

    return (
        <section id="gallery" className="">
            <div className="text-center">
                <p className="text-xs tracking-[0.2em] text-ink/55">GALLERY</p>
                <h2 className="mt-2 text-2xl text-ink">웨딩 갤러리</h2>
            </div>

            <div className="mt-6">
                <ScrollReveal direction="up" delay={0.1}>
                    <div className="relative overflow-hidden rounded-2xl border border-line bg-accent/10">
                        <div className="relative aspect-[9/13]">
                            <Image
                                src={current.src}
                                alt={current.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 90vw, 420px"
                                priority
                            />
                        </div>
                        <button
                            type="button"
                            onClick={goPrev}
                            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/50"
                            aria-label="이전"
                        >
                            ‹
                        </button>
                        <button
                            type="button"
                            onClick={goNext}
                            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/50"
                            aria-label="다음"
                        >
                            ›
                        </button>
                        <div className="absolute bottom-3 left-3 rounded-full bg-black/30 px-2 py-1 text-xs text-white">
                            {index + 1} / {total}
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsOpen(true)}
                            className="absolute bottom-3 right-3 rounded-full bg-background/85 px-3 py-1 text-xs text-ink transition-colors hover:bg-background"
                        >
                            원본보기
                        </button>
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.2} className="mt-3">
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide cursor-grab active:cursor-grabbing"
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
                                    idx === index
                                        ? "border-accent opacity-100 ring-2 ring-accent ring-offset-1"
                                        : "border-line opacity-70 hover:opacity-100"
                                }`}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover pointer-events-none" // Avoid creating image drag ghost
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
                currentIndex={index}
                totalImages={total}
                onPrev={goPrev}
                onNext={goNext}
            />
        </section>
    );
}
