"use client";

import { useRef, useEffect } from "react";

const CROSSFADE = 1.2; // seconds before end to start blending

const videoStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 0,
  transition: `opacity ${CROSSFADE}s ease`,
};

export default function VideoBackground() {
  const v1 = useRef<HTMLVideoElement>(null);
  const v2 = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const vid1 = v1.current!;
    const vid2 = v2.current!;

    function crossfade(current: HTMLVideoElement, next: HTMLVideoElement) {
      if (current.duration - current.currentTime <= CROSSFADE && next.style.opacity === "0") {
        next.currentTime = 0;
        next.play();
        next.style.opacity = "1";
        current.style.opacity = "0";
      }
    }

    const onUpdate1 = () => crossfade(vid1, vid2);
    const onUpdate2 = () => crossfade(vid2, vid1);

    vid1.addEventListener("timeupdate", onUpdate1);
    vid2.addEventListener("timeupdate", onUpdate2);

    return () => {
      vid1.removeEventListener("timeupdate", onUpdate1);
      vid2.removeEventListener("timeupdate", onUpdate2);
    };
  }, []);

  const sources = (
    <>
      <source src="/background.webm" type="video/webm" />
      <source src="/background.mp4" type="video/mp4" />
    </>
  );

  return (
    <>
      <video ref={v1} style={{ ...videoStyle, opacity: 1 }} autoPlay muted playsInline aria-hidden="true">
        {sources}
      </video>
      <video ref={v2} style={{ ...videoStyle, opacity: 0 }} muted playsInline aria-hidden="true">
        {sources}
      </video>
    </>
  );
}
