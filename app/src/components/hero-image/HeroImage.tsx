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
                        opacity: [0, 0.5, 0.9, 0.5, 0], // 투명도 변화 최적화
                        scale: [0.5, 1, 1.2, 1, 0.5], // 크기 변화 최적화
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        delay: star.delay,
                        ease: "easeInOut",
                    }}
                    className="absolute rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)]"
                    style={{
                        left: star.x,
                        top: star.y,
                        width: star.size,
                        height: star.size,
                    }}
                >
                    {/* 별 중앙의 더 밝은 핵심점 */}
                    <div className="absolute inset-0 rounded-full bg-white shadow-[0_0_4px_white]" />
                </motion.div>
            ))}
        </div>
    );
};

export default function HeroImage() {
    const { fadeOutProgress } = useHeroScroll();

    const isHidden = fadeOutProgress >= 1;

    // Scroll-linked transforms
    const imageScale = 1 - fadeOutProgress * 0.05;
    const containerPadding = fadeOutProgress * 24;
    const containerRadius = fadeOutProgress * 48;

    // Text animations based on scroll
    const textY = fadeOutProgress * -100;
    const textOpacity = 1 - fadeOutProgress * 1.8;
    const textBlur = fadeOutProgress * 12;

    return (
        <section
            className="fixed inset-x-0 top-0 left-0 right-0 z-20 h-[100svh] overflow-hidden bg-ink"
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
                    filter: "brightness(2) contrast(1.1)",
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

                    {/* Darker Overlay as we scroll */}
                    <motion.div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(34, 31, 26, 0.1) 0%, rgba(34, 31, 26, 0.5) 60%, rgba(34, 31, 26, 0.9) 100%)",
                            opacity: 1 + fadeOutProgress * 0.3,
                        }}
                    >
                        <div className="absolute inset-0 bg-ink/15 mix-blend-overlay" />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Decorative Elements (Random Light Streaks) */}
            <DecorativeElements />

            {/* Content Layer */}
            <div className="relative z-20 flex h-full flex-col justify-end px-8 pb-28 text-white">
                <motion.div
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
                        <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[10px] font-medium tracking-[0.3em] uppercase backdrop-blur-md">
                            2026.05.30 · 토요일 · 오후 6시 30분
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.2,
                            delay: 1.0,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="mb-8 text-5xl font-light leading-[1.2] tracking-tight sm:text-7xl"
                    >
                        <span className="text-glow-strong">
                            황현 &amp; 김채린
                        </span>
                        <br />
                        <span className="text-glow font-medium italic">
                            결혼합니다
                        </span>
                    </motion.h2>

                    {/* Description / Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1.8 }}
                        className="flex items-center gap-4"
                    >
                        <div className="h-px w-10 bg-white/20" />
                        <p className="text-[10px] tracking-[0.5em] text-white/50 uppercase">
                            Swipe Up
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
