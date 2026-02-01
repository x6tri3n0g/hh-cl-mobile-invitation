"use client";

const contactItems = [
    {
        title: "신랑 측",
        name: "황현 · 010-1234-5678",
    },
    {
        title: "신부 측",
        name: "김채린 · 010-9876-5432",
    },
];

export default function ContactSection() {
    return (
        <section className="animate-fade-up delay-300">
            <h2 className="text-lg text-ink">연락하기</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {contactItems.map((item) => (
                    <div
                        key={item.title}
                        className="rounded-2xl border border-line bg-accent/10 px-5 py-4"
                    >
                        <p className="text-xs uppercase tracking-[0.2em] text-ink/55">
                            {item.title}
                        </p>
                        <p className="mt-2 text-sm text-ink/70">{item.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
