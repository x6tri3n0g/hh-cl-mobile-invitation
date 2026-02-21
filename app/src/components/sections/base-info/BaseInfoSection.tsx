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
                    <p>저희 두 사람의 작은 만남이</p>
                    <p>진실한 사랑으로 꽃피어</p>
                    <p>오늘 이 자리를 빛내는 결혼식으로 이어졌습니다.</p>
                    <br />
                    <p>평생 서로를 귀히 여기며</p>
                    <p>처음의 설렘과 순수함을 잃지 않고</p>
                    <p>존중하고 아껴 나가겠습니다.</p>
                    <br />
                    <p>믿음과 사랑을 기초로 한 이 날에</p>
                    <p>여러분의 따뜻한 축복이 함께 한다면</p>
                    <p>더할 나위 없는 기쁨으로 간직하겠습니다.</p>
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
                                className="rounded-2xl border border-accent bg-accent/10 p-4"
                                once={false}
                            >
                                <article>
                                    <p className="text-xs uppercase tracking-[0.2em] text-ink/55">
                                        {person.role}
                                    </p>
                                    <div className="mt-3 overflow-hidden rounded-xl border border-accent bg-background relative aspect-square">
                                        <Image
                                            src={person.image}
                                            alt={person.name}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 50vw, 33vw"
                                        />
                                    </div>
                                    <p className="mt-3 text-sm text-ink/70">
                                        {person.parents}
                                    </p>
                                    <p className="mt-1 text-base text-ink">
                                        {person.name}
                                    </p>
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
