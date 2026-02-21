"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useHeroScroll from "./useHeroScroll";

// 은은한 별빛(반짝임) 속성 정의
interface StarProps {
    id: number;
    x: string;
    y: string;
    size: number;
    delay: number;
    duration: number;
}

const DecorativeElements = () => {
    const [stars, setStars] = useState<StarProps[]>([]);

    useEffect(() => {
        // 상단 25svh 이내에 배치된 촘촘한 별빛 생성 (크기 더 섬세하게 축소)
        const newStars = Array.from({ length: 120 }, (_, i) => ({
            id: i,
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`, // 컨테이너(25svh) 내 무작위 배치
            size: 0.8 + Math.random() * 3.2, // 0.8px ~ 4.0px 사이의 더 작은 크기
            delay: Math.random() * 15,
            duration: 4 + Math.random() * 8,
        }));
        setStars(newStars);
    }, []);

    if (stars.length === 0) return null;

    return (
        <div className="absolute inset-x-0 top-0 h-[25svh] z-40 pointer-events-none overflow-hidden">
            {stars.map((star) => (
                <motion.div
                    key={`star-${star.id}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0, 0.4, 0.7, 0.4, 0], // 투명도 변화
                        scale: [0.5, 1, 1.2, 1, 0.5],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        delay: star.delay,
                        ease: "easeInOut",
                    }}
                    className="absolute rounded-full bg-accent/60 shadow-[0_0_8px_rgba(var(--accent-rgb),0.4)]"
                    style={{
                        left: star.x,
                        top: star.y,
                        width: star.size,
                        height: star.size,
                    }}
                >
                    {/* 별 중앙의 더 밝은 핵심점 */}
                    <div className="absolute inset-0 rounded-full bg-accent/80" />
                </motion.div>
            ))}
        </div>
    );
};

export default function HeroImage() {
    const { fadeOutProgress } = useHeroScroll();

    const isHidden = fadeOutProgress >= 1;

    // Scroll-linked transforms for parallax
    const imageScale = 1; // 스케일 효과 제거
    const imageY = fadeOutProgress * 120; // 패럴랙스 강도 강화
    const containerPadding = fadeOutProgress * 24;
    const containerRadius = fadeOutProgress * 48;

    // Text animations based on scroll
    const textY = fadeOutProgress * -100;
    const textOpacity = 1 - fadeOutProgress * 1.8;
    const textBlur = fadeOutProgress * 12;

    return (
        <section
            className="fixed inset-x-0 top-0 left-0 right-0 z-20 h-[100svh] overflow-hidden bg-white"
            style={{
                pointerEvents: isHidden ? "none" : "auto",
                opacity: isHidden ? 0 : 1,
                transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            aria-hidden={isHidden}
        >
            {/* Background Image Layer */}
            <motion.div
                initial={{
                    scale: 1.2,
                    opacity: 0,
                    filter: "brightness(1.1) contrast(1.05)",
                }}
                animate={{
                    scale: 1,
                    opacity: 1,
                    filter: "brightness(1) contrast(1)",
                }}
                transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex items-center justify-center"
                style={{
                    padding: `${containerPadding}px`,
                }}
            >
                <motion.div
                    className="relative h-full w-full overflow-hidden shadow-2xl"
                    style={{
                        borderRadius: `${containerRadius}px`,
                        scale: imageScale,
                        y: imageY,
                        transformOrigin: "center center",
                    }}
                >
                    <motion.img
                        src="https://res.cloudinary.com/dpjkhhtmt/image/upload/v1769927440/KakaoTalk_Photo_2026-01-25-19-12-19_009_fd3nip.jpg"
                        alt="메인 웨딩 사진 1"
                        className="h-full w-full object-cover"
                        initial={{ scale: 1.15 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                    />

                    {/* Lighter Dark Overlay as we scroll */}
                    <motion.div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.6) 100%)",
                            opacity: 1,
                        }}
                    >
                        <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <DecorativeElements />

            {/* Content Layer (White Text for Dark Overlay) */}
            <div className="relative z-20 flex h-full flex-col justify-end px-8 pb-28 text-white">
                <motion.div
                    className="drop-shadow-sm"
                    style={{
                        y: textY,
                        opacity: textOpacity,
                        filter: `blur(${textBlur}px)`,
                    }}
                >
                    {/* Date Tag */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.2,
                            delay: 0.8,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="mb-5"
                    >
                        <span className="inline-block rounded-full border border-white/20 bg-black/30 px-4 py-1.5 text-[10px] font-bold tracking-[0.3em] uppercase backdrop-blur-md text-white/90">
                            2026.05.30 · 토요일 · 오후 6시 30분
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.2,
                            delay: 1.0,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="mb-8 flex flex-col gap-y-1 text-4xl font-semibold tracking-tight sm:text-7xl"
                    >
                        <div className="flex flex-wrap items-center gap-x-3">
                            <span className="relative inline-block pb-1">
                                황현
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{
                                        duration: 1,
                                        delay: 2,
                                        ease: "circOut",
                                    }}
                                    className="absolute bottom-0 left-0 h-[6px] bg-highlight/50"
                                />
                            </span>
                            <span className="opacity-40 font-light">&</span>
                            <span className="relative inline-block pb-1">
                                김채린
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{
                                        duration: 1,
                                        delay: 2.6,
                                        ease: "circOut",
                                    }}
                                    className="absolute bottom-0 left-0 h-[6px] bg-highlight/50"
                                />
                            </span>
                        </div>
                        <p className="text-[1.6rem] font-medium opacity-95 sm:text-4xl">
                            결혼식에 초대합니다.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
