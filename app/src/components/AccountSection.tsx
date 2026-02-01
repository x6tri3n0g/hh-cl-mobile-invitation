"use client";

import { useState } from "react";

const accounts = {
    groom: [
        { name: "[신랑] 황현", bank: "국민은행", number: "1234-1234-1234" },
        { name: "[아버지] 정경철", bank: "하나은행", number: "1234-1234-1234" },
    ],
    bride: [
        { name: "[신부] 김채린", bank: "신한은행", number: "1234-5678-9012" },
        { name: "[어머니] 김은경", bank: "우리은행", number: "9876-5432-1098" },
    ],
};

export default function AccountSection() {
    const [tab, setTab] = useState<"groom" | "bride">("groom");
    const items = accounts[tab];

    const copy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
        } catch {
            // ignore
        }
    };

    return (
        <section id="account" className=" text-center">
            <p className="text-xs tracking-[0.2em] text-ink/55">
                ACCOUNT INFORMATION
            </p>
            <h2 className="mt-2 text-2xl text-ink">축하의 마음을 전하기</h2>
            <p className="mt-4 text-sm text-ink/70">
                비대면으로 축하를 전하고자 하시는 분들을 위해 안내드립니다.
            </p>

            <div className="mt-6 rounded-2xl border border-line bg-accent/10 p-2">
                <div className="grid grid-cols-2 gap-2">
                    {(["groom", "bride"] as const).map((key) => (
                        <button
                            key={key}
                            type="button"
                            onClick={() => setTab(key)}
                            className={`rounded-xl py-2 text-sm ${
                                tab === key
                                    ? "bg-background text-ink shadow"
                                    : "text-ink/55"
                            }`}
                        >
                            {key === "groom" ? "신랑측" : "신부측"}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mt-4 space-y-3 text-left">
                {items.map((item) => (
                    <div
                        key={item.name}
                        className="rounded-2xl border border-line bg-background px-4 py-3 shadow-sm"
                    >
                        <p className="text-sm font-semibold text-ink">
                            {item.name}
                        </p>
                        <p className="mt-1 text-xs text-ink/70">
                            {item.number} · {item.bank}
                        </p>
                        <button
                            type="button"
                            onClick={() => copy(item.number)}
                            className="mt-2 text-xs text-accent"
                        >
                            계좌번호 복사
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
