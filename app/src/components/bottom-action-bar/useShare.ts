import { useCallback } from "react";
import { useToast } from "@/hooks/use-toast";

export default function useShare() {
    const { toast } = useToast();

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

    return {
        handleShare,
    };
}
