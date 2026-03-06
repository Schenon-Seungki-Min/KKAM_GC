import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Doner Portfolio — 민승기 (Coree)",
  description:
    "디지털 헬스케어 PM 민승기의 AI 비즈니스 에이전트 Doner와 대화하세요",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
