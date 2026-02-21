"use client";

export default function LocationSection() {
    return (
        <section className="animate-fade-up delay-300 rounded-[28px] border border-line bg-accent/10 px-6 py-7">
            <h2 className="text-lg text-ink">오시는 길</h2>
            <div className="mt-4 space-y-3">
                <div className="relative h-48 overflow-hidden rounded-2xl border border-line bg-accent/15">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_65%)]" />
                    <div className="absolute bottom-4 left-4 text-xs text-ink/55">
                        Map Placeholder
                    </div>
                </div>
                <div className="text-sm text-ink/70">
                    서울 성동구 성수로 12길 24
                    <br />더 로즈가든 3F 로즈홀
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-ink/55">
                    <span className="rounded-full bg-accent/20 px-3 py-1">
                        지하철 2호선 성수역 3번 출구
                    </span>
                    <span className="rounded-full bg-accent/20 px-3 py-1">
                        전용 주차 2시간 지원
                    </span>
                </div>
            </div>
        </section>
    );
}
