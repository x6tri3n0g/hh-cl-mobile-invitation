"use client";

import IntroImage from "./intro-image/IntroImage";

export default function InvitationHeader() {
    return (
        <header className="reveal relative flex flex-col items-center gap-6 text-center">
            <span className="invitation-body animate-fade-up rounded-full border border-[#F2C8D9] px-5 py-1 text-xs uppercase tracking-[0.35em] text-[#9A5D7A]">
                2025.05.30 · SAT · PM 18:30
            </span>
            <div className="animate-fade-up delay-100">
                <h1 className="invitation-serif text-[2.4rem] leading-tight text-[#4A2B3A] sm:text-[3.1rem]">
                    황현 &amp; 김채린
                </h1>
                <p className="invitation-body mt-3 text-sm leading-relaxed text-[#7A5665] sm:text-base">
                    저희의 결혼식을 함께 축복해 주세요.
                </p>
            </div>
            <IntroImage />
            <div className="animate-fade-up delay-200 flex w-full max-w-md flex-col gap-3">
                <div className="rounded-2xl border border-[#F2D3DF] bg-[#FFF4F8]/85 px-5 py-4 text-sm text-[#5C3E4A] shadow-[0_18px_40px_rgba(152,86,116,0.12)]">
                    <p className="invitation-body">장소 · 강동 루벨</p>
                    <p className="invitation-body mt-1 text-xs text-[#9A5D7A]">
                        서울 강동구 어린이대공원로 304
                    </p>
                </div>
                <a href="https://calendar.app.google/jrphRKgsT2scdamM7" target="_blank" className="invitation-body rounded-full bg-[#E07AA9] px-5 py-3 text-sm text-[#FFF7FB] shadow-[0_12px_24px_rgba(224,122,169,0.28)] transition hover:-translate-y-0.5 hover:bg-[#C96593]">
                    일정 저장하기
                </a>
            </div>
        </header>
    );
}
