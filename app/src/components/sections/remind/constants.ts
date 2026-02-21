import type { CalendarEvent } from "./types";

export const REMIND_MESSAGE_URL =
    "https://calendar.app.google/yGqbSPJNRMakctDy9";

export const WEDDING_EVENT: CalendarEvent = {
    title: "황현, 김채린의 결혼식 💍",
    description:
        "소중한 날, 함께 축하해주세요!\n\n장소: 강동 루벨\n주소: 서울특별시 강동구 천호대로 1077, 이스트센트럴타워 35층",
    location: "강동 루벨",
    startDate: new Date("2026-05-30T18:30:00+09:00"),
    endDate: new Date("2026-05-30T20:30:00+09:00"),
    alarms: ["-P1W", "-P1D"],
};
