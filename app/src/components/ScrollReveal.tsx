"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    className?: string;
    once?: boolean;
    blur?: boolean;
}

export default function ScrollReveal({
    children,
    width = "100%",
    delay = 0,
    direction = "up",
    className = "",
    once = true,
    blur = false,
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once });

    const getDirectionOffset = () => {
        switch (direction) {
            case "up":
                return { y: 75, x: 0 };
            case "down":
                return { y: -75, x: 0 };
            case "left":
                return { x: 75, y: 0 };
            case "right":
                return { x: -75, y: 0 };
            default:
                return { y: 75, x: 0 };
        }
    };

    const { x, y } = getDirectionOffset();

    const variants: Variants = {
        hidden: {
            opacity: 0,
            y,
            x,
            filter: blur ? "blur(4px)" : "blur(0px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                delay: delay,
                // Use a standard easing string or a specific cubic-bezier tuple with 'as const'
                // to avoid "number[] is not assignable to Easing" error
                ease: [0.25, 0.46, 0.45, 0.94] as const,
            },
        },
    };

    return (
        <div ref={ref} style={{ position: "relative", width }}>
            <motion.div
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={className}
            >
                {children}
            </motion.div>
        </div>
    );
}
