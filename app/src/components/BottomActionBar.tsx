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
            className={`flex items-center justify-center w-[48px] h-[48px] rounded-full border border-line bg-accent/10 px-3 py-3 text-base text-ink ${className}`}
        >
            {children}
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
        } catch {
            toast.error("공유가 불가능합니다.");
        }
    }, [toast]);

    return (
        <div className="fixed bottom-2 right-4 z-50 pb-[env(safe-area-inset-bottom)]">
            <div className="flex items-center gap-2 border-line bg-background/90 p-3 backdrop-blur rounded-full shadow-lg">
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
