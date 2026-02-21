import { motion } from "framer-motion";

export interface Tab {
    id: string;
    label: string;
}

interface TabButtonProps {
    tab: Tab;
    isActive: boolean;
    onClick: () => void;
    layoutId: string;
}

function TabButton({ tab, isActive, onClick, layoutId }: TabButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`relative flex-1 rounded-full py-2.5 text-sm font-medium transition-colors duration-200 ${
                isActive ? "text-ink" : "text-ink/40 hover:text-ink/60"
            }`}
        >
            {isActive && (
                <motion.div
                    layoutId={layoutId}
                    className="absolute inset-0 bg-white shadow-sm rounded-full"
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                    }}
                />
            )}
            <span className="relative z-10">{tab.label}</span>
        </button>
    );
}

interface SwitcherProps {
    layoutId: string;
    tabs: Tab[];
    active: string;
    setActive: (id: string) => void;
}

export default function Switcher({
    layoutId,
    tabs,
    active,
    setActive,
}: SwitcherProps) {
    return (
        <div className="mt-8 mx-auto rounded-3xl bg-highlight/30 p-1.5 overflow-hidden">
            <div className="relative flex">
                {tabs.map((tab) => (
                    <TabButton
                        key={tab.id}
                        tab={tab}
                        isActive={active === tab.id}
                        onClick={() => setActive(tab.id)}
                        layoutId={layoutId}
                    />
                ))}
            </div>
        </div>
    );
}
