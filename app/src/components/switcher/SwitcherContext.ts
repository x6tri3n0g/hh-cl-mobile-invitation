"use client";

import { createContext, useContext } from "react";
import type { SwitcherContextValue } from "./types";

const SwitcherContext = createContext<SwitcherContextValue<any> | null>(null); // eslint-disable-line @typescript-eslint/no-explicit-any

function useSwitcher<T = string>() {
    const context = useContext(SwitcherContext);
    if (!context) {
        throw new Error("Switcher components must be used within Switcher.");
    }
    return context as SwitcherContextValue<T>;
}

export { SwitcherContext, useSwitcher };
