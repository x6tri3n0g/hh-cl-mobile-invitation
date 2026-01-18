"use client";

export default function LocationSection() {
    return (
        <section className="animate-fade-up delay-300 rounded-[28px] border border-[#F2D3DF] bg-[#FFF4F8]/85 px-6 py-7">
            <h2 className="invitation-serif text-lg text-[#4A2B3A]">
                오시는 길
            </h2>
            <div className="mt-4 space-y-3">
                <div className="relative h-48 overflow-hidden rounded-2xl border border-[#F2D3DF] bg-[#F7DCE8]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_65%)]" />
                    <div className="absolute bottom-4 left-4 text-xs text-[#9A5D7A]">
                        Map Placeholder
                    </div>
                </div>
                <div className="invitation-body text-sm text-[#7A5665]">
                    서울 성동구 성수로 12길 24
                    <br />
                    더 로즈가든 3F 로즈홀
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-[#9A5D7A]">
                    <span className="rounded-full bg-[#F8D7E6] px-3 py-1">
                        지하철 2호선 성수역 3번 출구
                    </span>
                    <span className="rounded-full bg-[#F8D7E6] px-3 py-1">
                        전용 주차 2시간 지원
                    </span>
                </div>
            </div>
        </section>
    );
}
