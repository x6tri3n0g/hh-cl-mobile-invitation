"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const INFORMATION_TABS = [
    {
        id: "parking",
        label: "주차",
        content: `- 위치: 서울 강동구 천호대로 1077, 이스트센트럴타워 지하주차장
- 주차 요금: 하객 2시간 무료 (35층 주차권 키오스크 등에서 주차권 등록)
- 주차 공간: 최대 350대 수용 가능
- 이용 팁: 지하주차장에서 1층으로 올라온 후, 엘리베이터를 갈아타서 35층으로 이동`,
    },
    {
        id: "venue_direction",
        label: "예식장 오시는 길",
        content:
            "건물 내 1층 로비 중앙 엘리베이터를 통해 한번에 올라오실 수 있습니다.",
    },
];

export default function InformationSection() {
    const [active, setActive] = useState(INFORMATION_TABS[0].id);
    const current =
        INFORMATION_TABS.find((tab) => tab.id === active) ??
        INFORMATION_TABS[0];

    return (
        <section id="information" className="py-12">
            <div className="text-center">
                <p className="text-xs tracking-[0.2em] text-ink/55 uppercase">
                    Information
                </p>
                <h2 className="mt-2 text-2xl text-ink">안내사항</h2>
            </div>

            {/* Premium Sliding Tab Switcher */}
            <div className="mt-8 mx-auto max-w-sm rounded-[1.25rem] bg-highlight/30 p-1.5 overflow-hidden">
                <div className="relative flex">
                    {INFORMATION_TABS.map((tab) => {
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
                        <p className="text-sm leading-relaxed text-ink/70 whitespace-pre-line">
                            {current.content}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
