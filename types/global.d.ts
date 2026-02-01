interface DaumRoughmapLander {
    render: () => void;
}

interface DaumRoughmap {
    Lander: new (options: {
        timestamp: string;
        key: string;
        mapWidth: string;
        mapHeight: string;
    }) => DaumRoughmapLander;
}

interface Daum {
    roughmap: DaumRoughmap;
}

declare global {
    interface Window {
        daum?: Daum;
    }
}

export {};
