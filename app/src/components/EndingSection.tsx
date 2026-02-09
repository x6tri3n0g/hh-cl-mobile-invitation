"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

const COLORS = ["#F5E6CC", "#FCE4EC", "#E1BEE7", "#FFF9C4", "#FFFFFF"];

const ConfettiParticle = ({ isLeft }: { isLeft: boolean; index: number }) => {
    const configRef = useRef<{
        randomX: number;
        randomY: number;
        randomRotation: number;
        randomScale: number;
        color: string;
        duration: number;
        delay: number;
        isCircle: boolean;
    } | null>(null);

    // Initialize config only once
    if (!configRef.current) {
        configRef.current = {
            randomX: (Math.random() - 0.5) * 600,
            randomY: -400 - Math.random() * 600,
            randomRotation: Math.random() * 720,
            randomScale: 0.2 + Math.random() * 0.8,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            duration: 6 + Math.random() * 4,
            delay: Math.random() * 2,
            isCircle: Math.random() > 0.3,
        };
    }

    const config = configRef.current;

    return (
        <motion.div
            initial={{
                x: isLeft ? -20 : 20,
                y: 0,
                scale: 0,
                rotate: 0,
                opacity: 0,
            }}
            animate={{
                x: (isLeft ? 250 : -250) + config.randomX,
                y: config.randomY,
                scale: config.randomScale,
                rotate: config.randomRotation,
                opacity: [0, 0.6, 0.6, 0],
            }}
            transition={{
                duration: config.duration,
                delay: config.delay,
                ease: [0.1, 0.2, 0.4, 1],
            }}
            className="absolute bottom-0 pointer-events-none"
            style={{
                width: "8px",
                height: "8px",
                backgroundColor: config.color,
                borderRadius: config.isCircle ? "50%" : "1px",
                left: isLeft ? "0%" : "auto",
                right: !isLeft ? "0%" : "auto",
                filter: "blur(0.8px)",
                boxShadow: `0 0 10px ${config.color}44`,
            }}
        />
    );
};

export default function EndingSection() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.5 });
    const [burstKey, setBurstKey] = useState(0);

    useEffect(() => {
        if (isInView) {
            const interval = setInterval(() => {
                setBurstKey((prev) => prev + 1);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isInView]);

    return (
        <section
            id="ending"
            ref={containerRef}
            className="relative py-40 text-center overflow-hidden"
        >
            {isInView && (
                <AnimatePresence mode="wait">
                    <div
                        key={burstKey}
                        className="absolute inset-0 pointer-events-none"
                    >
                        <div className="absolute left-0 bottom-0 w-20 h-20">
                            {[...Array(35)].map((_, i) => (
                                <ConfettiParticle
                                    key={`left-${burstKey}-${i}`}
                                    isLeft={true}
                                    index={i}
                                />
                            ))}
                        </div>
                        <div className="absolute right-0 bottom-0 w-20 h-20">
                            {[...Array(35)].map((_, i) => (
                                <ConfettiParticle
                                    key={`right-${burstKey}-${i}`}
                                    isLeft={false}
                                    index={i}
                                />
                            ))}
                        </div>
                    </div>
                </AnimatePresence>
            )}

            <ScrollReveal direction="up" delay={0.2} blur={true}>
                <div className="flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.4,
                            duration: 1.5,
                            ease: "easeOut",
                        }}
                        className="mb-14"
                    >
                        <div className="h-px w-32 bg-linear-to-r from-transparent via-accent/30 to-transparent" />
                    </motion.div>

                    <div className="text-base leading-loose text-ink/70 whitespace-pre-line font-medium">
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 1.0,
                                duration: 1.5,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            바쁘신 가운데 귀한 걸음 해주셔서 감사합니다.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 2.2,
                                duration: 1.5,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative inline-block mt-5"
                        >
                            <span className="relative z-10 font-bold px-1 tracking-tight whitespace-pre-line">
                                서로를 아끼고 존중하며,
                                {"\n"}늘 건강하고 행복한 부부가 되겠습니다.
                            </span>
                        </motion.div>
                    </div>

                    <div className="mt-10 mb-2">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.3, duration: 0.2 }}
                            className="relative inline-block"
                        >
                            <h3 className="relative z-10 text-lg text-ink">
                                축하해주셔서 감사합니다.
                            </h3>
                        </motion.div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
