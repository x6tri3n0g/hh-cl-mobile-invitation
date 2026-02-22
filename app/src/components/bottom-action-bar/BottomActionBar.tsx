"use client";

import {
    FiShare,
    FiVolume2,
    FiZoomOut,
    FiVolumeX,
    FiZoomIn,
} from "react-icons/fi";
import useShare from "./useShare";
import useZoom, { INITIAL_ZOOM } from "./useZoom";
import useBGM, { AUDIO_SRC } from "./useBGM";

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
    const { handleShare } = useShare();
    const { toggleSound, soundOn, audioRef } = useBGM();
    const { toggleZoom, zoom } = useZoom({ onZoomChange });

    return (
        <div
            className="fixed right-6 z-50"
            style={{
                bottom: "calc(env(safe-area-inset-bottom) + 8px)",
            }}
        >
            <div className="flex flex-row items-center gap-2.5 p-2 bg-black/25 backdrop-blur-2xl rounded-full border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <ActionButton onClick={handleShare}>
                    <FiShare />
                </ActionButton>
                <ActionButton onClick={toggleSound}>
                    {soundOn ? <FiVolumeX /> : <FiVolume2 />}
                </ActionButton>
                <ActionButton onClick={toggleZoom}>
                    {zoom === INITIAL_ZOOM ? <FiZoomIn /> : <FiZoomOut />}
                </ActionButton>
            </div>
            <audio ref={audioRef} src={AUDIO_SRC} />
        </div>
    );
}
