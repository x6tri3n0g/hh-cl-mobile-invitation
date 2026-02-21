import type { ContactGroup, ParentInfo } from "./types";

export const PARENTS_INFO: ParentInfo[] = [
    {
        role: "신랑",
        name: "황현",
        parents: "황선주 · 김미량의 아들",
        image: "https://res.cloudinary.com/dpjkhhtmt/image/upload/v1769927430/KakaoTalk_Photo_2026-01-25-19-12-14_002_fvoc1y.jpg",
    },
    {
        role: "신부",
        name: "김채린",
        parents: "김기용 · 인희숙의 딸",
        image: "https://res.cloudinary.com/dpjkhhtmt/image/upload/v1769927435/KakaoTalk_Photo_2026-01-25-19-12-15_003_uaqiuj.jpg",
    },
];

export const CONTACT_GROUPS: ContactGroup[] = [
    {
        label: "신랑 측",
        enLabel: "GROOM",
        items: [
            { role: "신랑", name: "황현", phone: "010-7467-9632" },
            { role: "신랑 아버님", name: "황선주", phone: "010-3618-3336" },
        ],
    },
    {
        label: "신부 측",
        enLabel: "BRIDE",
        items: [
            { role: "신부", name: "김채린", phone: "010-8299-1154" },
            { role: "신부 아버님", name: "김기용", phone: "010-8299-1154" },
            { role: "신부 어머님", name: "인희숙", phone: "010-8299-1154" },
        ],
    },
];
