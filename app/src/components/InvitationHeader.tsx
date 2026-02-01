"use client";

import IntroImage from "./intro-image/IntroImage";

export default function InvitationHeader() {
    return (
        <header className=" relative flex flex-col items-center gap-6 text-center">
            <span className="animate-fade-up rounded-full border border-line px-5 py-1 text-xs uppercase tracking-[0.35em] text-line">
                2025.05.30 · SAT · PM 18:30
            </span>
            <div className="animate-fade-up delay-100">
                <h1 className="text-[2.4rem] leading-tight text-ink sm:text-[3.1rem]">
                    황현 &amp; 김채린
                </h1>
                <p className="mt-3 text-sm leading-relaxed text-ink/70 sm:text-base">
                    저희의 결혼식을 함께 축복해 주세요.
                </p>
            </div>
            <IntroImage />
            <div className="animate-fade-up delay-200 flex w-full max-w-md flex-col gap-3">
                <div className="rounded-2xl border border-line bg-accent px-5 py-4 text-sm text-ink">
                    <p className="text-sm">장소 · 강동 루벨</p>
                    <p className="mt-1 text-xs text-ink/55">
                        서울 강동구 어린이대공원로 304
                    </p>
                </div>
                <a
                    href="https://calendar.app.google/jrphRKgsT2scdamM7"
                    target="_blank"
                    className="rounded-full bg-accent px-5 py-3 text-sm text-ink transition hover:-translate-y-0.5 hover:bg-accent"
                >
                    일정 저장하기
                </a>
            </div>
        </header>
    );
}
