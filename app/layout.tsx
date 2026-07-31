import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YU.2008｜傳說對決・王者榮耀實況",
  description: "YU 的遊戲實況首頁。主玩傳說對決打野與王者榮耀鏡，追蹤排位、實戰與直播互動。",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "YU.2008｜穿越次元，掌控野區節奏",
    description: "次元機甲全動態登場｜傳說對決 × 王者榮耀實況",
    type: "website",
    images: [{ url: "/og-v2.png", width: 1200, height: 630, alt: "YU.2008 次元機甲動態遊戲實況" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-v2.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
