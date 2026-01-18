"use client";

import Image from "next/image";

export default function BaseInfoSection() {
    return (
        <section id="base_info" className="reveal text-center">
            <p className="invitation-body text-xs tracking-[0.2em] text-[#9A5D7A]">
                BASIC INFORMATION
            </p>
            <h2 className="invitation-serif mt-2 text-2xl text-[#4A2B3A]">
                우리의 소개
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-4">
                <article className="rounded-2xl border border-[#F2D3DF] bg-[#FFF4F8]/85 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#9A5D7A]">
                        신랑
                    </p>
                    <div className="mt-3 overflow-hidden rounded-xl border border-[#F2D3DF] bg-white">
                        <div className="relative aspect-square">
                            <Image
                                src="https://res.cloudinary.com/dpjkhhtmt/image/upload/1_h1flu2_0d0091.jpg"
                                alt="신랑"
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 40vw, 200px"
                            />
                        </div>
                    </div>
                    <p className="invitation-body mt-3 text-sm text-[#7A5665]">
                        정경철 · 나해영 의 아들
                    </p>
                    <p className="invitation-serif mt-1 text-base text-[#4A2B3A]">
                        황현
                    </p>
                </article>
                <article className="rounded-2xl border border-[#F2D3DF] bg-[#FFF4F8]/85 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#9A5D7A]">
                        신부
                    </p>
                    <div className="mt-3 overflow-hidden rounded-xl border border-[#F2D3DF] bg-white">
                        <div className="relative aspect-square">
                            <Image
                                src="https://res.cloudinary.com/dpjkhhtmt/image/upload/3_efhpm9_0d0091.jpg"
                                alt="신부"
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 40vw, 200px"
                            />
                        </div>
                    </div>
                    <p className="invitation-body mt-3 text-sm text-[#7A5665]">
                        전명재 · 김은경 의 딸
                    </p>
                    <p className="invitation-serif mt-1 text-base text-[#4A2B3A]">
                        김채린
                    </p>
                </article>
            </div>
            <div className="mt-6 flex justify-center">
                <button
                    type="button"
                    className="invitation-body rounded-2xl border border-[#F2D3DF] px-4 py-2 text-xs text-[#7A5665]"
                >
                    연락하기
                </button>
            </div>
        </section>
    );
}
