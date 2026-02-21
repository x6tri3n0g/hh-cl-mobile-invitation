export type RsvpSide = "groom" | "bride";
export type RsvpAttendance = "yes" | "no";
export type RsvpMeal = "yes" | "no" | "undecided";

export interface RsvpData {
    name: string;
    side: RsvpSide;
    attendance: RsvpAttendance;
    guestCount: number;
    meal: RsvpMeal;
    message: string;
}

export interface RsvpModalProps {
    isOpen: boolean;
    onClose: () => void;
}
