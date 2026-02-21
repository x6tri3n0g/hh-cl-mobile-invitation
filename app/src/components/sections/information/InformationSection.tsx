"use client";

import { useState } from "react";
import { Switcher } from "../../switcher";
import { INFORMATION_TABS } from "./constants";

export default function InformationSection() {
    const [active, setActive] = useState(INFORMATION_TABS[0].id);
    const current =
        INFORMATION_TABS.find((tab) => tab.id === active) ??
        INFORMATION_TABS[0];

    return (
        <section id="information" className="py-12">
            <div className="text-center">
                <p className="text-xs tracking-[0.2em] text-ink/55 uppercase">
                    Information
                </p>
                <h2 className="mt-2 text-2xl text-ink">안내사항</h2>
            </div>

            <Switcher
                layoutId="information-switcher"
                value={active}
                onValueChange={setActive}
            >
                <Switcher.List>
                    {INFORMATION_TABS.map((tab) => (
                        <Switcher.Item key={tab.id} value={tab.id}>
                            {tab.label}
                        </Switcher.Item>
                    ))}
                </Switcher.List>
                <Switcher.Panel>
                    <p className="text-sm leading-relaxed text-ink/70 whitespace-pre-line rounded-[1.25rem] border border-accent/50 bg-white px-6 py-6 shadow-sm">
                        {current.content}
                    </p>
                </Switcher.Panel>
            </Switcher>
        </section>
    );
}
