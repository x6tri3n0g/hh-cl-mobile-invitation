"use client";

import WeddingCalendar from "./WeddingCalendar";
import { WEDDING_DATE, WEDDING_INFO_TEXT } from "./constants";
import { useWeddingCountdown } from "./utils";

export default function WeddingInfoSection() {
    const timeLeft = useWeddingCountdown(WEDDING_DATE);

    // If timeLeft is null (during server rendering or first client render before effect),
    // we can render placeholders or nothing.
    // To match content, we can default to 0s or empty, but 0 is safer for layout.
    const { days, hours, mins, secs } = timeLeft || {
        days: 0,
        hours: 0,
        mins: 0,
        secs: 0,
    };
    const safeDays = Math.max(0, days);
    const safeHours = Math.max(0, hours);
    const safeMins = Math.max(0, mins);
    const safeSecs = Math.max(0, secs);
    const pad2 = (value: number) => value.toString().padStart(2, "0");

    return (
        <section id="wedding_info" className=" text-center">
            <p className="text-xs tracking-[0.2em] text-ink/55">
                WEDDING INFORMATION
            </p>
            <h2 className="mt-2 text-2xl text-ink">예식 안내</h2>
            <div className="mt-6 text-sm text-ink/90">
                <p className="text-base text-ink">{WEDDING_INFO_TEXT.venue}</p>
                <p className="mt-1">{WEDDING_INFO_TEXT.dateLabel}</p>
                <p className="mt-1">{WEDDING_INFO_TEXT.timeLabel}</p>
            </div>

            <WeddingCalendar date={WEDDING_DATE} />

            <div className="mt-6 flex w-full flex-col items-center">
                <div className="mb-5 flex items-center gap-2">
                    <div className="flex h-16 w-14 flex-col items-center justify-center rounded bg-white shadow-md">
                        <p className="text-xs text-ink/55">DAYS</p>
                        <p className="text-lg text-ink">{pad2(safeDays)}</p>
                    </div>
                    <div className="flex h-16 w-14 flex-col items-center justify-center rounded bg-white shadow-md">
                        <p className="text-xs text-ink/55">HOUR</p>
                        <p className="text-lg text-ink">{pad2(safeHours)}</p>
                    </div>
                    <div className="flex h-16 w-14 flex-col items-center justify-center rounded bg-white shadow-md">
                        <p className="text-xs text-ink/55">MIN</p>
                        <p className="text-lg text-ink">{pad2(safeMins)}</p>
                    </div>
                    <div className="flex h-16 w-14 flex-col items-center justify-center rounded bg-white shadow-md">
                        <p className="text-xs text-ink/55">SEC</p>
                        <p className="text-lg text-ink">{pad2(safeSecs)}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
