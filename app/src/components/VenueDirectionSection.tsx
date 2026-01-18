"use client";

export default function VenueDirectionSection() {
    return (
        <section id="venue_direction" className="reveal">
            <div className="text-center">
                <p className="invitation-body text-xs tracking-[0.2em] text-[#9A5D7A]">
                    LOCATION INFORMATION
                </p>
                <h2 className="invitation-serif mt-2 text-2xl text-[#4A2B3A]">
                    오시는 길
                </h2>
                <p className="invitation-body mt-4 text-sm text-[#7A5665]">
                    서울 강동구 어린이대공원로 304 · 강동 루벨
                </p>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-[#F2D3DF] bg-[#FFF4F8]">
                <div className="relative h-60 bg-[#F7DCE8]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.85),transparent_65%)]" />
                    <div className="absolute bottom-4 left-4 text-xs text-[#9A5D7A]">
                        Map Placeholder
                    </div>
                    <div className="absolute bottom-4 right-4 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-xs text-[#7A5665] shadow">
                        황현 ❤️ 김채린
                    </div>
                </div>
            </div>

            <div className="mt-4 text-center text-sm text-[#7A5665]">
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
                        className="flex-1 rounded-lg border border-[#F2D3DF] bg-white px-3 py-2 text-xs text-[#4A2B3A] shadow-sm transition hover:shadow-md"
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            <div className="mt-6 space-y-4 text-sm text-[#7A5665]">
                <div>
                    <p className="font-semibold text-[#4A2B3A]">지하철</p>
                    <p className="mt-1 text-xs">
                        5호선 강동역 3번 출구 → 도보 8분
                    </p>
                </div>
                <div>
                    <p className="font-semibold text-[#4A2B3A]">버스</p>
                    <p className="mt-1 text-xs">
                        간선: 130, 340, 370 / 지선: 2312, 3318
                    </p>
                </div>
                <div>
                    <p className="font-semibold text-[#4A2B3A]">자가용</p>
                    <p className="mt-1 text-xs">
                        네비게이션: 강동 루벨 (주차 가능, 혼잡 시 지연 예상)
                    </p>
                </div>
            </div>
        </section>
    );
}
