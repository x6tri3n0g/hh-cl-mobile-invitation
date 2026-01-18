"use client";

import Image from "next/image";

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

export default function GallerySection() {
    return (
        <section className="animate-fade-up delay-300">
            <h2 className="invitation-serif text-lg text-[#4A2B3A]">
                갤러리
            </h2>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {galleryImages.map((image, index) => (
                    <div
                        key={`gallery-${index}`}
                        className="relative aspect-3/4 overflow-hidden rounded-2xl border border-[#F2D3DF] bg-[#FBE7F1]"
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.2),transparent)]" />
                    </div>
                ))}
            </div>
        </section>
    );
}
