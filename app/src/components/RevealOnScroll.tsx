"use client";

import { useEffect } from "react";

export default function RevealOnScroll() {
    useEffect(() => {
        const elements = Array.from(
            document.querySelectorAll<HTMLElement>(".reveal")
        );
        if (!elements.length) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries, io) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("-visible");
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return null;
}
