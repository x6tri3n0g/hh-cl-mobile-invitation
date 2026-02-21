"use client";

import Image from "next/image";

import useIntroImageMotion from "./useIntroImageMotion";

export default function IntroImage() {
    const {
        imageHeight,
        imageReveal,
        imageScale,
        shrinkProgress,
        viewportWidth,
    } = useIntroImageMotion();
    const isMobileFullWidth = viewportWidth <= 720;
    const containerWidth = isMobileFullWidth ? "94vw" : "60vw";
    const containerMargin = isMobileFullWidth
        ? "calc(50% - 47vw)"
        : "calc(50% - 30vw)";

    return (
        <div
            className="relative overflow-hidden rounded-3xl"
            style={{
                width: containerWidth,
                maxWidth: "100vw",
                height: imageHeight ? `${imageHeight}px` : "100svh",
                marginLeft: containerMargin,
                marginRight: containerMargin,
                opacity: imageReveal,
                transform: `scale(${imageScale})`,
                transformOrigin: "center top",
                borderRadius: `${Math.round(24 * shrinkProgress)}px`,
                willChange: "opacity, transform, height",
            }}
        >
            <Image
                src="https://res.cloudinary.com/dpjkhhtmt/image/upload/v1768749170/KakaoTalk_Photo_2026-01-19-00-12-33_apvr3m.jpg"
                alt="hero-image"
                priority
                fill
                className="object-cover rounded-3xl"
                sizes="100vw"
            />
        </div>
    );
}
