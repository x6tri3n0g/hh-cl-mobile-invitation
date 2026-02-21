import type { Tab } from "../../switcher";
import type { AccountItemsBySide } from "./types";

export const ACCOUNT_TABS: Tab[] = [
    {
        id: "groom",
        label: "신랑측",
    },
    {
        id: "bride",
        label: "신부측",
    },
];

export const ACCOUNT_ITEMS: AccountItemsBySide = {
    groom: [
        { name: "[신랑] 황현", bank: "카카오뱅크", number: "3333034910329" },
        { name: "[아버지] 황선주", bank: "농협", number: "356-0024-1595-43" },
    ],
    bride: [
        { name: "[신부] 김채린", bank: "카카오뱅크", number: "3333260822625" },
        {
            name: "[아버지] 김기용",
            bank: "하나은행",
            number: "164-910007-44507",
        },
        { name: "[어머니] 인희숙", bank: "신한은행", number: "232-02-121098" },
    ],
};
