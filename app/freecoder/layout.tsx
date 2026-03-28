import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FREECODER — Spectral Morphing Workstation | Ament Audio",
  description:
    "Capture any sound and use it as a living spectral donor for freeze, granular, phrase loop, and MIDI instrument processing. $29.",
  openGraph: {
    title: "FREECODER — Spectral Morphing Workstation",
    description:
      "Capture any sound and use it as a living spectral donor for freeze, granular, phrase loop, and MIDI instrument processing. $29.",
    url: "https://amentaudio.com/freecoder",
    siteName: "Ament Audio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FREECODER — Spectral Morphing Workstation",
    description:
      "Capture any sound and use it as a living spectral donor for freeze, granular, phrase loop, and MIDI instrument processing. $29.",
  },
};

export default function FreecoderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
