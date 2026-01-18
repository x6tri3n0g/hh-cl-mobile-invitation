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
            <h2 className="invitation-serif text-lg text-[#4A2B3A]">
                연락하기
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {contactItems.map((item) => (
                    <div
                        key={item.title}
                        className="rounded-2xl border border-[#F2D3DF] bg-[#FFF4F8]/85 px-5 py-4"
                    >
                        <p className="invitation-body text-xs uppercase tracking-[0.2em] text-[#9A5D7A]">
                            {item.title}
                        </p>
                        <p className="invitation-body mt-2 text-sm text-[#7A5665]">
                            {item.name}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
