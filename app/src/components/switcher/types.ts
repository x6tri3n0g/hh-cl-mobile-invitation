import type { PropsWithChildren, ReactNode } from "react";

export interface Tab<T = string> {
    id: T;
    label: string;
}

export interface SwitcherContextValue<T = string> {
    active: T;
    setActive: (id: T) => void;
    layoutId: string;
}

export interface SwitcherRootProps<T = string> extends PropsWithChildren {
    layoutId: string;
    value: T;
    onValueChange: (id: T) => void;
}

export interface SwitcherListProps extends PropsWithChildren {
    className?: string;
}

export interface SwitcherItemProps<T = string> {
    value: T;
    children: ReactNode;
}

export interface SwitcherPanelProps<T = string> extends PropsWithChildren {
    value?: T;
}
