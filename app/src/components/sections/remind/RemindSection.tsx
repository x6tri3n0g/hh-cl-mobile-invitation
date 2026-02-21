"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { generateICS, downloadICS } from "../../../utils/ics";
import { REMIND_MESSAGE_URL, WEDDING_EVENT } from "./constants";

export default function RemindSection() {
    const [isOpen, setIsOpen] = useState(false);

    const handleGoogleCalendar = () => {
        window.open(REMIND_MESSAGE_URL, "_blank");
        setIsOpen(false);
    };

    const handleSystemCalendar = () => {
        const icsContent = generateICS(WEDDING_EVENT);
        downloadICS("wedding-invitation.ics", icsContent);
        setIsOpen(false);
    };

    return (
        <section id="remind" className=" text-center">
            <p className="text-xs tracking-[0.2em] text-ink/55">REMIND</p>
            <h2 className="mt-2 text-2xl text-ink">리마인드 알림</h2>
            <p className="mt-6 text-sm leading-relaxed text-ink/70 whitespace-pre-line">
                소중한 날을 잊지 않도록,
                {"\n"}
                <strong>결혼식 일주일, 하루 전</strong>
                {"\n"}리마인드 메세지를 보내드립니다.
            </p>
            <div className="mt-8 flex justify-center">
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-ink px-8 py-4 text-base font-medium text-white shadow-xl shadow-ink/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-ink/20 active:translate-y-0 active:scale-95"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            animate={{
                                rotate: [0, 4, -4, 3, -3, 2, -2, 0],
                            }}
                            whileHover={{ scale: 1.03, rotate: 6 }}
                            transition={{
                                rotate: {
                                    duration: 1.2,
                                    repeat: Infinity,
                                    repeatDelay: 1.8,
                                    ease: "easeInOut",
                                },
                                scale: { duration: 0.2 },
                            }}
                            className="origin-top"
                        >
                            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                        </motion.svg>
                        캘린더에 일정 추가하기
                    </span>
                    <div className="absolute inset-0 z-0 bg-linear-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-500 group-hover:animate-shine" />
                </button>
            </div>

            {isOpen &&
                createPortal(
                    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 transition-all animate-fade-in sm:items-center">
                        <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl animate-scale-in">
                            <h3 className="text-lg font-bold text-ink">
                                일정 추가
                            </h3>
                            <p className="mt-2 text-sm text-ink/60">
                                원하시는 캘린더를 선택해주세요.
                            </p>
                            <div className="mt-6 flex flex-col gap-3">
                                <button
                                    type="button"
                                    onClick={handleGoogleCalendar}
                                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-ink py-3 text-white transition-colors hover:bg-ink/90"
                                >
                                    구글 캘린더 (Google)
                                </button>
                                <button
                                    type="button"
                                    onClick={handleSystemCalendar}
                                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent/20 py-3 text-ink transition-colors hover:bg-accent/30"
                                >
                                    캘린더 앱 (iPhone/Android)
                                </button>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="mt-4 w-full py-2 text-sm text-ink/40 underline-offset-4 hover:underline"
                            >
                                닫기
                            </button>
                        </div>
                    </div>,
                    document.body
                )}
        </section>
    );
}
