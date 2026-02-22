import { useToast } from "@/hooks/use-toast";
import { useCallback, useEffect, useRef, useState } from "react";

export const AUDIO_SRC = "/audio/bgm.mp3";

export default function useBGM() {
    const { toast } = useToast();

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [soundOn, setSoundOn] = useState(false);

    // 오디오 설정 초기화
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.loop = true;
        audio.volume = 0.5;

        // 초기 자동 재생 시도 (선택 사항)
        const attemptAutoplay = async () => {
            try {
                await audio.play();
                setSoundOn(true);
            } catch (error) {
                console.log("Autoplay blocked:", error);
                // 자동 재생 차단은 일반적인 상황이므로 토스트는 생략하거나 소리 켜기 유도로 변경
            }
        };

        void attemptAutoplay();
    }, []);

    const toggleSound = useCallback(async () => {
        const audio = audioRef.current;
        if (!audio) return;

        try {
            if (audio.paused) {
                await audio.play();
                setSoundOn(true);
            } else {
                audio.pause();
                setSoundOn(false);
            }
        } catch (error) {
            console.error("Audio playback error:", error);
            toast.error("오디오를 재생할 수 없습니다.");
        }
    }, [toast]);

    return {
        audioRef,
        toggleSound,
        soundOn,
    };
}
