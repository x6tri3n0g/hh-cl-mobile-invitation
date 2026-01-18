"use client";

import Image from "next/image";

import useHeroScroll from "./useHeroScroll";
import styles from "./HeroImage.module.css";

export default function HeroImage() {
    const { fadeOutProgress } = useHeroScroll();

    const isHidden = fadeOutProgress >= 1;
    const opacity = 1 - fadeOutProgress;
    const scale = 1 - fadeOutProgress * 0.02;

    return (
        <section
            className={styles.heroSection}
            style={{
                opacity,
                transform: `scale(${scale})`,
                pointerEvents: isHidden ? "none" : "auto",
            }}
            aria-hidden={isHidden}
        >
            <div className={styles.heroSlides}>
                <div className={styles.heroSlide}>
                    <Image
                        src="https://res.cloudinary.com/dpjkhhtmt/image/upload/v1768744596/KakaoTalk_Photo_2026-01-18-22-55-40_002_e566zq.jpg"
                        alt="메인 웨딩 사진 1"
                        fill
                        className={styles.heroImage}
                        sizes="100vw"
                        priority
                    />
                    <div className={styles.heroOverlay} />
                </div>
            </div>

            <div className={styles.heroContent}>
                <span className={`invitation-body ${styles.heroEyebrow}`}>
                    <strong className="text-lg">2025.05.30 · SAT · PM 18:30</strong>
                </span>
                <h2 className={`invitation-serif ${styles.heroTitle}`}>
                    황현 &amp; 김채린의
                    <br />첫 시작
                </h2>
                <p className={`invitation-body ${styles.heroSubtitle}`}>
                    아래로 스크롤하면 갤러리부터 이어집니다.
                </p>
            </div>
        </section>
    );
}
