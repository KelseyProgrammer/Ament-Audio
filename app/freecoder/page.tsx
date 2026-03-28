"use client";

import Script from "next/script";
import Link from "next/link";

export default function FreeCoder() {
  const features = [
    {
      title: "Spectral Freeze",
      desc: "FFT-based cross-synthesis blends your live signal with the donor's spectral fingerprint in real time.",
    },
    {
      title: "Granular Texture",
      desc: "Scatter-randomised grain engine scrubs the donor buffer, adding cloud-like texture independent of freeze.",
    },
    {
      title: "Formant Transfer",
      desc: "Spectral envelope extraction maps the donor's vowel character onto your input signal.",
    },
    {
      title: "Phrase Loop",
      desc: "Loop and pitch-shift the recorded phrase with fractional-interpolated resampling. Reverse at will.",
    },
    {
      title: "MIDI Instrument Mode",
      desc: "Play the frozen donor chromatically — 8-voice polyphony, ADSR envelope, root note mapping.",
    },
    {
      title: "Preset System",
      desc: "12 factory presets covering all modes. Save/load your own with donor buffer included. 3 hot-swap donor slots.",
    },
    {
      title: "WAV Import / Export",
      desc: "Bring in any audio file as a donor, or export your captured donor for use in other tools.",
    },
    {
      title: "Live Spectrum + Tuner",
      desc: "Dual-layer FFT visualizer shows the morph happening in real time. Built-in pitch tuner with cents display.",
    },
    {
      title: "Waveform Overview",
      desc: "Donor buffer waveform display with live phrase playhead — see exactly where in the recording you are.",
    },
  ];

  const specs = [
    ["Formats", "VST3 · AU · CLAP (macOS) · VST3 (Windows/Linux)"],
    ["Plugin type", "Effect + MIDI Instrument"],
    ["I/O", "Stereo in → Stereo out"],
    ["MIDI input", "Yes (instrument mode, root-note mapped)"],
    ["Latency", "~46 ms (2048-sample FFT @ 44.1 kHz), reported to host"],
    ["FFT engine", "2048-pt, 4x overlap-add, Hann window"],
    ["Donor length", "Up to 5 seconds"],
    ["Polyphony", "8 voices (MIDI mode)"],
    ["Requires", "macOS 10.13+ · Windows 10+ · 64-bit DAW"],
    ["Price", "$29 (7-day honor system trial available)"],
  ];

  return (
    <>
      <Script src="https://gumroad.com/js/gumroad.js" strategy="lazyOnload" />

      <div style={{ fontFamily: "'Courier New', monospace", color: "#e0e0e0", background: "rgba(8,8,10,0.88)", minHeight: "100vh" }}>
        {/* Back nav */}
        <div
          style={{
            padding: "1.25rem 2rem",
            borderBottom: "1px solid #1e1e1e",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#39ff6a",
              textDecoration: "none",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
            }}
          >
            ← AMENT AUDIO
          </Link>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 2rem" }}>
          {/* Header */}
          <header style={{ padding: "4rem 0 2.5rem", textAlign: "center" }}>
            <h1
              style={{
                fontFamily: "var(--font-abril), Georgia, serif",
                fontSize: "clamp(2.5rem, 8vw, 5rem)",
                letterSpacing: "0.2em",
                color: "#fff",
                marginBottom: "0.75rem",
                lineHeight: 1,
              }}
            >
              FREECODER
            </h1>
            <p
              style={{
                fontSize: "1rem",
                letterSpacing: "0.15em",
                color: "#39ff6a",
                marginBottom: "0.5rem",
              }}
            >
              SPECTRAL MORPHING WORKSTATION
            </p>
            <p
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                color: "#aaa",
              }}
            >
              by Ament Audio · v0.2.20 · VST3 · AU · CLAP
            </p>
          </header>

          {/* Intro */}
          <section
            style={{
              borderTop: "1px solid #1e1e1e",
              borderBottom: "1px solid #2a2a2a",
              padding: "2.5rem 0",
              marginBottom: "3rem",
              lineHeight: 1.85,
              fontSize: "0.92rem",
              color: "#d4d4d4",
            }}
          >
            <p style={{ marginBottom: "1rem" }}>
              Record any sound — a chord, a breath, a glitch, a riff. That
              recording becomes a{" "}
              <span style={{ color: "#39ff6a" }}>spectral donor</span>: a living
              audio fingerprint. Your live input is then continuously
              cross-pollinated with it through spectral morphing, formant
              transfer, granular texture, and phase vocoder processing.
            </p>
            <p>
              The result is something between a{" "}
              <span style={{ color: "#e0e0e0" }}>vocoder</span>, a{" "}
              <span style={{ color: "#e0e0e0" }}>granular reverb</span>, and an{" "}
              <span style={{ color: "#e0e0e0" }}>audio prism</span> — uniquely
              shaped by whatever you chose to record. Play it as an effect or a{" "}
              <span style={{ color: "#e0e0e0" }}>polyphonic MIDI instrument</span>.
            </p>
          </section>

          {/* Features */}
          <section style={{ marginBottom: "4rem" }}>
            <h2
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                color: "#888",
                marginBottom: "1.5rem",
              }}
            >
              WHAT IT DOES
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "1px",
                background: "#1a1a1a",
                border: "1px solid #1a1a1a",
              }}
            >
              {features.map((f) => (
                <div
                  key={f.title}
                  style={{
                    background: "#0d0d0d",
                    padding: "1.25rem 1.5rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.72rem",
                      letterSpacing: "0.15em",
                      color: "#39ff6a",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {f.title.toUpperCase()}
                  </div>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      color: "#ccc",
                      lineHeight: 1.7,
                    }}
                  >
                    {f.desc}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Video */}
          <section style={{ marginBottom: "4rem" }}>
            <h2
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                color: "#888",
                marginBottom: "1.5rem",
              }}
            >
              WATCH
            </h2>
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                background: "#0d0d0d",
                border: "1px solid #1e1e1e",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/YWIRXhS-TbM"
                title="FREECODER — Spectral Morphing Workstation Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
              />
            </div>
          </section>

          {/* Get it */}
          <section style={{ marginBottom: "4rem" }}>
            <h2
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                color: "#888",
                marginBottom: "1.5rem",
              }}
            >
              GET IT
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1px",
                background: "#1a1a1a",
                border: "1px solid #1a1a1a",
                marginBottom: "1.5rem",
              }}
            >
              {/* Buy */}
              <div
                style={{
                  background: "#0d0d0d",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    color: "#888",
                  }}
                >
                  BUY
                </div>
                <div
                  style={{
                    fontSize: "2rem",
                    color: "#fff",
                    letterSpacing: "0.05em",
                  }}
                >
                  $29
                </div>
                <a
                  href="https://chrisament.gumroad.com/l/klogc"
                  data-gumroad-overlay-checkout="true"
                  style={{
                    display: "inline-block",
                    background: "#39ff6a",
                    color: "#000",
                    padding: "0.75rem 1.5rem",
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                    textDecoration: "none",
                    fontWeight: 700,
                    textAlign: "center",
                    transition: "box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 0 24px #39ff6a88")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow = "none")
                  }
                >
                  BUY NOW — $29
                </a>
              </div>

              {/* Trial */}
              <div
                style={{
                  background: "#0d0d0d",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    color: "#888",
                  }}
                >
                  FREE TRIAL — 7 DAYS
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#aaa",
                    lineHeight: 1.6,
                  }}
                >
                  full-featured · honor system / buy within 7 days of use
                </div>
                {[
                  { label: "DOWNLOAD — macOS", href: "/FREECODER-0.2.23-macOS-FreeTrial.zip" },
                  { label: "DOWNLOAD — Windows (installer)", href: "/FREECODER-0.2.23-Windows-FreeTrial.exe.zip" },
                  { label: "DOWNLOAD — Windows VST3", href: "/FREECODER-0.2.23-Windows-FreeTrial-VST3.zip" },
                  { label: "DOWNLOAD — Windows CLAP", href: "/FREECODER-0.2.23-Windows-FreeTrial-CLAP.zip" },
                  { label: "DOWNLOAD — Linux", href: "/FREECODER-0.2.23-Linux-FreeTrial.zip" },
                ].map((d) => (
                  <a
                    key={d.href}
                    href={d.href}
                    download
                    style={downloadBtnStyle}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.borderColor = "#39ff6a")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(57,255,106,0.35)")
                    }
                  >
                    {d.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Install instructions */}
            <div
              style={{
                background: "#0d0d0d",
                border: "1px solid #1e1e1e",
                padding: "1.5rem",
                fontSize: "0.75rem",
                color: "#aaa",
                lineHeight: 2,
                marginBottom: "1rem",
              }}
            >
              <div style={{ color: "#888", letterSpacing: "0.15em", marginBottom: "0.75rem", fontSize: "0.65rem" }}>
                INSTALLATION
              </div>
              <div>macOS — VST3 → copy FREECODER.vst3 to ~/Library/Audio/Plug-Ins/VST3/</div>
              <div>macOS — AU → copy FREECODER.component to ~/Library/Audio/Plug-Ins/Components/</div>
              <div>macOS — CLAP → copy FREECODER.clap to ~/Library/Audio/Plug-Ins/CLAP/</div>
              <div>Windows → run FREECODER-Windows.exe installer, then restart your DAW.</div>
            </div>

            {/* Notarization notice */}
            <div
              style={{
                background: "#001a08",
                border: "1px solid #003a14",
                padding: "1rem 1.25rem",
                fontSize: "0.75rem",
                color: "#39ff6a",
                lineHeight: 1.8,
                marginBottom: "1rem",
              }}
            >
              ✓ macOS: signed &amp; notarized — no security warnings.
            </div>
            <div
              style={{
                background: "#1a1200",
                border: "1px solid #3a2a00",
                padding: "1rem 1.25rem",
                fontSize: "0.75rem",
                color: "#aa8800",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              ⚠ Windows: unsigned trial — click &quot;More info → Run anyway&quot; if prompted by SmartScreen.
            </div>

            <Link
              href="/freecoder/manual"
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                color: "#39ff6a",
                textDecoration: "none",
                borderBottom: "1px solid rgba(57,255,106,0.3)",
                paddingBottom: "2px",
              }}
            >
              USER MANUAL →
            </Link>
          </section>

          {/* Specs */}
          <section style={{ marginBottom: "4rem" }}>
            <h2
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                color: "#888",
                marginBottom: "1.5rem",
              }}
            >
              SPECS
            </h2>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                {specs.map(([label, value]) => (
                  <tr
                    key={label}
                    style={{ borderBottom: "1px solid #1a1a1a" }}
                  >
                    <td
                      style={{
                        padding: "0.75rem 1rem 0.75rem 0",
                        fontSize: "0.72rem",
                        letterSpacing: "0.1em",
                        color: "#888",
                        whiteSpace: "nowrap",
                        width: "160px",
                      }}
                    >
                      {label.toUpperCase()}
                    </td>
                    <td
                      style={{
                        padding: "0.75rem 0",
                        fontSize: "0.78rem",
                        color: "#d4d4d4",
                      }}
                    >
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>

        {/* Footer */}
        <footer
          style={{
            borderTop: "1px solid #1e1e1e",
            padding: "2rem",
            textAlign: "center",
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            color: "#888",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginBottom: "1rem" }}>
            {[
              { label: "YOUTUBE", href: "https://www.youtube.com/@AmentAudio" },
              { label: "INSTAGRAM", href: "https://www.instagram.com/amentaudio/" },
              { label: "REDDIT", href: "https://www.reddit.com/user/AmentAudio/" },
              { label: "GITHUB", href: "https://github.com/KelseyProgrammer/FREECODER" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#888", textDecoration: "none", letterSpacing: "0.15em" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#39ff6a")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
              >
                {s.label}
              </a>
            ))}
          </div>
          <div>
            <Link href="/" style={{ color: "#888", textDecoration: "none" }}>
              ← AMENT AUDIO
            </Link>
            {" · "}
            <Link href="/freecoder/manual" style={{ color: "#888", textDecoration: "none" }}>MANUAL</Link>
            {" · "}
            © {new Date().getFullYear()} AMENT AUDIO
          </div>
        </footer>
      </div>
    </>
  );
}

const downloadBtnStyle: React.CSSProperties = {
  display: "inline-block",
  border: "1px solid rgba(57,255,106,0.35)",
  color: "#39ff6a",
  padding: "0.65rem 1rem",
  fontSize: "0.72rem",
  letterSpacing: "0.15em",
  textDecoration: "none",
  textAlign: "center",
  transition: "border-color 0.2s",
};
