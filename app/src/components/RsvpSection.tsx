"use client";

import { motion } from "framer-motion";

export default function RsvpSection() {
    return (
        <section id="rsvp" className="py-20 text-center">
            <div className="mx-auto mb-8 h-1 w-12 rounded-full bg-accent/50" />
            <p className="text-[0.95rem] leading-[1.8] text-ink/70">
                함께해 주시는 마음,
                <br />
                오래 기억하겠습니다.
            </p>
            <div className="mt-10 flex justify-center">
                <motion.button
                    whileHover={{
                        scale: 1.03,
                        y: -3,
                    }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    type="button"
                    className="group relative overflow-hidden rounded-full bg-accent px-10 py-4 text-[1rem] font-semibold text-ink border border-accent/40 shadow-[0_12px_24px_-10px_rgba(0,0,0,0.15),0_4px_8px_-2px_rgba(0,0,0,0.1)] transition-all hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.2)]"
                    onClick={() => {
                        // RSVP form logic or modal could be added here
                    }}
                >
                    {/* Glossy Overlay for Depth */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent opacity-60" />

                    {/* Hover Shine Effect */}
                    <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-[100%] group-hover:animate-[shine_1.5s_infinite] pointer-events-none" />

                    <span className="relative z-10 flex items-center gap-2">
                        참석 여부 전달하기
                        <span className="text-sm opacity-60">›</span>
                    </span>
                </motion.button>
            </div>

            <style jsx global>{`
                @keyframes shine {
                    100% {
                        transform: translateX(100%);
                    }
                }
            `}</style>
        </section>
    );
}
