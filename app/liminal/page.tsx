"use client";

import Link from "next/link";

const FROST = "#a5b4fc";

export default function Liminal() {
  const features = [
    {
      title: "Threshold Detection",
      desc: "An envelope follower watches your signal and opens the engine when you stop playing. Fully adjustable sensitivity — from 'any pause' to 'only true silence'.",
    },
    {
      title: "Haunt Reverb",
      desc: "A reverb engine that exists only in the negative space. It shapes itself around what you just played and dissolves before the next note begins.",
    },
    {
      title: "Shimmer",
      desc: "Pitch-shifted shimmer conjured from the ghost of your signal. Crystalline, sustained, and inaudible while you play.",
    },
    {
      title: "Pitch Ghost",
      desc: "Captures your pitch and reintroduces it as a faint, drifting echo in the silence — like an impression of the note left in the room.",
    },
    {
      title: "Slew Control",
      desc: "Sets how fast the atmosphere fades in and out at the threshold boundary. Fast slew = abrupt conjuring. Slow slew = breath-like crossfade.",
    },
    {
      title: "Ramp A/B Morph",
      desc: "Store two complete parameter states (A and B) and morph between them. Trigger manually or let the threshold crossing drive the transition automatically.",
    },
    {
      title: "Tone",
      desc: "Spectral tilt applied to the conjured material. Negative = dark and woolen. Positive = bright and crystalline. Stacks with Shimmer for extreme textures.",
    },
    {
      title: "Mod Matrix",
      desc: "Route the envelope follower, LFO, or ramp position to any parameter — let the plugin's own detection drive depth, mix, or ghosting amount.",
    },
  ];

  const specs = [
    ["Formats", "AU · VST3 · Standalone (macOS)"],
    ["Plugin type", "Effect"],
    ["I/O", "Stereo in → Stereo out"],
    ["Latency", "Zero added latency"],
    ["Trigger", "Envelope-following threshold detection"],
    ["Engines", "HauntVerb · Shimmer · PitchGhost"],
    ["Modulation", "Mod matrix — envelope, LFO, ramp position as sources"],
    ["Ramp system", "A/B snapshot morph, threshold-triggered or manual"],
    ["Requires", "macOS 11+ · 64-bit DAW"],
    ["Version", "0.0.1"],
    ["Price", "$19"],
  ];

  return (
    <div style={{ fontFamily: "'Courier New', monospace", color: "#e0e0e0", background: "rgba(8,8,10,0.88)", minHeight: "100vh" }}>

      {/* Back nav */}
      <div style={{ padding: "1.25rem 2rem", borderBottom: "1px solid #1e1e1e" }}>
        <Link href="/" style={{ color: FROST, textDecoration: "none", fontSize: "0.75rem", letterSpacing: "0.15em" }}>
          ← AMENT AUDIO
        </Link>
      </div>

      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 2rem" }}>

        {/* Header */}
        <header style={{ padding: "4rem 0 2.5rem", textAlign: "center" }}>
          <h1 style={{ fontFamily: "var(--font-abril), Georgia, serif", fontSize: "clamp(2.5rem, 8vw, 5rem)", letterSpacing: "0.2em", color: "#fff", marginBottom: "0.75rem", lineHeight: 1 }}>
            LIMINAL
          </h1>
          <p style={{ fontSize: "1rem", letterSpacing: "0.15em", color: FROST, marginBottom: "0.5rem" }}>
            NEGATIVE-SPACE EFFECT
          </p>
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.1em", color: "#aaa" }}>
            by Ament Audio · v0.0.1 · AU · VST3 · Standalone
          </p>
        </header>

        {/* Intro */}
        <section style={{ borderTop: "1px solid #1e1e1e", borderBottom: "1px solid #1e1e1e", padding: "2.5rem 0", marginBottom: "3rem", lineHeight: 1.85, fontSize: "0.92rem", color: "#d4d4d4" }}>
          <p style={{ marginBottom: "1rem" }}>
            LIMINAL is a{" "}
            <span style={{ color: FROST }}>threshold-based atmosphere engine</span>{" "}
            that lives in the silence between your notes. While you play, it listens. The moment your signal drops below the threshold, it opens — conjuring reverb, shimmer, and pitch ghosts shaped around what you just played.
          </p>
          <p>
            The dry signal always passes through unaffected. The{" "}
            <span style={{ color: "#e0e0e0" }}>haunt</span>,{" "}
            <span style={{ color: "#e0e0e0" }}>shimmer</span>, and{" "}
            <span style={{ color: "#e0e0e0" }}>ghost</span>{" "}
            are inaudible while you play — they only exist in the{" "}
            <span style={{ color: FROST }}>negative space</span>.
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
                <div style={{ fontSize: "0.72rem", letterSpacing: "0.15em", color: FROST, marginBottom: "0.4rem" }}>
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
              ["After the chord fades", "Threshold 60% · Haunt high · Crystallize medium · Slew slow", "Set a slow slew so the reverb blooms in gently after each chord release — inaudible on top of your playing."],
              ["Pitch tail", "Possession high · Drift Rate low · Threshold 50%", "Captures your root note and reintroduces it as a barely-there tail. Works well on sustained melodic lines."],
              ["Crystal void", "Crystallize high · Tone +0.5 · Threshold 30% · Slew fast", "Triggers on any brief pause. Fast slew means the shimmer snaps in immediately — ghostly and unsettling."],
              ["Ramp A/B sweep", "Snapshot A: dry haunt · Snapshot B: full crystallize · Ramp: auto", "Set A as a subtle state and B as extreme. Let threshold crossings drive the morph — each phrase triggers a transformation."],
            ].map(([name, settings, desc]) => (
              <div key={name as string} style={{ background: "#0d0d0d", padding: "1.25rem 1.5rem" }}>
                <div style={{ fontSize: "0.72rem", letterSpacing: "0.12em", color: FROST, marginBottom: "0.3rem" }}>{name as string}</div>
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
          <div style={{ background: "#0d0d0d", border: "1px solid #1a1a1a", padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "#888" }}>BUY</div>
            <div style={{ fontSize: "2rem", color: "#fff", letterSpacing: "0.05em" }}>$19</div>
            <a
              href="https://chrisament.gumroad.com/l/cvbgso"
              style={{ display: "inline-block", background: FROST, color: "#000", padding: "0.75rem 1.5rem", fontSize: "0.75rem", letterSpacing: "0.15em", textDecoration: "none", fontWeight: 700, textAlign: "center", transition: "box-shadow 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 0 24px ${FROST}88`)}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              BUY NOW — $19
            </a>
          </div>
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
            { label: "GITHUB", href: "https://github.com/KelseyProgrammer/LIMINAL-" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#888", textDecoration: "none", letterSpacing: "0.15em" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = FROST)}
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
