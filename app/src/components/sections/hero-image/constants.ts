import type { HeroImageData, HeroTextConfig, StarConfig } from "./types";

export const HERO_IMAGES: HeroImageData[] = [
    {
        src: "https://res.cloudinary.com/dpjkhhtmt/image/upload/v1769927440/KakaoTalk_Photo_2026-01-25-19-12-19_009_fd3nip.jpg",
        alt: "메인 웨딩 사진 1",
    },
];

export const HERO_TEXT: HeroTextConfig = {
    dateLabel: "2026.05.30 · 토요일 · 오후 6시 30분",
    groomName: "황현",
    brideName: "김채린",
    subtitle: "결혼식에 초대합니다.",
};

export const STAR_CONFIG: StarConfig = {
    count: 120,
    containerHeight: "25svh",
    minSize: 0.8,
    sizeRange: 3.2,
    delayRange: 15,
    minDuration: 4,
    durationRange: 8,
};
