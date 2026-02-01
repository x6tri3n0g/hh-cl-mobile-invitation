"use client";

import Image from "next/image";
import { useState } from "react";

const galleryImages = [
    {
        src: "https://res.cloudinary.com/dpjkhhtmt/image/upload/1_h1flu2_0d0091.jpg",
        alt: "웨딩 사진 1",
    },
    {
        src: "https://res.cloudinary.com/dpjkhhtmt/image/upload/2_j338eu_0d0091.jpg",
        alt: "웨딩 사진 2",
    },
    {
        src: "https://res.cloudinary.com/dpjkhhtmt/image/upload/3_efhpm9_0d0091.jpg",
        alt: "웨딩 사진 3",
    },
];

export default function GallerySliderSection() {
    const [index, setIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const total = galleryImages.length;
    const current = galleryImages[index];

    const goPrev = () => setIndex((prev) => (prev - 1 + total) % total);
    const goNext = () => setIndex((prev) => (prev + 1) % total);

    return (
        <section id="gallery" className="">
            <div className="text-center">
                <p className="text-xs tracking-[0.2em] text-ink/55">GALLERY</p>
                <h2 className="mt-2 text-2xl text-ink">웨딩 갤러리</h2>
            </div>

            <div className="mt-6">
                <div className="relative overflow-hidden rounded-2xl border border-line bg-accent/10">
                    <div className="relative aspect-[9/13]">
                        <Image
                            src={current.src}
                            alt={current.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 90vw, 420px"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={goPrev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white"
                        aria-label="이전"
                    >
                        ‹
                    </button>
                    <button
                        type="button"
                        onClick={goNext}
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white"
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
                        className="absolute bottom-3 right-3 rounded-full bg-background/85 px-3 py-1 text-xs text-ink"
                    >
                        전체보기
                    </button>
                </div>

                <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
                    {galleryImages.map((image, idx) => (
                        <button
                            type="button"
                            key={image.src}
                            onClick={() => setIndex(idx)}
                            className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border ${
                                idx === index ? "border-accent" : "border-line"
                            }`}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover"
                                sizes="64px"
                            />
                        </button>
                    ))}
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
                    <div className="relative w-full max-w-md">
                        <div className="relative aspect-[9/13] overflow-hidden rounded-2xl bg-black">
                            <Image
                                src={current.src}
                                alt={current.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 90vw, 420px"
                            />
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="mt-4 w-full rounded-full bg-background/90 py-2 text-sm text-ink"
                        >
                            닫기
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
