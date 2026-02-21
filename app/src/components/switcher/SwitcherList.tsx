"use client";

import type { SwitcherListProps } from "./types";

export default function SwitcherList({
    children,
    className = "",
}: SwitcherListProps) {
    return (
        <div
            className={`mt-8 mx-auto rounded-3xl bg-highlight/30 p-1.5 overflow-hidden ${className}`}
        >
            <div className="relative flex">{children}</div>
        </div>
    );
}
