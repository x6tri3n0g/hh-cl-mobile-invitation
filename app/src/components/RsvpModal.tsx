"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { FiUser, FiUsers, FiMessageCircle, FiX, FiCheck } from "react-icons/fi";

const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxF6iYMTTJPDlzy-X9YErzhebp7dmoI_Z9n42BeBiwzbjI3Rxl1Yphg1FO00jmTZbYB/exec";

type RsvpData = {
    name: string;
    side: "groom" | "bride";
    attendance: "yes" | "no";
    guestCount: number;
    meal: "yes" | "no" | "undecided";
    message: string;
};

interface RsvpModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function RsvpModal({ isOpen, onClose }: RsvpModalProps) {
    const [mounted, setMounted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    useEffect(() => {
        setMounted(true);
    }, []);

    const [formData, setFormData] = useState<RsvpData>({
        name: "",
        side: "groom",
        attendance: "yes",
        guestCount: 1,
        meal: "yes",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name.trim()) {
            toast.error("성함을 입력해주세요.");
            return;
        }

        if (!GOOGLE_SCRIPT_URL) {
            console.error("GOOGLE_SCRIPT_URL is not set.");
            toast.info("참석 명단이 전송되었습니다. (테스트 모드)");
            onClose();
            return;
        }

        setIsSubmitting(true);
        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            toast.success("참석 정보가 소중히 전달되었습니다.");
            onClose();
            setFormData({
                name: "",
                side: "groom",
                attendance: "yes",
                guestCount: 1,
                meal: "yes",
                message: "",
            });
        } catch (error) {
            toast.error("전송 중 오류가 발생했습니다. 다시 시도해주세요.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="relative w-full max-w-sm overflow-hidden rounded-[2rem] bg-white shadow-2xl"
                    >
                        <div className="bg-highlight/5 px-6 py-8">
                            <button
                                onClick={onClose}
                                className="absolute right-6 top-6 text-ink/30 hover:text-ink/60 transition-colors"
                            >
                                <FiX size={24} />
                            </button>

                            <h3 className="text-xl font-bold text-ink">
                                참석 여부 전달
                            </h3>
                            <p className="mt-2 text-sm text-ink/50">
                                소중한 일정을 함께해주셔서 감사합니다.
                            </p>

                            <form
                                onSubmit={handleSubmit}
                                className="mt-8 space-y-5 text-left"
                            >
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-[13px] font-semibold text-ink/60">
                                        <FiUser
                                            size={14}
                                            className="text-highlight"
                                        />
                                        성함
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                name: e.target.value,
                                            })
                                        }
                                        placeholder="성함을 입력해주세요"
                                        className="w-full rounded-xl border border-line/50 bg-white px-4 py-3 text-sm focus:border-highlight focus:outline-none focus:ring-2 focus:ring-highlight/10 transition-all font-medium"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[13px] font-semibold text-ink/60">
                                        구분
                                    </label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {(["groom", "bride"] as const).map(
                                            (side) => (
                                                <button
                                                    key={side}
                                                    type="button"
                                                    onClick={() =>
                                                        setFormData({
                                                            ...formData,
                                                            side,
                                                        })
                                                    }
                                                    className={`rounded-xl py-2.5 text-sm transition-all ${
                                                        formData.side === side
                                                            ? "bg-highlight text-white shadow-lg shadow-highlight/20 font-semibold"
                                                            : "bg-slate-50 text-ink/40"
                                                    }`}
                                                >
                                                    {side === "groom"
                                                        ? "신랑 측"
                                                        : "신부 측"}
                                                </button>
                                            )
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[13px] font-semibold text-ink/60">
                                        참석 여부
                                    </label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {(["yes", "no"] as const).map((att) => (
                                            <button
                                                key={att}
                                                type="button"
                                                onClick={() =>
                                                    setFormData({
                                                        ...formData,
                                                        attendance: att,
                                                    })
                                                }
                                                className={`rounded-xl py-2.5 text-sm transition-all ${
                                                    formData.attendance === att
                                                        ? "bg-highlight text-white shadow-lg shadow-highlight/20 font-semibold"
                                                        : "bg-slate-50 text-ink/40"
                                                }`}
                                            >
                                                {att === "yes"
                                                    ? "참석 가능"
                                                    : "참석 불가"}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {formData.attendance === "yes" && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{
                                            opacity: 1,
                                            height: "auto",
                                        }}
                                        className="space-y-5 pt-1"
                                    >
                                        <div className="space-y-2">
                                            <label className="flex items-center gap-2 text-[13px] font-semibold text-ink/60">
                                                <FiUsers
                                                    size={14}
                                                    className="text-highlight"
                                                />
                                                총 인원 (본인 포함)
                                            </label>
                                            <div className="flex items-center gap-3">
                                                {[1, 2, 3, 4, 5].map((num) => (
                                                    <button
                                                        key={num}
                                                        type="button"
                                                        onClick={() =>
                                                            setFormData({
                                                                ...formData,
                                                                guestCount: num,
                                                            })
                                                        }
                                                        className={`flex-1 rounded-lg py-2 text-xs transition-all ${
                                                            formData.guestCount ===
                                                            num
                                                                ? "bg-highlight/10 text-highlight ring-1 ring-highlight font-bold"
                                                                : "bg-slate-50 text-ink/30"
                                                        }`}
                                                    >
                                                        {num}
                                                        {num === 5 ? "+" : ""}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[13px] font-semibold text-ink/60">
                                                식사 여부
                                            </label>
                                            <div className="grid grid-cols-3 gap-2">
                                                {(
                                                    [
                                                        "yes",
                                                        "no",
                                                        "undecided",
                                                    ] as const
                                                ).map((m) => (
                                                    <button
                                                        key={m}
                                                        type="button"
                                                        onClick={() =>
                                                            setFormData({
                                                                ...formData,
                                                                meal: m,
                                                            })
                                                        }
                                                        className={`rounded-xl py-2 text-xs transition-all ${
                                                            formData.meal === m
                                                                ? "bg-highlight/10 text-highlight ring-1 ring-highlight font-bold"
                                                                : "bg-slate-50 text-ink/30"
                                                        }`}
                                                    >
                                                        {m === "yes"
                                                            ? "식사함"
                                                            : m === "no"
                                                              ? "안함"
                                                              : "미정"}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-[13px] font-semibold text-ink/60">
                                        <FiMessageCircle
                                            size={14}
                                            className="text-highlight"
                                        />
                                        메시지
                                    </label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                message: e.target.value,
                                            })
                                        }
                                        placeholder="축하의 한마디를 남겨주세요"
                                        rows={2}
                                        className="w-full rounded-xl border border-line/50 bg-white px-4 py-3 text-sm focus:border-highlight focus:outline-none focus:ring-2 focus:ring-highlight/10 transition-all font-medium resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-ink py-4 font-bold text-white shadow-xl shadow-ink/10 transition-all hover:bg-ink/90 active:scale-[0.98] disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                    ) : (
                                        <>
                                            참석 정보 전송하기
                                            <FiCheck className="text-lg text-white/60" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}
