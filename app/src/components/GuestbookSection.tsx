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
        <section id="guestbook" className=" text-center">
            <p className="text-xs tracking-[0.2em] text-ink/55">GUESTBOOK</p>
            <h2 className="mt-2 text-2xl text-ink">방명록</h2>
            <p className="mt-4 text-sm text-ink/70">
                두 사람의 시작을 함께 축복해 주세요.
            </p>
            <div className="mt-6 flex justify-center">
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="rounded-full bg-accent px-5 py-2 text-sm text-ink shadow-[0_12px_24px_rgba(214,182,114,0.3)]"
                >
                    축하메세지 보내기
                </button>
            </div>

            {entries.length > 0 && (
                <div className="mt-6 space-y-3 text-left">
                    {entries.map((entry, index) => (
                        <div
                            key={`${entry.name}-${index}`}
                            className="rounded-2xl border border-line bg-background px-4 py-3"
                        >
                            <p className="text-sm font-semibold text-ink">
                                {entry.name}
                            </p>
                            <p className="mt-1 text-xs text-ink/70">
                                {entry.message}
                            </p>
                        </div>
                    ))}
                </div>
            )}

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
                    <div className="w-full max-w-sm rounded-2xl bg-background p-5 text-left">
                        <h3 className="text-lg text-ink">방명록 작성</h3>
                        <label className="mt-4 block text-xs text-ink/55">
                            이름
                        </label>
                        <input
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            className="mt-1 w-full rounded-lg border border-line px-3 py-2 text-sm"
                        />
                        <label className="mt-4 block text-xs text-ink/55">
                            메세지
                        </label>
                        <textarea
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            rows={3}
                            className="mt-1 w-full rounded-lg border border-line px-3 py-2 text-sm"
                        />
                        <div className="mt-4 flex gap-2">
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="flex-1 rounded-full border border-line py-2 text-sm text-ink/70"
                            >
                                취소
                            </button>
                            <button
                                type="button"
                                onClick={submit}
                                className="flex-1 rounded-full bg-accent py-2 text-sm text-ink"
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
