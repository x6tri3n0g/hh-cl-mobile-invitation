import { useEffect, useState } from "react";
import type { TimeLeft } from "./types";

export function useWeddingCountdown(targetDate: Date) {
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const diff = Math.max(targetDate.getTime() - now.getTime(), 0);

            return {
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                mins: Math.floor((diff / (1000 * 60)) % 60),
                secs: Math.floor((diff / 1000) % 60),
            };
        };

        setTimeLeft(calculateTimeLeft());

        const id = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(id);
    }, [targetDate]);

    return timeLeft;
}
