export function swipePower(offset: number, velocity: number) {
    return Math.abs(offset) * velocity;
}

export function getNormalizedIndex(page: number, total: number) {
    return ((page % total) + total) % total;
}

export function getShortestMove(
    targetIndex: number,
    currentIndex: number,
    total: number
) {
    const diff = targetIndex - currentIndex;
    if (diff > total / 2) return diff - total;
    if (diff < -total / 2) return diff + total;
    return diff;
}
