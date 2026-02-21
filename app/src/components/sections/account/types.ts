export type AccountSide = "groom" | "bride";

export interface AccountItem {
    name: string;
    bank: string;
    number: string;
}

export type AccountItemsBySide = Record<AccountSide, readonly AccountItem[]>;
