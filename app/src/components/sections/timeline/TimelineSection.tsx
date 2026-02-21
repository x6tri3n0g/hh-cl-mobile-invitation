"use client";

import { TIMELINE_ITEMS } from "./constants";

export default function TimelineSection() {
    return (
        <section className="animate-fade-up delay-300">
            <div className="flex items-center justify-between">
                <h2 className="text-lg text-ink">예식 안내</h2>
                <span className="text-xs text-ink/55">Timeline</span>
            </div>
            <div className="mt-5 grid gap-4">
                {TIMELINE_ITEMS.map((item) => (
                    <div
                        key={item.time}
                        className="flex items-center justify-between rounded-2xl border border-line bg-accent/10 px-5 py-4"
                    >
                        <span className="text-base text-ink">{item.time}</span>
                        <span className="text-sm text-ink/70">
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
