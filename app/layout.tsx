import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ToastProvider } from "@/hooks/use-toast";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "현 ❤ 채린 결혼식에 초대합니다",
    description: "2026.05.30 (토) 오후 18:30, 강동 루벨",
    openGraph: {
        title: "현 ❤ 채린 결혼식에 초대합니다",
        description: "2026.05.30 (토) 오후 18:30, 강동 루벨",
        images: [
            "https://res.cloudinary.com/dpjkhhtmt/image/upload/v1769927440/KakaoTalk_Photo_2026-01-25-19-12-19_009_fd3nip.jpg",
        ],
        type: "website",
    },
};

export const viewport: Viewport = {
    viewportFit: "cover",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ToastProvider>{children}</ToastProvider>
            </body>
        </html>
    );
}
