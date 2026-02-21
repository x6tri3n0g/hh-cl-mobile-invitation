"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import React from "react";
import { WEEKDAYS } from "./constants";

const getDaysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate();

interface WeddingCalendarProps {
    date: Date;
}

function WeddingCalendar({ date }: WeddingCalendarProps) {
    const { days, startDay } = useMemo(() => {
        const year = date.getFullYear();
        const month = date.getMonth();
        return {
            days: getDaysInMonth(year, month),
            startDay: new Date(year, month, 1).getDay(),
        };
    }, [date]);

    return (
        <div className="mt-8 rounded-3xl border border-line bg-accent/5 px-4 py-8 shadow-sm">
            <div className="mb-6 flex flex-col items-center gap-1">
                <span className="text-[10px] tracking-[0.3em] font-medium text-ink/40 uppercase">
                    {date.getFullYear()}
                </span>
                <p className="text-2xl font-light tracking-widest text-ink">
                    {(date.getMonth() + 1).toString().padStart(2, "0")}
                </p>
            </div>
            <div className="grid grid-cols-7 gap-2 text-[11px] font-medium text-ink/40">
                {WEEKDAYS.map((day) => (
                    <span key={day} className="text-center">
                        {day}
                    </span>
                ))}
            </div>
            <div className="mt-3 grid grid-cols-7 text-sm text-ink/70">
                {Array.from({ length: startDay }).map((_, index) => (
                    <span key={`empty-${index}`} />
                ))}
                {Array.from({ length: days }).map((_, index) => {
                    const day = index + 1;
                    const isWeddingDay = day === date.getDate();
                    const isPassed = day < date.getDate();

                    return (
                        <span
                            key={`day-${day}`}
                            className="relative flex h-8 w-full items-center justify-center rounded-none text-center"
                        >
                            {isPassed && (
                                <svg
                                    className="absolute inset-0 h-full w-full pointer-events-none overflow-visible"
                                    viewBox="0 0 32 32"
                                    preserveAspectRatio="none"
                                >
                                    <motion.path
                                        d="M0 16H32"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="20"
                                        strokeLinecap="butt"
                                        className="text-accent"
                                        initial={{
                                            pathLength: 0,
                                            opacity: 0.5,
                                        }}
                                        whileInView={{
                                            pathLength: 1,
                                            opacity: 0,
                                        }}
                                        viewport={{ once: true }}
                                        transition={{
                                            pathLength: {
                                                delay: index * 0.02 + 0.3,
                                                duration: 0.1,
                                                ease: "easeOut",
                                            },
                                            opacity: {
                                                delay: 1.2, // Sync fade out time for all (faster)
                                                duration: 0.3,
                                                ease: "easeOut",
                                            },
                                        }}
                                    />
                                </svg>
                            )}
                            {isWeddingDay && (
                                <motion.span
                                    className="absolute top-2 inset-0 flex items-center justify-center"
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{
                                        scale: [0, 1.2, 1],
                                        opacity: 1,
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.4,
                                        delay:
                                            (date.getDate() - 1) * 0.02 + 0.4, // Start after all strikethroughs
                                        ease: "backOut",
                                    }}
                                >
                                    <span className="heart-shape" />
                                </motion.span>
                            )}
                            <span
                                className={`relative z-10 ${isPassed ? "text-ink/60" : "text-white"}`}
                            >
                                {day}
                            </span>
                        </span>
                    );
                })}
            </div>
        </div>
    );
}

// Memoize the component to prevent re-renders when parent re-renders
export default React.memo(WeddingCalendar);
