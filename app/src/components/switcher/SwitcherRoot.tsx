"use client";

import { SwitcherContext } from "./SwitcherContext";
import type { SwitcherRootProps } from "./types";

export default function SwitcherRoot<T>({
    layoutId,
    value,
    onValueChange,
    children,
}: SwitcherRootProps<T>) {
    return (
        <SwitcherContext.Provider
            value={{ active: value, setActive: onValueChange, layoutId }}
        >
            {children}
        </SwitcherContext.Provider>
    );
}
