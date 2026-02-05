"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
    {
        id: "parking",
        label: "주차",
        content: "주차장은 2시간 무료이며 추가 시간은 1시간당 3,000원입니다.",
    },
    {
        id: "venue_direction",
        label: "예식장 오시는 길",
        content:
            "건물 내 1층 로비 중앙 엘리베이터를 통해 한번에 올라오실 수 있습니다.",
    },
];

export default function InformationSection() {
    const [active, setActive] = useState(tabs[0].id);
    const current = tabs.find((tab) => tab.id === active) ?? tabs[0];

    return (
        <section id="information" className="py-12">
            <div className="text-center">
                <p className="text-xs tracking-[0.2em] text-ink/55 uppercase">
                    Information
                </p>
                <h2 className="mt-2 text-2xl text-ink">안내사항</h2>
            </div>

            {/* Premium Sliding Tab Switcher */}
            <div className="mt-8 mx-auto max-w-sm rounded-[1.25rem] bg-accent/60 p-1.5 overflow-hidden">
                <div className="relative flex">
                    {tabs.map((tab) => {
                        const isActive = active === tab.id;
                        return (
                            <button
                                key={tab.id}
                                type="button"
                                onClick={() => setActive(tab.id)}
                                className={`relative z-10 flex-1 rounded-[1rem] py-2.5 text-sm font-medium transition-colors duration-200 ${
                                    isActive
                                        ? "text-ink"
                                        : "text-ink/40 hover:text-ink/60"
                                }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="info-tab"
                                        className="absolute inset-0 z-0 rounded-[0.9rem] bg-white shadow-sm"
                                        transition={{
                                            type: "spring",
                                            stiffness: 500,
                                            damping: 35,
                                        }}
                                    />
                                )}
                                <span className="relative z-10">
                                    {tab.label}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Animated Content Box */}
            <div className="mt-6 mx-auto max-w-md">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="rounded-[1.25rem] border border-accent/50 bg-white px-6 py-6 shadow-sm"
                    >
                        <p className="text-sm leading-relaxed text-ink/70">
                            {current.content}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
