import type { InformationTab } from "./types";

export const INFORMATION_TABS: InformationTab[] = [
    {
        id: "parking",
        label: "주차",
        content: `- 위치: 서울 강동구 천호대로 1077, 이스트센트럴타워 지하주차장
- 주차 요금: 하객 2시간 무료 (35층 주차권 키오스크 등에서 주차권 등록)
- 주차 공간: 최대 350대 수용 가능
- 이용 팁: 지하주차장에서 1층으로 올라온 후, 엘리베이터를 갈아타서 35층으로 이동`,
    },
    {
        id: "venue_direction",
        label: "예식장 오시는 길",
        content:
            "건물 내 1층 로비 중앙 엘리베이터를 통해 한번에 올라오실 수 있습니다.",
    },
];
