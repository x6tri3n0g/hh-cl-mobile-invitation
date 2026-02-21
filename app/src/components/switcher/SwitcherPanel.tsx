"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useSwitcher } from "./SwitcherContext";
import type { SwitcherPanelProps } from "./types";

export default function SwitcherPanel<T>({
    children,
    value,
}: SwitcherPanelProps<T>) {
    const { active } = useSwitcher<T>();
    const panelKey = String(value ?? active);

    return (
        <div className="mt-6 mx-auto max-w-md overflow-hidden p-1">
            <AnimatePresence mode="wait">
                <motion.div
                    key={panelKey}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="space-y-4"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
