"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { createConfettiConfig } from "./utils";
import type { ConfettiConfig, ConfettiParticleProps } from "./types";

export default function ConfettiParticle({
    isLeft,
}: ConfettiParticleProps) {
    const configRef = useRef<ConfettiConfig | null>(null);

    if (!configRef.current) {
        configRef.current = createConfettiConfig();
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
}
