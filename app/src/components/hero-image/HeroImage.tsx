"use client";

import useHeroScroll from "./useHeroScroll";

export default function HeroImage() {
    const { fadeOutProgress } = useHeroScroll();

    const isHidden = fadeOutProgress >= 1;
    const opacity = 1 - fadeOutProgress;
    const scale = 1 - fadeOutProgress * 0.02;
    const textLift = fadeOutProgress * 56;
    const textScale = 1 - fadeOutProgress * 0.06;
    const textOpacity = 1 - fadeOutProgress * 0.55;
    const textBlur = fadeOutProgress * 1.2;

    return (
        <section
            className="fixed inset-x-0 top-0 left-0 right-0 z-20 h-[100svh] overflow-hidden bg-ink"
            style={{
                opacity,
                pointerEvents: isHidden ? "none" : "auto",
                transition: "opacity 0.35s ease",
            }}
            aria-hidden={isHidden}
        >
            <div
                className="absolute inset-0"
                style={{
                    transform: `scale(${scale})`,
                    transformOrigin: "bottom center",
                    transition: "transform 0.35s ease",
                }}
            >
                <img
                    src="https://res.cloudinary.com/dpjkhhtmt/image/upload/v1769927440/KakaoTalk_Photo_2026-01-25-19-12-19_009_fd3nip.jpg"
                    alt="메인 웨딩 사진 1"
                    className="w-full h-full object-cover"
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(52, 48, 40, 0.15), rgba(52, 48, 40, 0.78))",
                    }}
                />
            </div>

            {/* 텍스트 레이어 - scale 영향 없음 */}
            <div
                className="relative z-10 flex h-full flex-col justify-end gap-4 px-5 pb-24 text-white"
                style={{
                    transform: `translateY(-${textLift}px) scale(${textScale})`,
                    opacity: textOpacity,
                    filter: `blur(${textBlur}px)`,
                    transformOrigin: "bottom center",
                }}
            >
                <span className="text-lg">
                    <strong className="text-white">
                        2025.05.30 · SAT · PM 18:30
                    </strong>
                </span>
                <h2 className="text-2xl text-white">
                    황현 &amp; 김채린의
                    <br />첫 시작
                </h2>
                <p className="text-sm text-white/80">
                    아래로 스크롤하면 갤러리부터 이어집니다.
                </p>
            </div>
        </section>
    );
}
