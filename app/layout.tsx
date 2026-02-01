import type { Metadata } from "next";
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
    title: "OO ❤ OO 결혼합니다",
    description: "2026.05.00 (토) 오후 0시 00분, ○○웨딩홀",
    openGraph: {
        title: "OO ❤ OO 결혼합니다",
        description: "2026.05.00 (토) 오후 0시 00분, ○○웨딩홀",
        images: ["/images/og.png"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        images: ["/images/og.png"],
    },
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
