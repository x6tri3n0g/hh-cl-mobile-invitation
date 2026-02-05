"use client";

import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useRef,
    useState,
} from "react";
import { FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

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
    success: "bg-white text-ink",
    info: "bg-white text-ink",
    error: "bg-white text-ink",
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
            className="pointer-events-none fixed bottom-22 left-1/2 z-[100] w-[90vw] max-w-[320px] -translate-x-1/2 space-y-2"
            role="status"
            aria-live="polite"
        >
            <AnimatePresence mode="popLayout">
                {toasts.map((toast) => (
                    <motion.div
                        key={toast.id}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{
                            opacity: 0,
                            scale: 0.95,
                            transition: { duration: 0.2 },
                        }}
                        className={`
                            pointer-events-auto 
                            flex items-center justify-between gap-4 
                            rounded-2xl border border-highlight/30 px-5 py-3.5 
                            text-[13px] font-medium tracking-tight
                            shadow-[0_10px_40px_rgba(0,0,0,0.06)] 
                            ${toastVariantStyles[toast.variant]}
                        `}
                    >
                        <span className="leading-relaxed opacity-90">
                            {toast.message}
                        </span>
                    </motion.div>
                ))}
            </AnimatePresence>
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
