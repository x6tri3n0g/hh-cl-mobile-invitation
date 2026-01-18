"use client";

import { useState } from "react";

const tabs = [
    {
        id: "meal",
        label: "식권",
        content: "식사권은 축의금 데스크에서 필요한 수량만큼 받아주세요.",
    },
    {
        id: "parking",
        label: "주차",
        content:
            "주차장은 2시간 무료이며 추가 시간은 1시간당 3,000원입니다.",
    },
    {
        id: "etc",
        label: "기타",
        content: "예식장 도착 시 안내 스태프의 안내를 따라주세요.",
    },
];

export default function InformationSection() {
    const [active, setActive] = useState(tabs[0].id);
    const current = tabs.find((tab) => tab.id === active) ?? tabs[0];

    return (
        <section id="information" className="reveal text-center">
            <p className="invitation-body text-xs tracking-[0.2em] text-[#9A5D7A]">
                INFORMATION
            </p>
            <h2 className="invitation-serif mt-2 text-2xl text-[#4A2B3A]">
                안내사항
            </h2>
            <div className="mt-6 rounded-2xl border border-[#F2D3DF] bg-[#FFF4F8]/85 p-2">
                <div className="grid grid-cols-3 gap-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            type="button"
                            onClick={() => setActive(tab.id)}
                            className={`rounded-xl py-2 text-xs ${
                                active === tab.id
                                    ? "bg-white text-[#4A2B3A] shadow"
                                    : "text-[#9A5D7A]"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <div className="mt-3 rounded-xl bg-white px-4 py-4 text-sm text-[#7A5665]">
                    {current.content}
                </div>
            </div>
        </section>
    );
}
