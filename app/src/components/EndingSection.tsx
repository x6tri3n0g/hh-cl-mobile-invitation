"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";
import ScrollReveal from "./ScrollReveal";

const COLORS = ["#e8e0f0", "#a550ff", "#ffffff", "#ffd700", "#ff69b4"];

const ConfettiParticle = ({
    isLeft,
    index,
}: {
    isLeft: boolean;
    index: number;
}) => {
    const config = useMemo(() => {
        return {
            randomX: (Math.random() - 0.5) * 800,
            randomY: -600 - Math.random() * 800,
            randomRotation: Math.random() * 1080,
            randomScale: 0.5 + Math.random() * 1.5,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            duration: 4 + Math.random() * 2,
            delay: Math.random() * 0.5,
            isCircle: Math.random() > 0.5,
        };
    }, []);

    return (
        <motion.div
            initial={{
                x: isLeft ? -40 : 40,
                y: 0,
                scale: 0,
                rotate: 0,
                opacity: 1,
            }}
            animate={{
                x: (isLeft ? 350 : -350) + config.randomX,
                y: config.randomY,
                scale: config.randomScale,
                rotate: config.randomRotation,
                opacity: 1,
            }}
            exit={{ opacity: 0, y: config.randomY + 200 }}
            transition={{
                duration: config.duration,
                delay: config.delay,
                ease: [0.1, 0.4, 0.2, 1],
            }}
            className="absolute bottom-0 pointer-events-none"
            style={{
                width: "12px",
                height: "12px",
                backgroundColor: config.color,
                borderRadius: config.isCircle ? "50%" : "2px",
                left: isLeft ? "0%" : "auto",
                right: !isLeft ? "0%" : "auto",
            }}
        />
    );
};

export default function EndingSection() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.5 });
    const [showConfetti, setShowConfetti] = useState(false);
    const [burstKey, setBurstKey] = useState(0);

    useEffect(() => {
        if (isInView && !showConfetti) {
            setShowConfetti(true);
        }
    }, [isInView, showConfetti]);

    useEffect(() => {
        if (showConfetti) {
            const interval = setInterval(() => {
                setBurstKey((prev) => prev + 1);
            }, 2000);
            return () => clearInterval(interval);
        }
    }, [showConfetti]);

    return (
        <section
            id="ending"
            ref={containerRef}
            className="relative py-24 text-center overflow-hidden"
        >
            {showConfetti && (
                <AnimatePresence>
                    <div
                        key={burstKey}
                        className="absolute inset-0 pointer-events-none"
                    >
                        <div className="absolute left-0 bottom-0 w-20 h-20">
                            {[...Array(50)].map((_, i) => (
                                <ConfettiParticle
                                    key={`left-${burstKey}-${i}`}
                                    isLeft={true}
                                    index={i}
                                />
                            ))}
                        </div>
                        <div className="absolute right-0 bottom-0 w-20 h-20">
                            {[...Array(50)].map((_, i) => (
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

            <ScrollReveal direction="up" delay={0.1} blur={true}>
                <div className="flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="mb-8"
                    >
                        <div className="h-px w-24 bg-linear-to-r from-transparent via-accent to-transparent" />
                    </motion.div>

                    <div className="text-sm leading-loose text-ink/90 whitespace-pre-line">
                        <p>바쁘신 가운데 귀한 걸음 해주셔서 감사합니다.</p>
                        <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.7 }}
                            className="relative inline-block mt-1"
                        >
                            <span className="relative z-10 font-extrabold">
                                서로를 아끼고 존중하며 늘 건강하고 행복한 부부가
                                되겠습니다.
                            </span>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                transition={{
                                    delay: 1.3,
                                    duration: 0.8,
                                    ease: "easeInOut",
                                }}
                                className="absolute bottom-1 left-0 h-2 w-full bg-highlight/40 z-0"
                            />
                        </motion.div>
                    </div>

                    <div className="mt-10 mb-2">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.5, duration: 0.8 }}
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
