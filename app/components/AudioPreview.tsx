"use client";

import { useRef, useState, useEffect } from "react";

// Only one preview plays at a time across all cards.
let activeAudio: HTMLAudioElement | null = null;

type Variant = "dry" | "wet";

export default function AudioPreview({
  name,
  dry,
  wet,
}: {
  name: string;
  dry: string;
  wet: string;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState<Variant | null>(null);
  const [missing, setMissing] = useState(false);

  // Probe the dry clip on mount so the control hides itself when the
  // audio files haven't been deployed yet.
  useEffect(() => {
    const probe = new Audio();
    probe.preload = "metadata";
    probe.onerror = () => setMissing(true);
    probe.src = dry;
    return () => {
      probe.onerror = null;
      probe.src = "";
    };
  }, [dry]);

  if (missing) return null;

  function toggle(variant: Variant) {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing === variant) {
      audio.pause();
      audio.currentTime = 0;
      setPlaying(null);
      return;
    }

    if (activeAudio && activeAudio !== audio) {
      activeAudio.pause();
      activeAudio.currentTime = 0;
    }
    activeAudio = audio;

    // Keep position when A/B-ing mid-clip so dry vs wet compares directly
    const t = playing !== null ? audio.currentTime : 0;
    audio.src = variant === "dry" ? dry : wet;
    audio.currentTime = t;
    audio.play().catch(() => setMissing(true));
    setPlaying(variant);
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        marginBottom: "1.5rem",
      }}
    >
      <span
        style={{
          fontSize: "var(--text-xs)",
          letterSpacing: "var(--track-lg)",
          color: "var(--ink-50)",
        }}
      >
        HEAR IT
      </span>
      <button
        type="button"
        className="audio-ab-btn"
        data-active={playing === "dry"}
        aria-label={`Play ${name} dry signal`}
        onClick={() => toggle("dry")}
      >
        {playing === "dry" ? "■" : "▶"} DRY
      </button>
      <button
        type="button"
        className="audio-ab-btn"
        data-active={playing === "wet"}
        aria-label={`Play ${name} wet signal`}
        onClick={() => toggle("wet")}
      >
        {playing === "wet" ? "■" : "▶"} WET
      </button>
      <audio ref={audioRef} preload="none" onEnded={() => setPlaying(null)} />
    </div>
  );
}
