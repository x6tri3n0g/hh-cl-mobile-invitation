"use client";

import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useRef,
    useState,
} from "react";

type ToastVariant = "success" | "error" | "info";

type ToastItem = {
    id: string;
    message: string;
    variant: ToastVariant;
};

type ToastOptions = {
    duration?: number;
};

type ToastContextValue = {
    toasts: ToastItem[];
    show: (message: string, variant?: ToastVariant, duration?: number) => void;
    remove: (id: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

const toastVariantStyles: Record<ToastVariant, string> = {
    success: "border-line bg-background text-ink",
    info: "border-line bg-background text-ink",
    error: "border-line bg-background text-ink",
};

function ToastViewport({
    toasts,
    onRemove,
}: {
    toasts: ToastItem[];
    onRemove: (id: string) => void;
}) {
    if (toasts.length === 0) {
        return null;
    }

    return (
        <div
            className="pointer-events-none fixed bottom-20 left-1/2 z-[60] w-[90vw] max-w-sm -translate-x-1/2 space-y-2"
            role="status"
            aria-live="polite"
        >
            {toasts.map((toast) => (
                <div
                    key={toast.id}
                    className={`toast-pop pointer-events-auto flex items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-sm shadow-lg ${toastVariantStyles[toast.variant]}`}
                    style={{
                        animation:
                            "toast-pop 0.35s ease-out both",
                    }}
                >
                    <span className="leading-relaxed">{toast.message}</span>
                    <button
                        type="button"
                        onClick={() => onRemove(toast.id)}
                        className="rounded-full border border-line/60 px-2 py-1 text-xs text-ink/70"
                        aria-label="닫기"
                    >
                        닫기
                    </button>
                </div>
            ))}
        </div>
    );
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toasts, setToasts] = useState<ToastItem[]>([]);
    const timeouts = useRef<Map<string, number>>(new Map());

    const remove = useCallback((id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
        const timeout = timeouts.current.get(id);
        if (timeout) {
            window.clearTimeout(timeout);
            timeouts.current.delete(id);
        }
    }, []);

    const show = useCallback(
        (message: string, variant: ToastVariant = "info", duration = 2500) => {
            const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
            setToasts((prev) => [...prev, { id, message, variant }]);
            const timeout = window.setTimeout(() => remove(id), duration);
            timeouts.current.set(id, timeout);
        },
        [remove]
    );

    const value = useMemo(
        () => ({ toasts, show, remove }),
        [toasts, show, remove]
    );

    return (
        <ToastContext.Provider value={value}>
            {children}
            <ToastViewport toasts={toasts} onRemove={remove} />
        </ToastContext.Provider>
    );
}

export function useToast() {
    const ctx = useContext(ToastContext);

    if (!ctx) {
        throw new Error("useToast must be used within a ToastProvider");
    }

    const toast = useMemo(
        () => ({
            success: (message: string, options?: ToastOptions) =>
                ctx.show(message, "success", options?.duration),
            info: (message: string, options?: ToastOptions) =>
                ctx.show(message, "info", options?.duration),
            error: (message: string, options?: ToastOptions) =>
                ctx.show(message, "error", options?.duration),
        }),
        [ctx]
    );

    return { toast };
}
