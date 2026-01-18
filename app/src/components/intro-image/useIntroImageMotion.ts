"use client";

import { useEffect, useState } from "react";

const clamp = (value: number, min: number, max: number) =>
    Math.min(max, Math.max(min, value));

export default function useIntroImageMotion() {
    const [scrollY, setScrollY] = useState(0);
    const [viewport, setViewport] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY || 0);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setViewport({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const imageReveal = clamp((scrollY - 60) / 240, 0, 1);
    const shrinkStart = 6000;
    const shrinkProgress = clamp((scrollY - shrinkStart) / 8000, 0, 1);
    const targetWidth = viewport.width
        ? viewport.width <= 720
            ? viewport.width
            : Math.min(720, Math.max(viewport.width - 40, 0))
        : 0;
    const targetScale = viewport.width ? targetWidth / viewport.width : 1;
    const imageScale = 1 - shrinkProgress * (1 - targetScale);
    const targetHeight = targetWidth ? Math.min(targetWidth, 520) : 0;
    const imageHeight = viewport.height
        ? (viewport.height -
              shrinkProgress * (viewport.height - targetHeight)) *
          0.65
        : undefined;

    return {
        imageHeight,
        imageReveal,
        imageScale,
        shrinkProgress,
        viewportWidth: viewport.width,
    };
}
