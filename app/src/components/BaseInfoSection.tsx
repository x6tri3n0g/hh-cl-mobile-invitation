"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const PARENTS_INFO = [
    {
        role: "신랑",
        name: "황현",
        parents: "황선주 · 김미량의 아들",
        image: "https://res.cloudinary.com/dpjkhhtmt/image/upload/v1769927430/KakaoTalk_Photo_2026-01-25-19-12-14_002_fvoc1y.jpg",
    },
    {
        role: "신부",
        name: "김채린",
        parents: "김기용 · 인희숙의 딸",
        image: "https://res.cloudinary.com/dpjkhhtmt/image/upload/v1769927435/KakaoTalk_Photo_2026-01-25-19-12-15_003_uaqiuj.jpg",
    },
];

export default function BaseInfoSection() {
    return (
        <section id="base_info" className="text-center">
            <p className="text-[10px] tracking-[0.3em] text-ink/40 uppercase">
                Basic Information
            </p>
            <h2 className="mt-2 text-2xl text-ink">신랑 & 신부</h2>
            <div className="mt-8 grid grid-cols-2 gap-4">
                {PARENTS_INFO.map((person, index) => (
                    <ScrollReveal
                        key={person.role}
                        delay={0.1 * index}
                        direction={index % 2 === 0 ? "right" : "left"}
                        className="rounded-2xl border border-accent bg-accent/10 p-4"
                        once={false}
                    >
                        <article>
                            <p className="text-xs uppercase tracking-[0.2em] text-ink/55">
                                {person.role}
                            </p>
                            <div className="mt-3 overflow-hidden rounded-xl border border-accent bg-background">
                                <div className="relative aspect-square">
                                    <Image
                                        src={person.image}
                                        alt={person.name}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 50vw, 33vw"
                                    />
                                </div>
                            </div>
                            <p className="mt-3 text-sm text-ink/70">
                                {person.parents}
                            </p>
                            <p className="mt-1 text-base text-ink">
                                {person.name}
                            </p>
                        </article>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
