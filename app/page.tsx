"use client";

import { useState } from "react";

import AccountSection from "./src/components/AccountSection";
import BaseInfoSection from "./src/components/BaseInfoSection";
import BottomActionBar from "./src/components/BottomActionBar";
import EndingSection from "./src/components/EndingSection";
import FallingPetals from "./src/components/FallingPetals";
import FooterBrand from "./src/components/FooterBrand";
import GallerySliderSection from "./src/components/GallerySliderSection";
import GreetingSection from "./src/components/GreetingSection";
import GuestbookSection from "./src/components/GuestbookSection";
import HeroImage from "./src/components/hero-image/HeroImage";
import InformationSection from "./src/components/InformationSection";
import InvitationHeader from "./src/components/InvitationHeader";
import RemindSection from "./src/components/RemindSection";
import RevealOnScroll from "./src/components/RevealOnScroll";
import RsvpSection from "./src/components/RsvpSection";
import VenueDirectionSection from "./src/components/VenueDirectionSection";
import WeddingInfoSection from "./src/components/WeddingInfoSection";
import styles from "./page.module.css";

export default function Home() {
    const [zoom, setZoom] = useState(1);

    return (
        <main className={styles.page}>
            <div className={styles.textureLayer} />
            <FallingPetals />
            <RevealOnScroll />

            <div
                className={styles.pageContent}
                style={{ transform: `scale(${zoom})`, transformOrigin: "top center" }}
            >
                <div className="relative overflow-hidden pt-10">
                    <div className="pointer-events-none absolute -left-16 -top-10 h-56 w-56 rounded-full bg-[#F8C1D6]/70 blur-3xl" />
                    <div className="pointer-events-none absolute -right-20 top-16 h-64 w-64 rounded-full bg-[#FAD7C7]/70 blur-3xl animate-float-soft" />
                    <div className="pointer-events-none absolute bottom-0 left-10 h-48 w-48 rounded-full bg-[#F9B8CF]/70 blur-3xl" />

                    <HeroImage />

                    <div
                        className="mx-auto flex min-h-dvh w-full max-w-[480px] flex-col gap-14 px-5 pb-16"
                        style={{
                            paddingTop: "clamp(10rem, var(--hero-padding, 100svh), 100svh)",
                        }}
                    >
                        <InvitationHeader />
                        <GreetingSection />
                        <RemindSection />
                        <BaseInfoSection />
                        <WeddingInfoSection />
                        <VenueDirectionSection />
                        <GallerySliderSection />
                        <AccountSection />
                        <InformationSection />
                        <GuestbookSection />
                        <RsvpSection />
                        <EndingSection />
                        <FooterBrand />
                    </div>
                </div>
            </div>

            <BottomActionBar onZoomChange={setZoom} />
        </main>
    );
}
