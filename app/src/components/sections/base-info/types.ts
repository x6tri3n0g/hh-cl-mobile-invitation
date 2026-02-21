export interface ParentInfo {
    role: string;
    name: string;
    parents: string;
    image: string;
}

export interface ContactItem {
    role: string;
    name: string;
    phone: string;
}

export interface ContactGroup {
    label: string;
    enLabel: string;
    items: ContactItem[];
}
