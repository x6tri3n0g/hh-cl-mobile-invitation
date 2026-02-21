"use client";

import { LOCATION_INFO } from "./constants";

export default function LocationSection() {
    return (
        <section className="animate-fade-up delay-300 rounded-[28px] border border-line bg-accent/10 px-6 py-7">
            <h2 className="text-lg text-ink">{LOCATION_INFO.title}</h2>
            <div className="mt-4 space-y-3">
                <div className="relative h-48 overflow-hidden rounded-2xl border border-line bg-accent/15">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_65%)]" />
                    <div className="absolute bottom-4 left-4 text-xs text-ink/55">
                        {LOCATION_INFO.mapPlaceholder}
                    </div>
                </div>
                <div className="text-sm text-ink/70">
                    {LOCATION_INFO.addressLines[0]}
                    <br />
                    {LOCATION_INFO.addressLines[1]}
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-ink/55">
                    {LOCATION_INFO.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-accent/20 px-3 py-1"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
