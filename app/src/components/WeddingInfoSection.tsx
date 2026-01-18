"use client";

import { useEffect, useMemo, useState } from "react";

const weddingDate = new Date("2025-05-30T18:30:00+09:00");

const weekdays = ["일", "월", "화", "수", "목", "금", "토"];

const getDaysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate();

export default function WeddingInfoSection() {
    const [now, setNow] = useState<Date>(new Date());

    useEffect(() => {
        const id = window.setInterval(() => {
            setNow(new Date());
        }, 1000);
        return () => window.clearInterval(id);
    }, []);

    const { days, startDay } = useMemo(() => {
        const year = weddingDate.getFullYear();
        const month = weddingDate.getMonth();
        return {
            days: getDaysInMonth(year, month),
            startDay: new Date(year, month, 1).getDay(),
        };
    }, []);

    const diff = Math.max(weddingDate.getTime() - now.getTime(), 0);
    const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minsLeft = Math.floor((diff / (1000 * 60)) % 60);
    const secsLeft = Math.floor((diff / 1000) % 60);

    return (
        <section id="wedding_info" className="reveal text-center">
            <p className="invitation-body text-xs tracking-[0.2em] text-[#9A5D7A]">
                WEDDING INFORMATION
            </p>
            <h2 className="invitation-serif mt-2 text-2xl text-[#4A2B3A]">
                예식 안내
            </h2>
            <div className="mt-6 text-sm text-[#7A5665]">
                <p className="invitation-serif text-base text-[#4A2B3A]">
                    강동 루벨
                </p>
                <p className="invitation-body mt-1">2025년 5월 30일 금요일</p>
                <p className="invitation-body mt-1">오후 6시 30분</p>
            </div>

            <div className="mt-8 rounded-2xl border border-[#F2D3DF] bg-[#FFF4F8]/85 px-4 py-5">
                <div className="grid grid-cols-7 gap-2 text-xs text-[#9A5D7A]">
                    {weekdays.map((day) => (
                        <span key={day} className="text-center">
                            {day}
                        </span>
                    ))}
                </div>
                <div className="mt-3 grid grid-cols-7 gap-2 text-sm text-[#7A5665]">
                    {Array.from({ length: startDay }).map((_, index) => (
                        <span key={`empty-${index}`} />
                    ))}
                    {Array.from({ length: days }).map((_, index) => {
                        const day = index + 1;
                        const isWeddingDay = day === weddingDate.getDate();
                        return (
                            <span
                                key={`day-${day}`}
                                className={`flex h-8 w-8 items-center justify-center rounded-full text-center ${
                                    isWeddingDay
                                        ? "bg-[#E07AA9] text-white"
                                        : ""
                                }`}
                            >
                                {day}
                            </span>
                        );
                    })}
                </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-[#7A5665]">
                <div className="text-center">
                    <div className="text-xs uppercase tracking-[0.2em]">
                        일
                    </div>
                    <div className="invitation-serif text-lg text-[#4A2B3A]">
                        {daysLeft}
                    </div>
                </div>
                <div className="text-center">
                    <div className="text-xs uppercase tracking-[0.2em]">
                        시간
                    </div>
                    <div className="invitation-serif text-lg text-[#4A2B3A]">
                        {hoursLeft}
                    </div>
                </div>
                <div className="text-center">
                    <div className="text-xs uppercase tracking-[0.2em]">
                        분
                    </div>
                    <div className="invitation-serif text-lg text-[#4A2B3A]">
                        {minsLeft}
                    </div>
                </div>
                <div className="text-center">
                    <div className="text-xs uppercase tracking-[0.2em]">
                        초
                    </div>
                    <div className="invitation-serif text-lg text-[#4A2B3A]">
                        {secsLeft}
                    </div>
                </div>
            </div>
            <p className="invitation-body mt-2 text-xs text-[#9A5D7A]">
                {daysLeft}일 남았습니다
            </p>
        </section>
    );
}
