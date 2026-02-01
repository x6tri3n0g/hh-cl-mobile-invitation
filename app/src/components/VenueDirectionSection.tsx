"use client";

export default function VenueDirectionSection() {
    return (
        <section id="venue_direction" className="">
            <div className="text-center">
                <p className="text-xs tracking-[0.2em] text-ink/55">
                    LOCATION INFORMATION
                </p>
                <h2 className="mt-2 text-2xl text-ink">오시는 길</h2>
                <p className="mt-4 text-sm text-ink/70">
                    서울 강동구 어린이대공원로 304 · 강동 루벨
                </p>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-accent/10">
                <div className="relative h-60 bg-accent/15">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.85),transparent_65%)]" />
                    <div className="absolute bottom-4 left-4 text-xs text-ink/55">
                        Map Placeholder
                    </div>
                    <div className="absolute bottom-4 right-4 rounded-full border border-line/70 bg-background/90 px-3 py-1 text-xs text-ink/70 shadow">
                        황현 ❤️ 김채린
                    </div>
                </div>
            </div>

            <div className="mt-4 text-center text-sm text-ink/70">
                앱을 열어 길 안내를 시작해 보세요.
            </div>
            <div className="mt-3 flex gap-2">
                {[
                    { label: "티맵" },
                    { label: "카카오 네비" },
                    { label: "네이버 지도" },
                ].map((item) => (
                    <button
                        key={item.label}
                        type="button"
                        className="flex-1 rounded-lg border border-line bg-background px-3 py-2 text-xs text-ink shadow-sm transition hover:shadow-md"
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            <div className="mt-6 space-y-4 text-sm text-ink/70">
                <div>
                    <p className="font-semibold text-ink">지하철</p>
                    <p className="mt-1 text-xs">
                        5호선 강동역 3번 출구 → 도보 8분
                    </p>
                </div>
                <div>
                    <p className="font-semibold text-ink">버스</p>
                    <p className="mt-1 text-xs">
                        간선: 130, 340, 370 / 지선: 2312, 3318
                    </p>
                </div>
                <div>
                    <p className="font-semibold text-ink">자가용</p>
                    <p className="mt-1 text-xs">
                        네비게이션: 강동 루벨 (주차 가능, 혼잡 시 지연 예상)
                    </p>
                </div>
            </div>
        </section>
    );
}
