"use client";

import { useState } from "react";

type BottomActionBarProps = {
    onZoomChange?: (zoom: number) => void;
};

export default function BottomActionBar({ onZoomChange }: BottomActionBarProps) {
    const [soundOn, setSoundOn] = useState(false);
    const [zoom, setZoom] = useState(1);

    const toggleZoom = () => {
        const next = zoom === 1 ? 1.1 : 1;
        setZoom(next);
        onZoomChange?.(next);
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 mx-auto w-full max-w-[480px] border-t border-[#F2D3DF] bg-white/90 p-3 backdrop-blur">
            <div className="flex items-center gap-2">
                <button
                    type="button"
                    className="flex-1 rounded-lg border border-[#F2D3DF] bg-[#FFF4F8] px-3 py-3 text-sm text-[#4A2B3A]"
                >
                    공유
                </button>
                <button
                    type="button"
                    onClick={() => setSoundOn((prev) => !prev)}
                    className="flex-1 rounded-lg border border-[#F2D3DF] bg-[#FFF4F8] px-3 py-3 text-sm text-[#4A2B3A]"
                >
                    {soundOn ? "ON" : "OFF"}
                </button>
                <button
                    type="button"
                    onClick={toggleZoom}
                    className="flex-1 rounded-lg border border-[#F2D3DF] bg-[#FFF4F8] px-3 py-3 text-sm text-[#4A2B3A]"
                >
                    {zoom === 1 ? "1x" : "1.1x"}
                </button>
            </div>
        </div>
    );
}
