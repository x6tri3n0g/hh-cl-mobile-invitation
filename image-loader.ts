"use client";

export default function cloudinaryLoader({
    src,
    width,
    quality,
}: {
    src: string;
    width: number;
    quality?: number;
}) {
    const params = [
        "f_auto",
        "c_limit",
        `w_${width}`,
        `q_${quality || "auto"}`,
    ];

    // If the src is already a full Cloudinary URL, we can inject params
    // Standard Cloudinary URL structure: https://res.cloudinary.com/<cloud_name>/image/upload/<transformations>/<version>/<public_id>
    if (src.startsWith("https://res.cloudinary.com/")) {
        const urlParts = src.split("/upload/");
        if (urlParts.length === 2) {
            return `${urlParts[0]}/upload/${params.join(",")}/${urlParts[1]}`;
        }
    }

    // If src is a relative path or public ID (fallback)
    return src;
}
