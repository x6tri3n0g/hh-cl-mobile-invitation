"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const galleryImages = [
  {
    src: "https://res.cloudinary.com/dpjkhhtmt/image/upload/1_h1flu2_0d0091.jpg",
    alt: "웨딩 사진 1",
  },
  {
    src: "https://res.cloudinary.com/dpjkhhtmt/image/upload/2_j338eu_0d0091.jpg",
    alt: "웨딩 사진 2",
  },
  {
    src: "https://res.cloudinary.com/dpjkhhtmt/image/upload/3_efhpm9_0d0091.jpg",
    alt: "웨딩 사진 3",
  },
];

const heroImages = [
  {
    src: "https://res.cloudinary.com/dpjkhhtmt/image/upload/1_h1flu2_0d0091.jpg",
    alt: "메인 웨딩 사진 1",
  },
  {
    src: "https://res.cloudinary.com/dpjkhhtmt/image/upload/2_j338eu_0d0091.jpg",
    alt: "메인 웨딩 사진 2",
  },
  {
    src: "https://res.cloudinary.com/dpjkhhtmt/image/upload/3_efhpm9_0d0091.jpg",
    alt: "메인 웨딩 사진 3",
  },
];

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHeroVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-dvh bg-[#F7F3EE] text-[#2E2A27]">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Fraunces:wght@300;400;600&family=Gowun+Batang:wght@400;700&display=swap");

        :root {
          --invitation-serif: "Fraunces", "Gowun Batang", serif;
          --invitation-body: "Gowun Batang", "Fraunces", serif;
        }

        .invitation-serif {
          font-family: var(--invitation-serif);
        }

        .invitation-body {
          font-family: var(--invitation-body);
        }

        @keyframes float-soft {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes fade-up {
          0% {
            opacity: 0;
            transform: translateY(14px);
          }
          100% {
            opacity: 1;
            transform: translateY(0px);
          }
        }

        .animate-float-soft {
          animation: float-soft 6s ease-in-out infinite;
        }

        .animate-fade-up {
          animation: fade-up 0.8s ease-out both;
        }

        @keyframes hero-fade {
          0% {
            opacity: 0;
            transform: scale(1.03);
          }
          12% {
            opacity: 1;
            transform: scale(1);
          }
          36% {
            opacity: 1;
          }
          48% {
            opacity: 0;
            transform: scale(0.98);
          }
          100% {
            opacity: 0;
          }
        }

        .hero-slide {
          animation: hero-fade 15s ease-in-out infinite;
        }

        .hero-slide:nth-child(2) {
          animation-delay: 5s;
        }

        .hero-slide:nth-child(3) {
          animation-delay: 10s;
        }
      `}</style>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-16 -top-10 h-56 w-56 rounded-full bg-[#F2D7C9]/70 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-16 h-64 w-64 rounded-full bg-[#E7E2C8]/70 blur-3xl animate-float-soft" />
        <div className="pointer-events-none absolute bottom-0 left-10 h-48 w-48 rounded-full bg-[#EBD8E0]/70 blur-3xl" />

        <section
          className={`fixed inset-0 z-20 overflow-hidden bg-[#1F1B19] transition-opacity duration-500 ${
            heroVisible ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <div className="absolute inset-0">
            {heroImages.map((image, index) => (
              <div
                key={`hero-${index}`}
                className="hero-slide absolute inset-0 opacity-0"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.65))]" />
              </div>
            ))}
          </div>
          <div className="relative z-10 flex h-full flex-col justify-end gap-4 px-6 pb-12 text-[#F7F3EE]">
            <span className="invitation-body text-xs uppercase tracking-[0.4em] text-[#F1E8DC]">
              Save The Date
            </span>
            <h2 className="invitation-serif text-4xl leading-tight">
              황현 &amp; 김채린의
              <br />
              첫 시작
            </h2>
            <p className="invitation-body text-sm text-[#EFE2D6]">
              아래로 스크롤하면 갤러리부터 이어집니다.
            </p>
          </div>
        </section>

        <div
          className={`mx-auto flex min-h-dvh w-full max-w-[720px] flex-col gap-14 px-5 pb-16 sm:px-8 ${
            heroVisible ? "pt-[100svh]" : "pt-10 sm:pt-14"
          }`}
        >
          <section className="animate-fade-up delay-300">
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {galleryImages.map((image, index) => (
                <div
                  key={`gallery-${index}`}
                  className="relative aspect-3/4 overflow-hidden rounded-2xl border border-[#E3D4C9] bg-[#EFE6DD]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.2),transparent)]" />
                </div>
              ))}
            </div>
          </section>

          <header className="relative flex flex-col items-center gap-6 text-center">
            <span className="invitation-body animate-fade-up rounded-full border border-[#BFA894] px-5 py-1 text-xs uppercase tracking-[0.35em] text-[#7E6A5E]">
              2025.05.30 · SAT · PM 18:00
            </span>
            <div className="animate-fade-up delay-100">
              <h1 className="invitation-serif text-[2.4rem] leading-tight text-[#2A241F] sm:text-[3.1rem]">
                황현 &amp; 김채린
              </h1>
              <p className="invitation-body mt-3 text-sm leading-relaxed text-[#5D5248] sm:text-base">
                저희의 결혼식을 함께 축복해 주세요.
              </p>
            </div>
            <div className="animate-fade-up delay-200 flex w-full max-w-md flex-col gap-3">
              <div className="rounded-2xl border border-[#E2D4C8] bg-white/70 px-5 py-4 text-sm text-[#514840] shadow-[0_18px_40px_rgba(83,72,64,0.08)]">
                <p className="invitation-body">장소 · 강동 루벨</p>
                <p className="invitation-body mt-1 text-xs text-[#7E6A5E]">
                  서울 강동구 어린이대공원로 304
                </p>
              </div>
              <button className="invitation-body rounded-full bg-[#2E2A27] px-5 py-3 text-sm text-[#F7F3EE] shadow-[0_12px_24px_rgba(46,42,39,0.22)] transition hover:-translate-y-0.5 hover:bg-[#1F1B19]">
                일정 저장하기
              </button>
            </div>
          </header>

          <section className="animate-fade-up delay-200 rounded-[28px] border border-[#E3D4C9] bg-white/75 px-6 py-7 shadow-[0_20px_40px_rgba(104,86,74,0.1)]">
            <h2 className="invitation-serif text-lg text-[#2A241F]">
              마음을 전하는 글
            </h2>
            <p className="invitation-body mt-4 text-sm leading-relaxed text-[#5D5248]">
              서로 다른 길을 걸어오다 같은 방향을 바라보게 되었습니다. 함께할
              내일을 약속하며, 소중한 분들과 그 시작을 나누고 싶습니다. 따뜻한
              미소와 축복으로 자리해 주세요.
            </p>
            <div className="mt-5 flex items-center justify-between text-xs text-[#7E6A5E]">
              <span>신랑 황현 · 신부 김채린</span>
              <span>with 사랑하는 가족 및 친구들 그리고 동료들</span>
            </div>
          </section>

          <section className="animate-fade-up delay-300">
            <div className="flex items-center justify-between">
              <h2 className="invitation-serif text-lg text-[#2A241F]">
                예식 안내
              </h2>
              <span className="invitation-body text-xs text-[#7E6A5E]">
                Timeline
              </span>
            </div>
            <div className="mt-5 grid gap-4">
              {[
                { time: "오후 5:30", label: "하객 맞이 시작" },
                { time: "오후 6:00", label: "예식 시작" },
                { time: "오후 6:30 ~", label: "피로연 및 포토타임" },
              ].map((item) => (
                <div
                  key={item.time}
                  className="flex items-center justify-between rounded-2xl border border-[#E3D4C9] bg-white/70 px-5 py-4"
                >
                  <span className="invitation-serif text-base text-[#2A241F]">
                    {item.time}
                  </span>
                  <span className="invitation-body text-sm text-[#5D5248]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="animate-fade-up delay-300 rounded-[28px] border border-[#E3D4C9] bg-white/80 px-6 py-7">
            <h2 className="invitation-serif text-lg text-[#2A241F]">
              오시는 길
            </h2>
            <div className="mt-4 space-y-3">
              <div className="relative h-48 overflow-hidden rounded-2xl border border-[#E3D4C9] bg-[#E9E0D7]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_65%)]" />
                <div className="absolute bottom-4 left-4 text-xs text-[#7E6A5E]">
                  Map Placeholder
                </div>
              </div>
              <div className="invitation-body text-sm text-[#5D5248]">
                서울 성동구 성수로 12길 24
                <br />더 로즈가든 3F 로즈홀
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-[#7E6A5E]">
                <span className="rounded-full bg-[#F0E7DD] px-3 py-1">
                  지하철 2호선 성수역 3번 출구
                </span>
                <span className="rounded-full bg-[#F0E7DD] px-3 py-1">
                  전용 주차 2시간 지원
                </span>
              </div>
            </div>
          </section>

          <section className="animate-fade-up delay-300">
            <h2 className="invitation-serif text-lg text-[#2A241F]">
              연락하기
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { title: "신랑 측", name: "황현 · 010-1234-5678" },
                { title: "신부 측", name: "김채린 · 010-9876-5432" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#E3D4C9] bg-white/70 px-5 py-4"
                >
                  <p className="invitation-body text-xs uppercase tracking-[0.2em] text-[#7E6A5E]">
                    {item.title}
                  </p>
                  <p className="invitation-body mt-2 text-sm text-[#5D5248]">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="animate-fade-up delay-300 text-center">
            <div className="rounded-[28px] border border-[#E3D4C9] bg-[#2E2A27] px-6 py-7 text-[#F7F3EE] shadow-[0_20px_40px_rgba(46,42,39,0.2)]">
              <h2 className="invitation-serif text-lg">함께 해주세요</h2>
              <p className="invitation-body mt-3 text-sm text-[#E6DCCF]">
                참석 여부를 미리 알려주시면 준비에 큰 도움이 됩니다.
              </p>
              <button className="invitation-body mt-5 w-full rounded-full bg-[#F7F3EE] px-5 py-3 text-sm text-[#2E2A27] transition hover:-translate-y-0.5">
                참석 여부 전달하기
              </button>
            </div>
            <p className="invitation-body mt-6 text-xs text-[#7E6A5E]">
              바쁜 일정 속에서도 찾아주셔서 감사합니다.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
