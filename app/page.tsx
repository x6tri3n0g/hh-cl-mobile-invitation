"use client";

import { Fragment, useMemo, useState } from "react";

import BackgroundDecorations from "./src/components/BackgroundDecorations";
import { BaseInfoSection } from "./src/components/sections/base-info";
import BottomActionBar from "./src/components/bottom-action-bar";
import { EndingSection } from "./src/components/sections/ending";
import FooterBrand from "./src/components/sections/FooterBrand";
import { GallerySliderSection } from "./src/components/sections/gallery-slider";
import HeroImage from "./src/components/sections/hero-image/HeroImage";
import { RemindSection } from "./src/components/sections/remind";
import { RsvpSection } from "./src/components/sections/rsvp";
import { VenueDirectionSection } from "./src/components/sections/venue-direction";
import { WeddingInfoSection } from "./src/components/sections/wedding-info";
import ScrollReveal from "./src/components/ScrollReveal";
import { AccountSection } from "./src/components/sections/account";
import { InformationSection } from "./src/components/sections/information";

export default function Home() {
    const [zoom, setZoom] = useState(1);

    const sections = useMemo(
        () => [
            { key: "base-info", element: <BaseInfoSection /> },
            { key: "wedding-info", element: <WeddingInfoSection /> },
            { key: "remind", element: <RemindSection />, reveal: true },
            {
                key: "venue-direction",
                element: <VenueDirectionSection />,
                reveal: true,
            },
            {
                key: "gallery-slider",
                element: <GallerySliderSection />,
                reveal: true,
            },
            { key: "account", element: <AccountSection /> },
            { key: "information", element: <InformationSection /> },
            { key: "rsvp", element: <RsvpSection />, reveal: true },
            { key: "ending", element: <EndingSection />, reveal: true },
            { key: "footer", element: <FooterBrand /> },
        ],
        []
    );

    return (
        <main className="relative min-h-[100dvh] overflow-hidden text-primary bg-purple-50">
            <div
                className="relative overflow-hidden pt-10"
                style={{
                    transform: `scale(${zoom})`,
                    transformOrigin: "top center",
                }}
            >
                <BackgroundDecorations />

                <HeroImage />

                <div
                    className="mx-auto flex min-h-dvh w-full max-w-[480px] flex-col gap-14 px-5 pb-16 bg-white"
                    style={{
                        paddingTop: "var(--hero-padding, 100svh)",
                    }}
                >
                    {sections.map((section) => {
                        const content = section.reveal ? (
                            <ScrollReveal blur>{section.element}</ScrollReveal>
                        ) : (
                            section.element
                        );

                        return <Fragment key={section.key}>{content}</Fragment>;
                    })}
                </div>
            </div>
            <BottomActionBar onZoomChange={setZoom} />
        </main>
    );
}
