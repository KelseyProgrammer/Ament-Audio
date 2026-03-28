import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HALATION — Feedback Pitch Ecosystem | Ament Audio",
  description:
    "Split your signal into up to 8 pitch-shifted feedback paths — from subtle harmonic doubler to self-generating ambient drone. $19.",
  openGraph: {
    title: "HALATION — Feedback Pitch Ecosystem",
    description:
      "Split your signal into up to 8 pitch-shifted feedback paths — from subtle harmonic doubler to self-generating ambient drone. $19.",
    url: "https://amentaudio.com/halation",
    siteName: "Ament Audio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HALATION — Feedback Pitch Ecosystem",
    description:
      "Split your signal into up to 8 pitch-shifted feedback paths — from subtle harmonic doubler to self-generating ambient drone. $19.",
  },
};

export default function HalationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
