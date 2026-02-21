export interface StarProps {
    id: number;
    x: string;
    y: string;
    size: number;
    delay: number;
    duration: number;
}

export interface StarConfig {
    count: number;
    containerHeight: string;
    minSize: number;
    sizeRange: number;
    delayRange: number;
    minDuration: number;
    durationRange: number;
}

export interface HeroImageData {
    src: string;
    alt: string;
}

export interface HeroTextConfig {
    dateLabel: string;
    groomName: string;
    brideName: string;
    subtitle: string;
}
