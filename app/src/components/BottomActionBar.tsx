"use client";

import { useCallback, useState } from "react";
import {
    FiShare,
    FiVolume2,
    FiZoomOut,
    FiVolumeX,
    FiZoomIn,
} from "react-icons/fi";
import { useToast } from "@/hooks/use-toast";

const INITIAL_ZOOM = 1;
const ZOOM_RATIO = 1.1;

interface ActionButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
}

const ActionButton = ({ children, onClick, className }: ActionButtonProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`
                group relative flex items-center justify-center 
                w-10 h-10 md:w-11 md:h-11 
                rounded-full transition-all duration-300 
                bg-white/10 hover:bg-white/20 
                border border-white/10 hover:border-white/30
                backdrop-blur-md active:scale-95
                ${className}
            `}
        >
            <span className="text-white/70 group-hover:text-white transition-colors duration-300 text-lg md:text-xl">
                {children}
            </span>
        </button>
    );
};

interface Props {
    onZoomChange?: (zoom: number) => void;
}

export default function BottomActionBar({ onZoomChange }: Props) {
    const [soundOn, setSoundOn] = useState(false);
    const [zoom, setZoom] = useState(INITIAL_ZOOM);
    const { toast } = useToast();

    const toggleZoom = useCallback(() => {
        const next = zoom === INITIAL_ZOOM ? ZOOM_RATIO : INITIAL_ZOOM;
        setZoom(next);
        onZoomChange?.(next);
    }, [onZoomChange, zoom]);

    const handleShare = useCallback(async () => {
        const url = window.location.href;
        const shareData = {
            title: document.title,
            text: "모바일 청첩장을 확인해 주세요.",
            url,
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
                return;
            } catch {
                // ignore cancellation
            }
        }

        try {
            await navigator.clipboard.writeText(url);
            toast.success("링크가 복사되었습니다.");
        } catch {}
    }, [toast]);

    return (
        <div className="fixed bottom-6 right-6 z-50 pb-[env(safe-area-inset-bottom)]">
            <div className="flex flex-row items-center gap-2.5 p-2 bg-black/25 backdrop-blur-2xl rounded-full border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <ActionButton onClick={handleShare}>
                    <FiShare />
                </ActionButton>
                <ActionButton onClick={() => setSoundOn((prev) => !prev)}>
                    {soundOn ? <FiVolumeX /> : <FiVolume2 />}
                </ActionButton>
                <ActionButton onClick={toggleZoom}>
                    {zoom === INITIAL_ZOOM ? <FiZoomIn /> : <FiZoomOut />}
                </ActionButton>
            </div>
        </div>
    );
}
