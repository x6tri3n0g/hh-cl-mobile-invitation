import type { RsvpAttendance, RsvpMeal, RsvpSide } from "./types";

export const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxF6iYMTTJPDlzy-X9YErzhebp7dmoI_Z9n42BeBiwzbjI3Rxl1Yphg1FO00jmTZbYB/exec";

export const RSVP_SIDES: readonly RsvpSide[] = ["groom", "bride"];
export const RSVP_ATTENDANCE: readonly RsvpAttendance[] = ["yes", "no"];
export const RSVP_MEALS: readonly RsvpMeal[] = [
    "yes",
    "no",
    "undecided",
];
