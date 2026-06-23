"use client";

import Link from "next/link";
import { useState } from "react";

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
    link: "/halation",
  },
  {
    name: "LIMINAL",
    category: "Negative-Space Effect",
    description:
      "A threshold-based atmosphere engine that wakes up in the silence between your notes — conjuring reverb, shimmer, and pitch ghosts from whatever you just played.",
    price: "$19",
    link: "/liminal",
  },
];

const socials = [
  { label: "YOUTUBE", href: "https://www.youtube.com/@AmentAudio" },
  { label: "INSTAGRAM", href: "https://www.instagram.com/amentaudio/" },
  { label: "REDDIT", href: "https://www.reddit.com/user/AmentAudio/" },
  { label: "GITHUB", href: "https://github.com/KelseyProgrammer" },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(0,0,0,0.4)",
  border: "1px solid rgba(255,255,255,0.15)",
  color: "#fff",
  padding: "0.75rem 1rem",
  fontSize: "0.85rem",
  fontFamily: "inherit",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.65rem",
  letterSpacing: "0.2em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "0.5rem",
};

export default function Home() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    const form = e.currentTarget;
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString(),
      });
      if (res.ok) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  return (
    <>
      {/* Hidden form for Netlify build-time detection */}
      <form name="contact" data-netlify="true" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message" />
      </form>

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
              className="home-nav-link"
              style={{
                color: "rgba(255,255,255,0.75)",
                letterSpacing: "0.1em",
                fontSize: "0.85rem",
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
          VST PLUGINS FOR MODERN PRODUCERS
        </p>
        <a
          href="#plugins"
          className="home-hero-cta"
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
            <Link
              key={plugin.name}
              href={plugin.link}
              className="home-plugin-card"
              style={{
                display: "block",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(0,0,0,0.45)",
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
              <span
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  color: "rgba(255,255,255,0.75)",
                  borderBottom: "1px solid rgba(255,255,255,0.3)",
                  paddingBottom: "2px",
                }}
              >
                VIEW PLUGIN →
              </span>
            </Link>
          ))}
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
          borderTop: "1px solid rgba(255,255,255,0.08)",
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
          ABOUT
        </h2>

        <div style={{ lineHeight: 1.9, fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", marginBottom: "3rem" }}>
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
                fontSize: "0.72rem",
                letterSpacing: "0.2em",
                color: "rgba(255,255,255,0.45)",
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
          borderTop: "1px solid rgba(255,255,255,0.08)",
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
          CONTACT
        </h2>

        {formState === "success" ? (
          <div
            style={{
              background: "rgba(57,255,106,0.06)",
              border: "1px solid rgba(57,255,106,0.25)",
              padding: "2.5rem",
              textAlign: "center",
              color: "rgba(255,255,255,0.75)",
              fontSize: "0.9rem",
              lineHeight: 1.8,
              letterSpacing: "0.05em",
            }}
          >
            <div style={{ fontSize: "0.65rem", letterSpacing: "0.25em", color: "rgba(57,255,106,0.8)", marginBottom: "1rem" }}>
              MESSAGE SENT
            </div>
            Thanks for reaching out — I&apos;ll get back to you soon.
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <input type="hidden" name="form-name" value="contact" />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              <div>
                <label htmlFor="name" style={labelStyle}>NAME</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  style={{
                    ...inputStyle,
                    borderColor: focusedField === "name" ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.15)",
                  }}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
              <div>
                <label htmlFor="email" style={labelStyle}>EMAIL</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  style={{
                    ...inputStyle,
                    borderColor: focusedField === "email" ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.15)",
                  }}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" style={labelStyle}>MESSAGE</label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Questions, feedback, licensing inquiries..."
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  borderColor: focusedField === "message" ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.15)",
                }}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
              />
            </div>

            {formState === "error" && (
              <div style={{ fontSize: "0.78rem", color: "rgba(255,100,100,0.8)", letterSpacing: "0.05em" }}>
                Something went wrong — please try again or email directly.
              </div>
            )}

            <button
              type="submit"
              disabled={formState === "submitting"}
              style={{
                alignSelf: "flex-start",
                background: formState === "submitting" ? "rgba(255,255,255,0.6)" : "#fff",
                color: "#000",
                border: "none",
                padding: "0.9rem 2.5rem",
                fontSize: "0.78rem",
                letterSpacing: "0.2em",
                fontFamily: "inherit",
                cursor: formState === "submitting" ? "not-allowed" : "pointer",
                transition: "opacity 0.2s",
              }}
            >
              {formState === "submitting" ? "SENDING..." : "SEND MESSAGE"}
            </button>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "3rem 1.5rem",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          color: "rgba(255,255,255,0.3)",
          fontSize: "0.7rem",
          letterSpacing: "0.15em",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="home-nav-link"
              style={{
                color: "rgba(255,255,255,0.3)",
                textDecoration: "none",
                letterSpacing: "0.15em",
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
