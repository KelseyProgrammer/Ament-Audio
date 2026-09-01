import Link from "next/link";
import ContactForm from "./components/ContactForm";
import AudioPreview from "./components/AudioPreview";

const plugins = [
  {
    name: "FREECODER",
    category: "Spectral Processor",
    description:
      "Spectral morphing workstation — capture any sound and use it as a living spectral donor for freeze, granular, phrase loop, and MIDI instrument processing.",
    price: "$29",
    link: "/freecoder",
    trial: true,
    audio: { dry: "/audio/freecoder-dry.mp3", wet: "/audio/freecoder-wet.mp3" },
  },
  {
    name: "HALATION",
    category: "Feedback Pitch Ecosystem",
    description:
      "Split your signal into up to eight pitch-shifted feedback paths that bloom from subtle harmonic doubler to self-generating ambient drone — shoegaze shimmer, dark overtone stacks, and everything between.",
    price: "$19",
    link: "/halation",
    trial: false,
    audio: { dry: "/audio/halation-dry.mp3", wet: "/audio/halation-wet.mp3" },
  },
  {
    name: "LIMINAL",
    category: "Negative-Space Effect",
    description:
      "A threshold-based atmosphere engine that wakes up in the silence between your notes — conjuring reverb, shimmer, and pitch ghosts from whatever you just played.",
    price: "$19",
    link: "/liminal",
    trial: false,
    audio: { dry: "/audio/liminal-dry.mp3", wet: "/audio/liminal-wet.mp3" },
  },
];

const BUNDLE_LINK = "https://chrisament.gumroad.com/l/mfjac";
const BUNDLE_PRICE = "$49";
const BUNDLE_FULL_PRICE = "$67";
const BUNDLE_SAVINGS = "$18";

const socials = [
  { label: "YOUTUBE", href: "https://www.youtube.com/@AmentAudio" },
  { label: "INSTAGRAM", href: "https://www.instagram.com/amentaudio/" },
  { label: "REDDIT", href: "https://www.reddit.com/user/AmentAudio/" },
  { label: "GITHUB", href: "https://github.com/KelseyProgrammer" },
];

export default function Home() {
  return (
    <>
      {/* Hidden form for Netlify build-time form detection */}
      <form name="contact" data-netlify="true" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message" />
      </form>

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6">
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-abril), Georgia, serif",
            fontWeight: 400,
            fontSize: "var(--text-xl)",
            letterSpacing: "var(--track-md)",
            color: "var(--ink-100)",
            textDecoration: "none",
          }}
        >
          AMENT AUDIO
        </Link>
        <div className="flex gap-8">
          {["Plugins", "About", "Contact"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="home-nav-link"
              style={{
                color: "var(--ink-70)",
                letterSpacing: "var(--track-sm)",
                fontSize: "var(--text-base)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              {label.toUpperCase()}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{
          minHeight: "88vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 1.5rem",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-abril), Georgia, serif",
            fontWeight: 400,
            fontSize: "clamp(3rem, 10vw, 8rem)",
            letterSpacing: "var(--track-md)",
            lineHeight: 1,
            color: "var(--ink-100)",
            textShadow: "0 0 60px rgba(255,255,255,0.15)",
            marginBottom: "1.5rem",
          }}
        >
          AMENT AUDIO
        </h1>
        <p
          style={{
            color: "var(--ink-70)",
            fontSize: "clamp(0.9rem, 2vw, 1.15rem)",
            letterSpacing: "var(--track-md)",
            maxWidth: "560px",
            marginBottom: "3rem",
          }}
        >
          TEXTURE-FIRST VST PLUGINS FOR SHOEGAZE, AMBIENT &amp; EXPERIMENTAL
          PRODUCERS
        </p>
        <a
          href="#plugins"
          className="home-hero-cta"
          style={{
            display: "inline-block",
            padding: "0.9rem 2.5rem",
            border: "1px solid var(--ink-70)",
            color: "var(--ink-100)",
            letterSpacing: "var(--track-lg)",
            fontSize: "var(--text-base)",
            textDecoration: "none",
            transition: "background 0.25s, border-color 0.25s",
          }}
        >
          EXPLORE PLUGINS
        </a>
        <p
          style={{
            marginTop: "1.5rem",
            fontSize: "var(--text-xs)",
            letterSpacing: "var(--track-lg)",
            color: "var(--ink-50)",
          }}
        >
          FREE TRIAL AVAILABLE · BUILT FROM SCRATCH IN JUCE
        </p>
      </section>

      {/* Plugins */}
      <section
        id="plugins"
        style={{
          padding: "6rem 2rem",
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <h2
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontWeight: 800,
            letterSpacing: "var(--track-lg)",
            fontSize: "var(--text-sm)",
            color: "var(--ink-50)",
            marginBottom: "3rem",
            textAlign: "center",
          }}
        >
          PLUGINS
        </h2>

        {/* Complete suite banner */}
        <a
          href={BUNDLE_LINK}
          className="home-bundle-banner"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
            border: "1px solid var(--line-strong)",
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(12px)",
            padding: "1.75rem 2rem",
            marginBottom: "3rem",
            textDecoration: "none",
            transition: "border-color 0.25s, box-shadow 0.25s",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "var(--text-xs)",
                letterSpacing: "var(--track-lg)",
                color: "var(--ink-50)",
                marginBottom: "0.5rem",
              }}
            >
              COMPLETE SUITE
            </div>
            <div
              style={{
                fontFamily: "var(--font-abril), Georgia, serif",
                fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
                letterSpacing: "var(--track-sm)",
                color: "var(--ink-100)",
              }}
            >
              FREECODER + HALATION + LIMINAL
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1.75rem", flexWrap: "wrap" }}>
            <div style={{ textAlign: "right" }}>
              <div>
                <span
                  style={{
                    fontSize: "var(--text-base)",
                    color: "var(--ink-35)",
                    textDecoration: "line-through",
                    marginRight: "0.6rem",
                  }}
                >
                  {BUNDLE_FULL_PRICE}
                </span>
                <span
                  style={{
                    fontSize: "var(--text-2xl)",
                    fontWeight: 700,
                    color: "var(--ink-100)",
                    letterSpacing: "var(--track-sm)",
                  }}
                >
                  {BUNDLE_PRICE}
                </span>
              </div>
              <div
                style={{
                  fontSize: "var(--text-xs)",
                  letterSpacing: "var(--track-lg)",
                  color: "var(--ink-50)",
                }}
              >
                SAVE {BUNDLE_SAVINGS}
              </div>
            </div>
            <span
              style={{
                display: "inline-block",
                background: "#fff",
                color: "#000",
                padding: "0.8rem 1.75rem",
                fontSize: "var(--text-sm)",
                fontWeight: 700,
                letterSpacing: "var(--track-md)",
              }}
            >
              GET THE SUITE →
            </span>
          </div>
        </a>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {plugins.map((plugin) => (
            <div
              key={plugin.name}
              className="home-plugin-card"
              style={{
                border: "1px solid var(--line)",
                background: "rgba(0,0,0,0.45)",
                backdropFilter: "blur(12px)",
                padding: "2rem",
                transition: "border-color 0.25s",
              }}
            >
              <Link
                href={plugin.link}
                style={{ display: "block", textDecoration: "none" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "var(--text-xs)",
                      letterSpacing: "var(--track-md)",
                      color: "var(--ink-50)",
                    }}
                  >
                    {plugin.category.toUpperCase()}
                  </span>
                  <span
                    style={{
                      fontSize: "var(--text-base)",
                      fontWeight: 700,
                      letterSpacing: "var(--track-sm)",
                      color: "var(--ink-100)",
                    }}
                  >
                    {plugin.price}
                  </span>
                </div>
                <h3
                  style={{
                    fontWeight: 800,
                    fontSize: "var(--text-lg)",
                    letterSpacing: "var(--track-md)",
                    color: "var(--ink-100)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {plugin.name}
                  {plugin.trial && (
                    <span
                      style={{
                        marginLeft: "0.75rem",
                        verticalAlign: "middle",
                        fontSize: "var(--text-xs)",
                        fontWeight: 400,
                        letterSpacing: "var(--track-md)",
                        color: "var(--ink-70)",
                        border: "1px solid var(--line-strong)",
                        padding: "0.15rem 0.5rem",
                      }}
                    >
                      FREE TRIAL
                    </span>
                  )}
                </h3>
                <p
                  style={{
                    color: "var(--ink-70)",
                    fontSize: "var(--text-base)",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                  }}
                >
                  {plugin.description}
                </p>
              </Link>
              <AudioPreview
                name={plugin.name}
                dry={plugin.audio.dry}
                wet={plugin.audio.wet}
              />
              <Link
                href={plugin.link}
                style={{
                  fontSize: "var(--text-sm)",
                  letterSpacing: "var(--track-md)",
                  color: "var(--ink-70)",
                  borderBottom: "1px solid var(--line-strong)",
                  paddingBottom: "2px",
                  textDecoration: "none",
                }}
              >
                VIEW PLUGIN →
              </Link>
            </div>
          ))}

          {/* Bundle card */}
          <a
            href={BUNDLE_LINK}
            className="home-bundle-card"
            style={{
              display: "block",
              border: "1px solid var(--line-strong)",
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(12px)",
              padding: "2rem",
              transition: "border-color 0.25s",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "1rem",
              }}
            >
              <span
                style={{
                  fontSize: "var(--text-xs)",
                  letterSpacing: "var(--track-md)",
                  color: "var(--ink-50)",
                }}
              >
                ALL THREE PLUGINS
              </span>
              <span style={{ fontSize: "var(--text-base)", letterSpacing: "var(--track-sm)" }}>
                <span
                  style={{
                    color: "var(--ink-35)",
                    textDecoration: "line-through",
                    marginRight: "0.5rem",
                  }}
                >
                  {BUNDLE_FULL_PRICE}
                </span>
                <span style={{ fontWeight: 700, color: "var(--ink-100)" }}>{BUNDLE_PRICE}</span>
              </span>
            </div>
            <h3
              style={{
                fontWeight: 800,
                fontSize: "var(--text-lg)",
                letterSpacing: "var(--track-md)",
                color: "var(--ink-100)",
                marginBottom: "0.75rem",
              }}
            >
              COMPLETE SUITE
            </h3>
            <p
              style={{
                color: "var(--ink-70)",
                fontSize: "var(--text-base)",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}
            >
              FREECODER, HALATION, and LIMINAL together — the full Ament Audio
              toolkit for spectral, feedback, and negative-space processing, at{" "}
              {BUNDLE_SAVINGS} off the individual prices.
            </p>
            <span
              style={{
                display: "inline-block",
                background: "#fff",
                color: "#000",
                padding: "0.8rem 1.75rem",
                fontSize: "var(--text-sm)",
                fontWeight: 700,
                letterSpacing: "var(--track-md)",
              }}
            >
              GET THE SUITE — SAVE {BUNDLE_SAVINGS} →
            </span>
          </a>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        style={{
          padding: "6rem 2rem",
          maxWidth: "780px",
          margin: "0 auto",
          width: "100%",
          borderTop: "1px solid var(--line-faint)",
        }}
      >
        <h2
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontWeight: 800,
            letterSpacing: "var(--track-lg)",
            fontSize: "var(--text-sm)",
            color: "var(--ink-50)",
            marginBottom: "3rem",
            textAlign: "center",
          }}
        >
          ABOUT
        </h2>

        <div
          style={{
            lineHeight: 1.9,
            fontSize: "var(--text-md)",
            color: "var(--ink-70)",
            marginBottom: "3rem",
          }}
        >
          <p style={{ marginBottom: "1.25rem" }}>
            Ament Audio builds VST plugins for experimental and textural music production.
            Each tool is designed around a single strong idea — exploring the edges of sound
            rather than reproducing familiar processes.
          </p>
          <p style={{ marginBottom: "1.25rem" }}>
            The plugins are written from scratch in JUCE, with a focus on musical usability
            over feature count. FREECODER treats captured audio as raw material for spectral
            transformation. HALATION makes feedback harmonic and controlled. LIMINAL finds
            the atmosphere hiding in the space between notes.
          </p>
          <p>
            Designed for shoegaze, ambient, drone, and experimental production — but built
            to be useful anywhere texture matters more than convention.
          </p>
        </div>

        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="home-nav-link"
              style={{
                fontSize: "var(--text-sm)",
                letterSpacing: "var(--track-md)",
                color: "var(--ink-50)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              {s.label} →
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        style={{
          padding: "6rem 2rem",
          maxWidth: "780px",
          margin: "0 auto",
          width: "100%",
          borderTop: "1px solid var(--line-faint)",
        }}
      >
        <h2
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontWeight: 800,
            letterSpacing: "var(--track-lg)",
            fontSize: "var(--text-sm)",
            color: "var(--ink-50)",
            marginBottom: "3rem",
            textAlign: "center",
          }}
        >
          CONTACT
        </h2>

        <ContactForm />
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "3rem 1.5rem",
          borderTop: "1px solid var(--line-faint)",
          color: "var(--ink-35)",
          fontSize: "var(--text-sm)",
          letterSpacing: "var(--track-md)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            marginBottom: "1.25rem",
            flexWrap: "wrap",
          }}
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="home-nav-link"
              style={{
                color: "var(--ink-35)",
                textDecoration: "none",
                letterSpacing: "var(--track-md)",
                transition: "color 0.2s",
              }}
            >
              {s.label}
            </a>
          ))}
        </div>
        © {new Date().getFullYear()} AMENT AUDIO — ALL RIGHTS RESERVED
      </footer>
    </>
  );
}
