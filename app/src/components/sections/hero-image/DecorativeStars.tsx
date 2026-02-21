"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { STAR_CONFIG } from "./constants";
import { generateStars } from "./utils";
import type { StarProps } from "./types";

export default function DecorativeStars() {
    const [stars, setStars] = useState<StarProps[]>([]);

    useEffect(() => {
        setStars(generateStars(STAR_CONFIG));
    }, []);

    if (stars.length === 0) return null;

    return (
        <div
            className="absolute inset-x-0 top-0 z-40 pointer-events-none overflow-hidden"
            style={{ height: STAR_CONFIG.containerHeight }}
        >
            {stars.map((star) => (
                <motion.div
                    key={`star-${star.id}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0, 0.4, 0.7, 0.4, 0],
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
                    <div className="absolute inset-0 rounded-full bg-accent/80" />
                </motion.div>
            ))}
        </div>
    );
}
