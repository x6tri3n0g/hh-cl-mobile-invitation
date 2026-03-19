"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../../ScrollReveal";
import ContactModal from "./ContactModal";
import { CONTACT_GROUPS, PARENTS_INFO } from "./constants";

export default function BaseInfoSection() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <section id="base_info">
            <div className="flex w-full flex-col items-center">
                <p className="text-xs tracking-[0.2em] text-ink/55 uppercase">
                    Invitation
                </p>
                <h2 className="mt-2 text-2xl text-highlight/90">
                    소중한 분들을 초대합니다
                </h2>
                <div className="my-8 px-2 text-center leading-6 ">
                    <p>오랜 기다림 속에서 저희 두사람,</p>
                    <p>한 마음 되어 참된 사랑의 결실을 맺게 되었습니다.</p>
                    <br />
                    <p>5 월의 어느 햇살 고운 날,</p>
                    <p>귀한 걸음 하시어 따뜻한 마음으로 축복해 주시면</p>
                    <p>더 없는 기쁨이 되겠습니다.</p>
                </div>
            </div>
            <div className="flex w-full flex-col items-center">
                <div
                    className="flex w-full flex-col items-center"
                    style={{
                        opacity: 1,
                        transform: "none",
                        willChange: "transform, opacity",
                    }}
                >
                    <h2 className="mt-2 text-2xl text-ink">신랑 & 신부</h2>
                    <div className="mt-8 grid grid-cols-2 gap-4">
                        {PARENTS_INFO.map((person, index) => (
                            <ScrollReveal
                                key={person.role}
                                delay={0.1 * index}
                                direction={index % 2 === 0 ? "right" : "left"}
                                className="rounded-2xl border border-accent bg-accent/10 p-3"
                                once={false}
                            >
                                <article>
                                    <div className="overflow-hidden rounded-xl border border-accent bg-background relative aspect-square">
                                        <Image
                                            src={person.image}
                                            alt={person.name}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 50vw, 33vw"
                                        />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center gap-2 mt-3">
                                            <span className="outline-2 outline-accent bg-accent/70 rounded-full px-2 py-[2px] text-xs text-ink/70">
                                                {person.role}
                                            </span>
                                            <p className="inline-block text-base text-ink font-semibold">
                                                {person.name}
                                            </p>
                                        </div>
                                        <p className="mt-3 text-sm text-ink/70">
                                            {person.parents}
                                        </p>
                                        <p className="mt-1 text-sm text-ink/70">
                                            {person.birthday}
                                        </p>
                                        <p className="mt-1 text-sm text-ink/70">
                                            {person.mbti}
                                        </p>
                                    </div>
                                </article>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
                <div className="mt-10 flex justify-center">
                    <motion.button
                        whileHover={{ scale: 1.03, y: -3 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 20,
                        }}
                        type="button"
                        className="group relative overflow-hidden rounded-full bg-highlight/90 px-10 py-4 text-[1rem] font-semibold text-white border border-accent/40 shadow-[0_12px_24px_-10px_rgba(0,0,0,0.15)] transition-all"
                        onClick={() => setIsContactOpen(true)}
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent opacity-60" />
                        <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[100%] group-hover:animate-[shine_1.5s_infinite] pointer-events-none" />
                        <span className="relative z-10 flex items-center gap-2">
                            연락하기
                            <span className="text-sm opacity-60">›</span>
                        </span>
                    </motion.button>
                </div>
            </div>
            <ContactModal
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
                groups={CONTACT_GROUPS}
            />
        </section>
    );
}
