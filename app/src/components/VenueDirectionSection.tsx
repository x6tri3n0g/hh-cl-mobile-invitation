"use client";

import { useToast } from "@/hooks/use-toast";
import { FiCopy } from "react-icons/fi";

const DIRECT_URLS = [
    { label: "티맵", url: "https://tmap.life/a82f4738" },
    { label: "카카오 맵", url: "https://place.map.kakao.com/1185379934" },
    { label: "네이버 지도", url: "https://naver.me/FqZOfQv9" },
];

const VENUE_ADDRESS = "서울특별시 강동구 천호대로 1077, 이스트센트럴타워 35층";

export default function VenueDirectionSection() {
    const { toast } = useToast();
    const copy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            toast.success("주소가 복사되었습니다.");
        } catch {
            toast.error("주소 복사가 불가능합니다.");
        }
    };

    return (
        <section id="venue_direction" className="">
            <div className="text-center">
                <p className="text-xs tracking-[0.2em] text-ink/55">
                    LOCATION INFORMATION
                </p>
                <h2 className="mt-2 text-2xl text-ink">오시는 길</h2>
                <p className="mt-4 text-sm text-ink/70 flex flex-col items-center">
                    <strong>강동 루벨</strong>
                    <button
                        type="button"
                        className="mt-1 flex justify-center items-center gap-2"
                        onClick={() => copy(VENUE_ADDRESS)}
                    >
                        {VENUE_ADDRESS}
                        <FiCopy className="text-blue-500" />
                    </button>
                </p>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-accent/10">
                <div className="relative h-60 border border-accent/70">
                    <iframe
                        title="Google 지도"
                        className="absolute inset-0 h-full w-full border-0"
                        src={`https://maps.google.com/maps?q=${encodeURIComponent(
                            VENUE_ADDRESS
                        )}&output=embed&hl=ko`}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_65%)]" />
                    <div className="pointer-events-none absolute bottom-4 right-4 rounded-full border border-line/70 bg-background/90 px-3 py-1 text-xs text-ink/70 shadow">
                        황현 ❤️ 김채린
                    </div>
                </div>
            </div>
            <div className="mt-3 flex gap-2">
                {DIRECT_URLS.map((item) => (
                    <button
                        key={item.label}
                        type="button"
                        className="flex-1 rounded-lg px-3 py-2 text-base text-ink bg-accent/90"
                        onClick={() => window.open(item.url, "_blank")}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            <div className="mt-6 space-y-4 text-base text-ink/70">
                <div>
                    <p className="font-semibold text-ink">지하철</p>
                    <p className="mt-1 text-base">
                        5호선 강동역 1번 출구 → 건물 지하 연결 → 35층
                    </p>
                </div>
                <div>
                    <p className="font-semibold text-ink">자가용</p>
                    <p className="mt-1 text-base">
                        네비게이션: 강동 루벨 (주차 가능, 2시간 무료)
                    </p>
                </div>
            </div>
        </section>
    );
}
