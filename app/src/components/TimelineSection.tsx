"use client";

const timelineItems = [
    { time: "오후 6:00", label: "하객 맞이 시작" },
    { time: "오후 6:30", label: "예식 시작" },
    { time: "오후 7:00", label: "피로연 및 포토타임" },
];

export default function TimelineSection() {
    return (
        <section className="animate-fade-up delay-300">
            <div className="flex items-center justify-between">
                <h2 className="invitation-serif text-lg text-[#4A2B3A]">
                    예식 안내
                </h2>
                <span className="invitation-body text-xs text-[#9A5D7A]">
                    Timeline
                </span>
            </div>
            <div className="mt-5 grid gap-4">
                {timelineItems.map((item) => (
                    <div
                        key={item.time}
                        className="flex items-center justify-between rounded-2xl border border-[#F2D3DF] bg-[#FFF4F8]/85 px-5 py-4"
                    >
                        <span className="invitation-serif text-base text-[#4A2B3A]">
                            {item.time}
                        </span>
                        <span className="invitation-body text-sm text-[#7A5665]">
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
