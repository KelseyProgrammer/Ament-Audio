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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/background.gif"
          alt=""
          className="bg-gif"
          aria-hidden="true"
        />
        <div className="overlay" aria-hidden="true" />
        <div className="content">{children}</div>
      </body>
    </html>
  );
}
