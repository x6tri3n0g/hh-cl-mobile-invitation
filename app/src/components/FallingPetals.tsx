"use client";

import styles from "./FallingPetals.module.css";

const petals = Array.from({ length: 18 }, (_, index) => index);

const petalStyles = petals.map((index) => {
    const size = 10 + (index % 7) * 3;
    const left = `${(index * 7) % 100}%`;
    const duration = 18000 + index * 1200;
    const delay = (index * 900) % 8000;
    const blur = index % 3 === 0 ? 2 : 0;
    return {
        left,
        width: `${size}px`,
        height: `${size * 1.2}px`,
        filter: blur ? `blur(${blur}px)` : undefined,
        animationDuration: `${duration}ms, ${duration / 2}ms`,
        animationDelay: `${delay}ms, ${delay}ms`,
    } as const;
});

export default function FallingPetals() {
    return (
        <div className={styles.petals} aria-hidden="true">
            {petals.map((petal) => (
                <span
                    key={`petal-${petal}`}
                    className={styles.petal}
                    style={petalStyles[petal]}
                />
            ))}
        </div>
    );
}
