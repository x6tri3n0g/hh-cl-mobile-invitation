"use client";

import { motion } from "framer-motion";
import useHeroScroll from "./useHeroScroll";
import DecorativeStars from "./DecorativeStars";
import { HERO_IMAGES, HERO_TEXT } from "./constants";

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
    const heroImage = HERO_IMAGES[0];

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
                        src={heroImage.src}
                        alt={heroImage.alt}
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
            <DecorativeStars />

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
                            {HERO_TEXT.dateLabel}
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
                                {HERO_TEXT.groomName}
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
                                {HERO_TEXT.brideName}
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
                            {HERO_TEXT.subtitle}
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
