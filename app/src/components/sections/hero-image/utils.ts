import type { StarConfig, StarProps } from "./types";

export function generateStars(config: StarConfig): StarProps[] {
    return Array.from({ length: config.count }, (_, id) => ({
        id,
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        size: config.minSize + Math.random() * config.sizeRange,
        delay: Math.random() * config.delayRange,
        duration: config.minDuration + Math.random() * config.durationRange,
    }));
}
