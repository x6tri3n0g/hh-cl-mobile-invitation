export interface ConfettiConfig {
    randomX: number;
    randomY: number;
    randomRotation: number;
    randomScale: number;
    color: string;
    duration: number;
    delay: number;
    isCircle: boolean;
}

export interface ConfettiParticleProps {
    isLeft: boolean;
    index: number;
}
