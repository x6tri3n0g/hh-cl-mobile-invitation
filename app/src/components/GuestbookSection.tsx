"use client";

import { useState } from "react";

type Entry = {
    name: string;
    message: string;
};

export default function GuestbookSection() {
    const [isOpen, setIsOpen] = useState(false);
    const [entries, setEntries] = useState<Entry[]>([]);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const submit = () => {
        if (!name.trim() || !message.trim()) {
            return;
        }
        setEntries((prev) => [...prev, { name, message }]);
        setName("");
        setMessage("");
        setIsOpen(false);
    };

    return (
        <section id="guestbook" className="reveal text-center">
            <p className="invitation-body text-xs tracking-[0.2em] text-[#9A5D7A]">
                GUESTBOOK
            </p>
            <h2 className="invitation-serif mt-2 text-2xl text-[#4A2B3A]">
                방명록
            </h2>
            <p className="invitation-body mt-4 text-sm text-[#7A5665]">
                두 사람의 시작을 함께 축복해 주세요.
            </p>
            <div className="mt-6 flex justify-center">
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="invitation-body rounded-full bg-[#E07AA9] px-5 py-2 text-sm text-[#FFF7FB] shadow-[0_12px_24px_rgba(224,122,169,0.28)]"
                >
                    축하메세지 보내기
                </button>
            </div>

            {entries.length > 0 && (
                <div className="mt-6 space-y-3 text-left">
                    {entries.map((entry, index) => (
                        <div
                            key={`${entry.name}-${index}`}
                            className="rounded-2xl border border-[#F2D3DF] bg-white px-4 py-3"
                        >
                            <p className="text-sm font-semibold text-[#4A2B3A]">
                                {entry.name}
                            </p>
                            <p className="mt-1 text-xs text-[#7A5665]">
                                {entry.message}
                            </p>
                        </div>
                    ))}
                </div>
            )}

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
                    <div className="w-full max-w-sm rounded-2xl bg-white p-5 text-left">
                        <h3 className="invitation-serif text-lg text-[#4A2B3A]">
                            방명록 작성
                        </h3>
                        <label className="mt-4 block text-xs text-[#9A5D7A]">
                            이름
                        </label>
                        <input
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            className="mt-1 w-full rounded-lg border border-[#F2D3DF] px-3 py-2 text-sm"
                        />
                        <label className="mt-4 block text-xs text-[#9A5D7A]">
                            메세지
                        </label>
                        <textarea
                            value={message}
                            onChange={(event) =>
                                setMessage(event.target.value)
                            }
                            rows={3}
                            className="mt-1 w-full rounded-lg border border-[#F2D3DF] px-3 py-2 text-sm"
                        />
                        <div className="mt-4 flex gap-2">
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="flex-1 rounded-full border border-[#F2D3DF] py-2 text-sm text-[#7A5665]"
                            >
                                취소
                            </button>
                            <button
                                type="button"
                                onClick={submit}
                                className="flex-1 rounded-full bg-[#E07AA9] py-2 text-sm text-white"
                            >
                                등록
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
