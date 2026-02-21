"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { FiCopy } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const accounts = {
    groom: [
        { name: "[신랑] 황현", bank: "카카오뱅크", number: "3333034910329" },
        { name: "[아버지] 황선주", bank: "농협", number: "356-0024-1595-43" },
    ],
    bride: [
        { name: "[신부] 김채린", bank: "카카오뱅크", number: "3333260822625" },
        {
            name: "[아버지] 김기용",
            bank: "하나은행",
            number: "164-910007-44507",
        },
        { name: "[어머니] 인희숙", bank: "신한은행", number: "232-02-121098" },
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
        <section id="account" className="py-12">
            <div className="text-center">
                <p className="text-xs tracking-[0.2em] text-ink/55 uppercase">
                    Account Information
                </p>
                <h2 className="mt-2 text-2xl text-ink">축하의 마음을 전하기</h2>
            </div>

            <div className="mt-8 mx-auto max-w-sm rounded-[1.25rem] bg-highlight/30 p-1.5 overflow-hidden">
                <div className="relative flex">
                    {(["groom", "bride"] as const).map((key) => {
                        const isActive = tab === key;
                        return (
                            <button
                                key={key}
                                type="button"
                                onClick={() => setTab(key)}
                                className={`relative z-10 flex-1 rounded-[1rem] py-2.5 text-sm font-medium transition-colors duration-200 ${
                                    isActive
                                        ? "text-ink"
                                        : "text-ink/40 hover:text-ink/60"
                                }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="active-tab"
                                        className="absolute inset-0 z-0 rounded-[0.9rem] bg-white shadow-sm"
                                        transition={{
                                            type: "spring",
                                            stiffness: 500,
                                            damping: 35,
                                        }}
                                    />
                                )}
                                <span className="relative z-10">
                                    {key === "groom" ? "신랑측" : "신부측"}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Animated Account List */}
            <div className="mt-6 mx-auto max-w-md overflow-hidden p-1">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={tab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="space-y-4"
                    >
                        {items.map((item) => (
                            <button
                                key={item.name}
                                type="button"
                                onClick={() => copy(item.number)}
                                className="group relative flex w-full flex-col items-start overflow-hidden rounded-[1.25rem] border border-accent/50 bg-white px-5 py-4 shadow-sm transition-all hover:border-accent hover:shadow-md active:scale-[0.98]"
                            >
                                <div className="flex w-full items-center justify-between">
                                    <p className="text-base font-semibold text-ink">
                                        {item.name}
                                    </p>
                                    <div className="rounded-full bg-accent/30 p-2 text-highlight">
                                        <FiCopy className="text-sm" />
                                    </div>
                                </div>
                                <p className="mt-0.5 text-[0.9rem] text-ink/60">
                                    {item.bank} · {item.number}
                                </p>
                            </button>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
