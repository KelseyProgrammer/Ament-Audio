import type { Metadata } from "next";
import { Abril_Fatface } from "next/font/google";
import VideoBackground from "./components/VideoBackground";
import "./globals.css";

const abrilFatface = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-abril",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AMENT AUDIO",
  description: "Professional VST plugins crafted for modern producers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={abrilFatface.variable}>
      <body>
        <VideoBackground />
        <div className="overlay" aria-hidden="true" />
        <div className="content">{children}</div>
      </body>
    </html>
  );
}
