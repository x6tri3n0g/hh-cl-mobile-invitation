import { useCallback, useState } from "react";

export const INITIAL_ZOOM = 1;
const ZOOM_RATIO = 1.1;

interface Props {
    onZoomChange?: (zoom: number) => void;
}

export default function useZoom({ onZoomChange }: Props) {
    const [zoom, setZoom] = useState(INITIAL_ZOOM);

    const toggleZoom = useCallback(() => {
        const next = zoom === INITIAL_ZOOM ? ZOOM_RATIO : INITIAL_ZOOM;
        setZoom(next);
        onZoomChange?.(next);
    }, [onZoomChange, zoom]);

    return {
        toggleZoom,
        zoom,
    };
}
