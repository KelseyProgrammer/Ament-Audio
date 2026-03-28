"use client";

import Link from "next/link";

export default function Home() {
  const plugins = [
    {
      name: "FREECODER",
      category: "Spectral Processor",
      description:
        "Spectral morphing workstation — capture any sound and use it as a living spectral donor for freeze, granular, phrase loop, and MIDI instrument processing.",
      price: "$29",
      link: "/freecoder",
    },
    {
      name: "HALATION",
      category: "Feedback Pitch Ecosystem",
      description:
        "Split your signal into up to eight pitch-shifted feedback paths that bloom from subtle harmonic doubler to self-generating ambient drone — shoegaze shimmer, dark overtone stacks, and everything between.",
      price: "$19",
      link: "#",
    },
  ];

  return (
    <>
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6">
        <span
          style={{
            fontFamily: "var(--font-abril), Georgia, serif",
            fontWeight: 400,
            fontSize: "1.35rem",
            letterSpacing: "0.12em",
            color: "#fff",
          }}
        >
          AMENT AUDIO
        </span>
        <div className="flex gap-8">
          {["Plugins", "About", "Contact"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              style={{
                color: "rgba(255,255,255,0.75)",
                letterSpacing: "0.1em",
                fontSize: "0.85rem",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "#fff")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLAnchorElement).style.color =
                  "rgba(255,255,255,0.75)")
              }
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
            letterSpacing: "0.15em",
            lineHeight: 1,
            color: "#fff",
            textShadow: "0 0 60px rgba(255,255,255,0.15)",
            marginBottom: "1.5rem",
          }}
        >
          AMENT AUDIO
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "clamp(0.9rem, 2vw, 1.15rem)",
            letterSpacing: "0.15em",
            maxWidth: "520px",
            marginBottom: "3rem",
          }}
        >
          FREE VST PLUGINS FOR MODERN PRODUCERS
        </p>
        <a
          href="#plugins"
          style={{
            display: "inline-block",
            padding: "0.9rem 2.5rem",
            border: "1px solid rgba(255,255,255,0.6)",
            color: "#fff",
            letterSpacing: "0.2em",
            fontSize: "0.8rem",
            textDecoration: "none",
            transition: "background 0.25s, border-color 0.25s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.background = "rgba(255,255,255,0.12)";
            el.style.borderColor = "#fff";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.background = "transparent";
            el.style.borderColor = "rgba(255,255,255,0.6)";
          }}
        >
          EXPLORE PLUGINS
        </a>
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
            letterSpacing: "0.25em",
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.5)",
            marginBottom: "3rem",
            textAlign: "center",
          }}
        >
          PLUGINS
        </h2>
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
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(0,0,0,0.45)",
                backdropFilter: "blur(12px)",
                padding: "2rem",
                transition: "border-color 0.25s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget.style.borderColor =
                  "rgba(255,255,255,0.45)"))
              }
              onMouseLeave={(e) =>
                ((e.currentTarget.style.borderColor =
                  "rgba(255,255,255,0.15)"))
              }
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
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  {plugin.category.toUpperCase()}
                </span>
                <span
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    color: "#fff",
                  }}
                >
                  {plugin.price}
                </span>
              </div>
              <h3
                style={{
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  letterSpacing: "0.15em",
                  color: "#fff",
                  marginBottom: "0.75rem",
                }}
              >
                {plugin.name}
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.85rem",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                }}
              >
                {plugin.description}
              </p>
              <Link
                href={plugin.link}
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  color: "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.3)",
                  paddingBottom: "2px",
                }}
              >
                VIEW PLUGIN →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "3rem 1.5rem",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          color: "rgba(255,255,255,0.35)",
          fontSize: "0.7rem",
          letterSpacing: "0.15em",
        }}
      >
        © {new Date().getFullYear()} AMENT AUDIO — ALL RIGHTS RESERVED
      </footer>
    </>
  );
}
