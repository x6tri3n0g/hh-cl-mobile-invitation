"use client";

import { useState } from "react";

import AccountSection from "./src/components/AccountSection";
import BackgroundDecorations from "./src/components/BackgroundDecorations";
import BaseInfoSection from "./src/components/BaseInfoSection";
import BottomActionBar from "./src/components/BottomActionBar";
import EndingSection from "./src/components/EndingSection";
import FallingPetals from "./src/components/FallingPetals";
import FooterBrand from "./src/components/FooterBrand";
import GallerySliderSection from "./src/components/GallerySliderSection";
import GreetingSection from "./src/components/GreetingSection";
import HeroImage from "./src/components/hero-image/HeroImage";
import InformationSection from "./src/components/InformationSection";
import RemindSection from "./src/components/RemindSection";
import RevealOnScroll from "./src/components/RevealOnScroll";
import RsvpSection from "./src/components/RsvpSection";
import VenueDirectionSection from "./src/components/VenueDirectionSection";
import WeddingInfoSection from "./src/components/WeddingInfoSection";

export default function Home() {
    const [zoom, setZoom] = useState(1);

    return (
        <main className="relative min-h-[100dvh] overflow-hidden text-primary">
            <RevealOnScroll />
            <FallingPetals />
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
                    className="mx-auto flex min-h-dvh w-full max-w-[480px] flex-col gap-14 px-5 pb-16"
                    style={{
                        paddingTop:
                            "clamp(28rem, var(--hero-padding, 100svh), 100svh)",
                    }}
                >
                    <GreetingSection />
                    <BaseInfoSection />
                    <WeddingInfoSection />
                    <RemindSection />
                    <VenueDirectionSection />
                    <GallerySliderSection />
                    <AccountSection />
                    <InformationSection />
                    <RsvpSection />
                    <EndingSection />
                    <FooterBrand />
                </div>
            </div>
            <BottomActionBar onZoomChange={setZoom} />
        </main>
    );
}
