"use client";

import { useState } from "react";

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
        <section id="information" className=" text-center">
            <p className="text-xs tracking-[0.2em] text-ink/55">INFORMATION</p>
            <h2 className="mt-2 text-2xl text-ink">안내사항</h2>
            <div className="mt-6 rounded-2xl bg-accent/90 p-2">
                <div className="flex justify-center items-center gap-2 text-base">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            type="button"
                            onClick={() => setActive(tab.id)}
                            className={`flex-1 rounded-xl py-2 text-base ${
                                active === tab.id
                                    ? "bg-background text-ink"
                                    : "text-ink/55"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <div className="mt-2 rounded-xl bg-background px-4 py-4 text-sm text-ink/70">
                    {current.content}
                </div>
            </div>
        </section>
    );
}
