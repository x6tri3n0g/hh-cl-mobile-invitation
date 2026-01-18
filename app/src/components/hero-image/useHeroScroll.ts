"use client";

import { useEffect, useState } from "react";

const clamp = (value: number, min: number, max: number) =>
    Math.min(max, Math.max(min, value));

export default function useHeroScroll() {
    const [fadeOutProgress, setFadeOutProgress] = useState(0);
    const [heroPaddingVh, setHeroPaddingVh] = useState(100);

    useEffect(() => {
        const handleScroll = () => {
            const progress = clamp(window.scrollY / 220, 0, 1);
            const paddingVh = 100 - progress * 80;
            setFadeOutProgress(progress);
            setHeroPaddingVh(paddingVh);
            document.documentElement.style.setProperty(
                "--hero-padding",
                `${paddingVh}svh`
            );
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.documentElement.style.setProperty(
                "--hero-padding",
                "100svh"
            );
        };
    }, []);

    return { fadeOutProgress, heroPaddingVh };
}
