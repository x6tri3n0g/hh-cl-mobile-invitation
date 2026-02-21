"use client";

import { useEffect, useState } from "react";
import WeddingCalendar from "./WeddingCalendar";

const weddingDate = new Date("2026-05-30T18:30:00+09:00");

function useWeddingCountdown(targetDate: Date) {
    const [timeLeft, setTimeLeft] = useState<{
        days: number;
        hours: number;
        mins: number;
        secs: number;
    } | null>(null);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const diff = Math.max(targetDate.getTime() - now.getTime(), 0);

            return {
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                mins: Math.floor((diff / (1000 * 60)) % 60),
                secs: Math.floor((diff / 1000) % 60),
            };
        };

        // Initial calculation
        setTimeLeft(calculateTimeLeft());

        const id = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(id);
    }, [targetDate]);

    return timeLeft;
}

export default function WeddingInfoSection() {
    const timeLeft = useWeddingCountdown(weddingDate);

    // If timeLeft is null (during server rendering or first client render before effect),
    // we can render placeholders or nothing.
    // To match content, we can default to 0s or empty, but 0 is safer for layout.
    const { days, hours, mins, secs } = timeLeft || {
        days: 0,
        hours: 0,
        mins: 0,
        secs: 0,
    };

    return (
        <section id="wedding_info" className=" text-center">
            <p className="text-xs tracking-[0.2em] text-ink/55">
                WEDDING INFORMATION
            </p>
            <h2 className="mt-2 text-2xl text-ink">예식 안내</h2>
            <div className="mt-6 text-sm text-ink/70">
                <p className="text-base text-ink">강동 루벨</p>
                <p className="mt-1">2026년 5월 30일 토요일</p>
                <p className="mt-1">오후 6시 30분</p>
            </div>

            <WeddingCalendar date={weddingDate} />

            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-ink/70">
                <div className="text-center">
                    <div className="text-xs tracking-[0.2em]">일</div>
                    <div className="text-lg text-ink">{days}</div>
                </div>
                <div className="text-center">
                    <div className="text-xs tracking-[0.2em]">시간</div>
                    <div className="text-lg text-ink">{hours}</div>
                </div>
                <div className="text-center">
                    <div className="text-xs tracking-[0.2em]">분</div>
                    <div className="text-lg text-ink">{mins}</div>
                </div>
                <div className="text-center">
                    <div className="text-xs tracking-[0.2em]">초</div>
                    <div className="text-lg text-ink">{secs}</div>
                </div>
            </div>
        </section>
    );
}
