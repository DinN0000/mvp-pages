import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SCOPE | 엔터프라이즈를 위한 스테이블코인 오케스트레이션 플랫폼",
  description: "스테이블코인 발행부터 결제·정산·컴플라이언스까지 - Lambda256이 만든 온체인 금융 인프라",
  keywords: "stablecoin, blockchain, payments, settlement, enterprise, Lambda256, SCOPE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
