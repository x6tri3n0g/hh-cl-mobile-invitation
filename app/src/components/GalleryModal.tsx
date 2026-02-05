"use client";

import { useEffect } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

interface GalleryModalProps {
    isOpen: boolean;
    onClose: () => void;
    currentImage: { src: string; alt: string };
    currentIndex: number;
    totalImages: number;
    onPrev: () => void;
    onNext: () => void;
}

export default function GalleryModal({
    isOpen,
    onClose,
    currentImage,
    currentIndex,
    totalImages,
    onPrev,
    onNext,
}: GalleryModalProps) {
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

    if (!isOpen) return null;

    return createPortal(
        <div className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
            <button
                type="button"
                onClick={onPrev}
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-2xl text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                aria-label="이전"
            >
                ‹
            </button>

            <div className="animate-scale-in relative w-full max-w-2xl h-[80vh] flex flex-col items-center justify-center">
                <div className="relative w-full h-full">
                    <Image
                        src={currentImage.src}
                        alt={currentImage.alt}
                        fill
                        className="object-contain"
                        sizes="100vw"
                        quality={90}
                        priority
                    />
                </div>
                <div className="absolute bottom-[-3rem] text-sm text-white/80">
                    {currentIndex + 1} / {totalImages}
                </div>
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white"
                >
                    ✕ 닫기
                </button>
            </div>

            <button
                type="button"
                onClick={onNext}
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-2xl text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                aria-label="다음"
            >
                ›
            </button>
        </div>,
        document.body
    );
}
