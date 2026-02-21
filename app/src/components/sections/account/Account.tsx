"use client";

import { useCallback, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Switcher } from "../../switcher";
import { ACCOUNT_ITEMS, ACCOUNT_TABS } from "./constants";
import { getAccountItems } from "./utils";
import type { AccountSide } from "./types";
import AccountItemCard from "./AccountItemCard";

export default function AccountSection() {
    const [tab, setTab] = useState<AccountSide>("groom");
    const { toast } = useToast();
    const items = getAccountItems(ACCOUNT_ITEMS, tab);

    const copy = useCallback(async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            toast.success("계좌번호가 복사되었습니다.");
        } catch {
            toast.error("계좌번호 복사가 불가능합니다.");
        }
    }, [toast]);

    return (
        <section id="account" className="py-12">
            <div className="text-center">
                <p className="text-xs tracking-[0.2em] text-ink/55 uppercase">
                    Account Information
                </p>
                <h2 className="mt-2 text-2xl text-ink">축하의 마음을 전하기</h2>
            </div>

            <Switcher
                layoutId="account-switcher"
                value={tab}
                onValueChange={setTab}
            >
                <Switcher.List>
                    {ACCOUNT_TABS.map((accountTab) => (
                        <Switcher.Item
                            key={accountTab.id}
                            value={accountTab.id}
                        >
                            {accountTab.label}
                        </Switcher.Item>
                    ))}
                </Switcher.List>
                <Switcher.Panel>
                    {items.map((item) => (
                        <AccountItemCard
                            key={item.name}
                            item={item}
                            onCopy={copy}
                        />
                    ))}
                </Switcher.Panel>
            </Switcher>
        </section>
    );
}
