"use client";

import { memo } from "react";
import { FiCopy } from "react-icons/fi";
import type { AccountItem } from "./types";

interface AccountItemCardProps {
    item: AccountItem;
    onCopy: (text: string) => void;
}

function AccountItemCard({ item, onCopy }: AccountItemCardProps) {
    return (
        <button
            type="button"
            onClick={() => onCopy(item.number)}
            className="group relative flex w-full flex-col items-start overflow-hidden rounded-[1.25rem] border border-accent/50 bg-white px-5 py-4 shadow-sm transition-all hover:border-accent hover:shadow-md active:scale-[0.98]"
        >
            <div className="flex w-full items-center justify-between">
                <p className="text-base font-semibold text-ink">{item.name}</p>
                <div className="rounded-full bg-accent/30 p-2 text-highlight">
                    <FiCopy className="text-sm" />
                </div>
            </div>
            <p className="mt-0.5 text-[0.9rem] text-ink/60">
                {item.bank} · {item.number}
            </p>
        </button>
    );
}

export default memo(AccountItemCard);
