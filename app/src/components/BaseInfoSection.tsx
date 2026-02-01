"use client";

import Image from "next/image";

export default function BaseInfoSection() {
    return (
        <section id="base_info" className=" text-center">
            <p className="text-xs tracking-[0.2em] text-ink/55">
                BASIC INFORMATION
            </p>
            <h2 className="mt-2 text-2xl text-ink">신랑 & 신부</h2>
            <div className="mt-8 grid grid-cols-2 gap-4">
                <article className="rounded-2xl border border-line bg-accent/10 p-4">
                    <p className="text-xs tracking-[0.2em] text-ink/55">신랑</p>
                    <div className="mt-3 overflow-hidden rounded-xl border border-line bg-background">
                        <div className="relative aspect-square">
                            <img
                                src="https://res.cloudinary.com/dpjkhhtmt/image/upload/v1769927430/KakaoTalk_Photo_2026-01-25-19-12-14_002_fvoc1y.jpg"
                                alt="신랑"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <p className="mt-3 text-sm text-ink/70">
                        황선주 · 김미량의 아들
                    </p>
                    <p className="mt-1 text-base text-ink">황현</p>
                </article>
                <article className="rounded-2xl border border-line bg-accent/10 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-ink/55">
                        신부
                    </p>
                    <div className="mt-3 overflow-hidden rounded-xl border border-line bg-background">
                        <div className="relative aspect-square">
                            <img
                                src="https://res.cloudinary.com/dpjkhhtmt/image/upload/v1769927435/KakaoTalk_Photo_2026-01-25-19-12-15_003_uaqiuj.jpg"
                                alt="신부"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <p className="mt-3 text-sm text-ink/70">
                        김기용 · 안희숙의 딸
                    </p>
                    <p className="mt-1 text-base text-ink">김채린</p>
                </article>
            </div>
        </section>
    );
}
