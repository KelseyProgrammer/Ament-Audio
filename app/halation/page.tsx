"use client";

import Link from "next/link";

const AMBER = "#e8a84a";
const AMBER_DIM = "rgba(232,168,74,0.35)";

export default function Halation() {
  const features = [
    {
      title: "Feedback Pitch Paths",
      desc: "Up to 8 parallel delay paths, each pitch-shifted by a configurable musical interval and fed back into itself at a controlled rate.",
    },
    {
      title: "Bloom Control",
      desc: "The central feedback knob. Zero feedback = lush harmonic doubler. Above 0.7 the plugin becomes self-sustaining — generating sound even after your input stops.",
    },
    {
      title: "Interval Presets",
      desc: "Six harmonic configurations: Unison, Octaves, Fifths, Harmonic Series, Chromatic cluster, and Custom. Switch mid-performance.",
    },
    {
      title: "Stagger",
      desc: "Spreads path delay times from 20ms (tight chorus) to 180ms (arpeggiated cascade). High stagger turns a single hit into a bloom of harmonics.",
    },
    {
      title: "Spectral Tilt",
      desc: "Per-cycle brightness shift applied in the feedback loop. Positive = shimmer. Negative = warmth and tape-like darkness.",
    },
    {
      title: "Chaos",
      desc: "Slow independent pitch drift per path (±15 cents). Low values add organic life. High values let paths wander apart into beating clusters.",
    },
    {
      title: "Per-Path Matrix",
      desc: "Individual level, pan, and interval control for each path. Sculpt the harmonic balance — attenuate lower octaves to keep the mix clean.",
    },
    {
      title: "Factory Presets",
      desc: "Six starting points: Bloom Clean, Wall of Fifths, Shimmer Cloud, Dark Drone, Cluster Frost, and Init. Each captures a distinct character.",
    },
  ];

  const specs = [
    ["Formats", "VST3 · AU · CLAP · Standalone"],
    ["Plugin type", "Effect"],
    ["I/O", "Stereo in → Stereo out"],
    ["Paths", "2 – 8 parallel feedback paths"],
    ["Latency", "~2048 samples (~46ms @ 44.1kHz), reported to host"],
    ["CPU", "~15% on M1 Mac @ 44.1kHz / 512 samples / 8 paths"],
    ["Pitch shifter", "Phase vocoder — 2048-pt FFT, 75% overlap, Hann window"],
    ["Delay range", "20ms – 180ms per path (set by Stagger)"],
    ["Chaos LFO", "0.1 – 0.5 Hz sine, ±15 cents per path"],
    ["Requires", "macOS 11+ · Windows 10/11 · Ubuntu 20.04+ · 64-bit DAW"],
    ["Price", "$19"],
  ];

  const presets = [
    ["Init", "Unison", "Flat default state. All paths unison, zero feedback."],
    ["Bloom — Clean", "Fifths", "4 paths, zero feedback, wide stagger. Pure harmonic doubler."],
    ["Wall of Fifths", "Fifths", "Medium feedback, slightly dark tilt. Dense shoegaze shimmer."],
    ["Shimmer Cloud", "Harmonic Series", "8 paths, medium-high feedback, high chaos. Evolving overtone cloud."],
    ["Dark Drone", "Octaves", "High feedback, heavy damping, negative tilt. Self-sustaining dark drone."],
    ["Cluster Frost", "Chromatic", "6 paths, low feedback, high chaos. Unpredictable microtonal movement."],
  ];

  const btnStyle: React.CSSProperties = {
    display: "inline-block",
    border: `1px solid ${AMBER_DIM}`,
    color: AMBER,
    padding: "0.65rem 1rem",
    fontSize: "0.72rem",
    letterSpacing: "0.15em",
    textDecoration: "none",
    textAlign: "center",
    transition: "border-color 0.2s",
    cursor: "pointer",
  };

  return (
    <div style={{ fontFamily: "'Courier New', monospace", color: "#e0e0e0", background: "rgba(8,8,10,0.88)", minHeight: "100vh" }}>

      {/* Back nav */}
      <div style={{ padding: "1.25rem 2rem", borderBottom: "1px solid #1e1e1e" }}>
        <Link href="/" style={{ color: AMBER, textDecoration: "none", fontSize: "0.75rem", letterSpacing: "0.15em" }}>
          ← AMENT AUDIO
        </Link>
      </div>

      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 2rem" }}>

        {/* Header */}
        <header style={{ padding: "4rem 0 2.5rem", textAlign: "center" }}>
          <h1 style={{ fontFamily: "var(--font-abril), Georgia, serif", fontSize: "clamp(2.5rem, 8vw, 5rem)", letterSpacing: "0.2em", color: "#fff", marginBottom: "0.75rem", lineHeight: 1 }}>
            HALATION
          </h1>
          <p style={{ fontSize: "1rem", letterSpacing: "0.15em", color: AMBER, marginBottom: "0.5rem" }}>
            FEEDBACK PITCH ECOSYSTEM
          </p>
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.1em", color: "#aaa" }}>
            by Ament Audio · VST3 · AU · CLAP · Standalone
          </p>
        </header>

        {/* Intro */}
        <section style={{ borderTop: "1px solid #1e1e1e", borderBottom: "1px solid #1e1e1e", padding: "2.5rem 0", marginBottom: "3rem", lineHeight: 1.85, fontSize: "0.92rem", color: "#d4d4d4" }}>
          <p style={{ marginBottom: "1rem" }}>
            HALATION splits your audio into up to 8 parallel delay paths, each pitch-shifted by a configurable interval and fed back into itself at a controlled rate. At zero feedback it&apos;s a lush{" "}
            <span style={{ color: AMBER }}>harmonic doubler</span>. Turn the Bloom knob up and it becomes a{" "}
            <span style={{ color: AMBER }}>self-generating ambient texture</span> — the plugin becomes an instrument.
          </p>
          <p>
            Named after the photographic bloom effect. Designed for{" "}
            <span style={{ color: "#e0e0e0" }}>shoegaze</span>,{" "}
            <span style={{ color: "#e0e0e0" }}>ambient</span>,{" "}
            <span style={{ color: "#e0e0e0" }}>drone</span>, and{" "}
            <span style={{ color: "#e0e0e0" }}>experimental</span> music.
          </p>
        </section>

        {/* Features */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "0.65rem", letterSpacing: "0.3em", color: "#888", marginBottom: "1.5rem" }}>
            WHAT IT DOES
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1px", background: "#1a1a1a", border: "1px solid #1a1a1a" }}>
            {features.map((f) => (
              <div key={f.title} style={{ background: "#0d0d0d", padding: "1.25rem 1.5rem" }}>
                <div style={{ fontSize: "0.72rem", letterSpacing: "0.15em", color: AMBER, marginBottom: "0.4rem" }}>
                  {f.title.toUpperCase()}
                </div>
                <div style={{ fontSize: "0.82rem", color: "#ccc", lineHeight: 1.7 }}>
                  {f.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Starting Points */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "0.65rem", letterSpacing: "0.3em", color: "#888", marginBottom: "1.5rem" }}>
            STARTING POINTS
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#1a1a1a", border: "1px solid #1a1a1a" }}>
            {[
              ["Shimmer reverb send", "Fifths · 4 paths · Bloom 0.5 · Stagger 0.6 · Tilt +0.1 · Chaos 0.1 · Mix 1.0", "Put HALATION on an aux, blend to taste."],
              ["Self-generating drone", "Fifths · 6–8 paths · Bloom 0.85 · Stagger 0.4 · Tilt −0.15 · Damping 0.5 · Chaos 0.2", "Hold a note, then mute input — it lives on."],
              ["Harmonic doubler", "Octaves or Fifths · 4 paths · Bloom 0 · Stagger 0.3 · Mix 0.4–0.6", "Subtle thickening, zero feedback."],
              ["Cluster frost", "Chromatic · 6 paths · Bloom 0.3 · Stagger 0.7 · Chaos 0.5 · Mix 0.5", "Chromatic shimmer, unpredictable movement."],
            ].map(([name, settings, desc]) => (
              <div key={name as string} style={{ background: "#0d0d0d", padding: "1.25rem 1.5rem" }}>
                <div style={{ fontSize: "0.72rem", letterSpacing: "0.12em", color: AMBER, marginBottom: "0.3rem" }}>{name as string}</div>
                <div style={{ fontSize: "0.72rem", color: "#888", marginBottom: "0.4rem", letterSpacing: "0.05em" }}>{settings as string}</div>
                <div style={{ fontSize: "0.8rem", color: "#ccc" }}>{desc as string}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Get it */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "0.65rem", letterSpacing: "0.3em", color: "#888", marginBottom: "1.5rem" }}>
            GET IT
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1px", background: "#1a1a1a", border: "1px solid #1a1a1a", marginBottom: "1.5rem" }}>
            {/* Buy */}
            <div style={{ background: "#0d0d0d", padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "#888" }}>BUY</div>
              <div style={{ fontSize: "2rem", color: "#fff", letterSpacing: "0.05em" }}>$19</div>
              <a
                href="#"
                style={{ display: "inline-block", background: AMBER, color: "#000", padding: "0.75rem 1.5rem", fontSize: "0.75rem", letterSpacing: "0.15em", textDecoration: "none", fontWeight: 700, textAlign: "center", transition: "box-shadow 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 0 24px ${AMBER}88`)}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                BUY NOW — $19
              </a>
            </div>

            {/* Trial */}
            <div style={{ background: "#0d0d0d", padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "#888" }}>FREE TRIAL — 7 DAYS</div>
              <div style={{ fontSize: "0.75rem", color: "#aaa", lineHeight: 1.6 }}>full-featured · honor system / buy within 7 days of use</div>
              <a
                href="https://github.com/KelseyProgrammer/HALATION/releases/latest/download/HALATION-macOS.pkg"
                style={btnStyle}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = AMBER)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = AMBER_DIM)}
              >
                DOWNLOAD — macOS
              </a>
              <a
                href="https://github.com/KelseyProgrammer/HALATION/releases/latest/download/HALATION-Windows.exe"
                style={btnStyle}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = AMBER)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = AMBER_DIM)}
              >
                DOWNLOAD — WINDOWS
              </a>
            </div>
          </div>

          {/* Install */}
          <div style={{ background: "#0d0d0d", border: "1px solid #1e1e1e", padding: "1.5rem", fontSize: "0.75rem", color: "#aaa", lineHeight: 2, marginBottom: "1rem" }}>
            <div style={{ color: "#888", letterSpacing: "0.15em", marginBottom: "0.75rem", fontSize: "0.65rem" }}>INSTALLATION</div>
            <div>macOS — Run HALATION-macOS.pkg installer. VST3, AU & CLAP copied automatically.</div>
            <div>Windows — Run HALATION-Windows.exe installer. VST3 installs to C:\Program Files\Common Files\VST3\</div>
            <div>Rescan plugins in your DAW after installation.</div>
          </div>

          <div style={{ background: "#001a08", border: "1px solid #003a14", padding: "1rem 1.25rem", fontSize: "0.75rem", color: AMBER, lineHeight: 1.8, marginBottom: "1rem" }}>
            ✓ macOS: signed &amp; notarized — no security warnings. Universal binary (Apple Silicon + Intel).
          </div>
          <div style={{ background: "#1a1200", border: "1px solid #3a2a00", padding: "1rem 1.25rem", fontSize: "0.75rem", color: "#aa8800", lineHeight: 1.8 }}>
            ⚠ Windows: unsigned trial — click &quot;More info → Run anyway&quot; if prompted by SmartScreen.
          </div>
        </section>

        {/* Presets */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "0.65rem", letterSpacing: "0.3em", color: "#888", marginBottom: "1.5rem" }}>
            FACTORY PRESETS
          </h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                {["NAME", "INTERVALS", "DESCRIPTION"].map((h) => (
                  <th key={h} style={{ textAlign: "left", padding: "0.6rem 0.75rem", fontSize: "0.65rem", letterSpacing: "0.12em", color: "#888", borderBottom: "1px solid #2a2a2a" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {presets.map(([name, intervals, desc]) => (
                <tr key={name} style={{ borderBottom: "1px solid #1a1a1a" }}>
                  <td style={{ padding: "0.65rem 0.75rem", color: AMBER, fontSize: "0.78rem", whiteSpace: "nowrap", verticalAlign: "top" }}>{name}</td>
                  <td style={{ padding: "0.65rem 0.75rem", color: "#888", fontSize: "0.75rem", whiteSpace: "nowrap", verticalAlign: "top" }}>{intervals}</td>
                  <td style={{ padding: "0.65rem 0.75rem", color: "#ccc", fontSize: "0.78rem", verticalAlign: "top" }}>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Specs */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "0.65rem", letterSpacing: "0.3em", color: "#888", marginBottom: "1.5rem" }}>
            SPECS
          </h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              {specs.map(([label, value]) => (
                <tr key={label} style={{ borderBottom: "1px solid #1a1a1a" }}>
                  <td style={{ padding: "0.75rem 1rem 0.75rem 0", fontSize: "0.72rem", letterSpacing: "0.1em", color: "#888", whiteSpace: "nowrap", width: "160px" }}>
                    {label.toUpperCase()}
                  </td>
                  <td style={{ padding: "0.75rem 0", fontSize: "0.78rem", color: "#d4d4d4" }}>
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #1e1e1e", padding: "2rem", textAlign: "center", fontSize: "0.7rem", letterSpacing: "0.1em", color: "#888" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginBottom: "1rem" }}>
          {[
            { label: "YOUTUBE", href: "https://www.youtube.com/@AmentAudio" },
            { label: "INSTAGRAM", href: "https://www.instagram.com/amentaudio/" },
            { label: "GITHUB", href: "https://github.com/KelseyProgrammer/HALATION" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#888", textDecoration: "none", letterSpacing: "0.15em" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = AMBER)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
            >
              {s.label}
            </a>
          ))}
        </div>
        <div>
          <Link href="/" style={{ color: "#888", textDecoration: "none" }}>← AMENT AUDIO</Link>
          {" · "}© {new Date().getFullYear()} AMENT AUDIO
        </div>
      </footer>
    </div>
  );
}
