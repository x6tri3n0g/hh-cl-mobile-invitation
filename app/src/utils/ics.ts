export const generateICS = ({
    title,
    description,
    location,
    startDate,
    endDate,
    alarms,
}: {
    title: string;
    description: string;
    location: string;
    startDate: Date;
    endDate: Date;
    alarms?: string[];
}) => {
    const formatDate = (date: Date) => {
        return date.toISOString().replace(/-|:|\.\d+/g, "");
    };

    const start = formatDate(startDate);
    const end = formatDate(endDate);

    const icsContent = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//HH-CL-MOBILE-INVITATION//KR",
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH",
        "BEGIN:VEVENT",
        `SUMMARY:${title}`,
        `UID:${start}-${title}@hh-cl-mobile-invitation`,
        `DTSTART:${start}`,
        `DTEND:${end}`,
        `DESCRIPTION:${description}`,
        `LOCATION:${location}`,
        "STATUS:CONFIRMED",
        ...(alarms
            ? alarms.flatMap((trigger) => [
                  "BEGIN:VALARM",
                  `TRIGGER:${trigger}`,
                  "DESCRIPTION:Reminder",
                  "ACTION:DISPLAY",
                  "END:VALARM",
              ])
            : []),
        "END:VEVENT",
        "END:VCALENDAR",
    ].join("\r\n");

    return icsContent;
};

export const downloadICS = (filename: string, content: string) => {
    const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
};
