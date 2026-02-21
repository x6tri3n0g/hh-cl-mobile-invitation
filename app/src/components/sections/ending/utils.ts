import { CONFETTI_COLORS } from "./constants";
import type { ConfettiConfig } from "./types";

export function createConfettiConfig(): ConfettiConfig {
    return {
        randomX: (Math.random() - 0.5) * 600,
        randomY: -400 - Math.random() * 600,
        randomRotation: Math.random() * 720,
        randomScale: 0.2 + Math.random() * 0.8,
        color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
        duration: 6 + Math.random() * 4,
        delay: Math.random() * 2,
        isCircle: Math.random() > 0.3,
    };
}
