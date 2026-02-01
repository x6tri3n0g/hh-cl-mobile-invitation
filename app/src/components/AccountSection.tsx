"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { FiCopy } from "react-icons/fi";

const accounts = {
    groom: [
        { name: "[신랑] 황현", bank: "하나은행", number: "12341233123123123" },
        { name: "[아버지] 황선주", bank: "국민은행", number: "1234-1234-1234" },
    ],
    bride: [
        { name: "[신부] 김채린", bank: "신한은행", number: "1234-5678-9012" },
        { name: "[아버지] 김기용", bank: "우리은행", number: "9876-5432-1098" },
        { name: "[어머니] 인희숙", bank: "우리은행", number: "9876-5432-1098" },
    ],
};

export default function AccountSection() {
    const [tab, setTab] = useState<"groom" | "bride">("groom");
    const { toast } = useToast();
    const items = accounts[tab];

    const copy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            toast.success("계좌번호가 복사되었습니다.");
        } catch {
            toast.error("계좌번호 복사가 불가능합니다.");
        }
    };

    return (
        <section id="account" className="text-center">
            <p className="text-xs tracking-[0.2em] text-ink/55">
                ACCOUNT INFORMATION
            </p>
            <h2 className="mt-2 text-2xl text-ink">축하의 마음을 전하기</h2>

            <div className="mt-6 rounded-2xl bg-accent/90 p-2">
                <div className="grid grid-cols-2 gap-2">
                    {(["groom", "bride"] as const).map((key) => (
                        <button
                            key={key}
                            type="button"
                            onClick={() => setTab(key)}
                            className={`rounded-xl py-2 text-base ${
                                tab === key
                                    ? "bg-background text-ink"
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
                    <button
                        key={item.name}
                        type="button"
                        onClick={() => copy(item.number)}
                        className="flex flex-1 flex-col items-start justify-between w-full rounded-2xl border border-accent/90 bg-background px-4 py-3"
                    >
                        <p className="text-base font-semibold text-ink">
                            {item.name}
                        </p>
                        <p className="mt-1 text-sm text-ink/70">
                            {item.number} · {item.bank}
                        </p>

                        <div className="flex justify-end w-full">
                            <span className="flex items-center gap-1 text-xs text-blue-500">
                                <FiCopy />
                                계좌번호 복사
                            </span>
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
}
