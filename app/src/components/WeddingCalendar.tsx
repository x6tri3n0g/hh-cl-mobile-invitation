"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import React from "react";

const weekdays = ["일", "월", "화", "수", "목", "금", "토"];

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
        <div className="mt-8 rounded-2xl border border-line bg-accent/10 px-4 py-5">
            <div className="grid grid-cols-7 gap-2 text-xs text-ink/55">
                {weekdays.map((day) => (
                    <span key={day} className="text-center">
                        {day}
                    </span>
                ))}
            </div>
            <div className="mt-3 grid grid-cols-7 gap-2 text-sm text-ink/70">
                {Array.from({ length: startDay }).map((_, index) => (
                    <span key={`empty-${index}`} />
                ))}
                {Array.from({ length: days }).map((_, index) => {
                    const day = index + 1;
                    const isWeddingDay = day === date.getDate();
                    return (
                        <span
                            key={`day-${day}`}
                            className="relative flex h-8 w-8 items-center justify-center rounded-full text-center"
                        >
                            {isWeddingDay && (
                                <motion.span
                                    className="absolute top-2 inset-0 flex items-center justify-center"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 0.8,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <span className="heart-shape" />
                                </motion.span>
                            )}
                            <span className="relative z-10">{day}</span>
                        </span>
                    );
                })}
            </div>
        </div>
    );
}

// Memoize the component to prevent re-renders when parent re-renders
export default React.memo(WeddingCalendar);
