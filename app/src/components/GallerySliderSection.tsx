"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

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

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

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
                        원본보기
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
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-[64px] h-[64px] object-cover"
                            />
                        </button>
                    ))}
                </div>
            </div>

            {isOpen &&
                createPortal(
                    <div className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
                        <button
                            type="button"
                            onClick={goPrev}
                            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3 text-2xl text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                            aria-label="이전"
                        >
                            ‹
                        </button>

                        <div className="animate-scale-in relative w-full max-w-md">
                            <div className="relative aspect-[9/13] overflow-hidden rounded-2xl bg-black">
                                <img
                                    src={current.src}
                                    alt={current.alt}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="mt-3 text-center text-sm text-white/80">
                                {index + 1} / {total}
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="mt-3 w-full rounded-full bg-background/90 py-2 text-sm text-ink"
                            >
                                닫기
                            </button>
                        </div>

                        <button
                            type="button"
                            onClick={goNext}
                            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3 text-2xl text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                            aria-label="다음"
                        >
                            ›
                        </button>
                    </div>,
                    document.body
                )}
        </section>
    );
}
