import type { Metadata } from "next";
import { Abril_Fatface } from "next/font/google";
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
        <video
          className="bg-gif"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/background.webm" type="video/webm" />
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="overlay" aria-hidden="true" />
        <div className="content">{children}</div>
      </body>
    </html>
  );
}
