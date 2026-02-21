"use client";

import { motion } from "framer-motion";
import { useSwitcher } from "./SwitcherContext";
import type { SwitcherItemProps } from "./types";

export default function SwitcherItem<T>({
    value,
    children,
}: SwitcherItemProps<T>) {
    const { active, setActive, layoutId } = useSwitcher<T>();
    const isActive = active === value;

    return (
        <button
            type="button"
            onClick={() => setActive(value)}
            className={`relative flex-1 rounded-full py-2.5 text-sm font-medium transition-colors duration-200 ${
                isActive ? "text-ink" : "text-ink/40 hover:text-ink/60"
            }`}
        >
            {isActive && (
                <motion.div
                    layoutId={layoutId}
                    className="absolute inset-0 bg-white shadow-sm rounded-full"
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                    }}
                />
            )}
            <span className="relative z-10">{children}</span>
        </button>
    );
}
