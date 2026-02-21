import type { AccountItemsBySide, AccountSide, AccountItem } from "./types";

export function getAccountItems(
    items: AccountItemsBySide,
    side: AccountSide
): readonly AccountItem[] {
    return items[side];
}
