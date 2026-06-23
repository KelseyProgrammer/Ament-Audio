"use client";

import { useState } from "react";

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

export default function ContactForm() {
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

  if (formState === "success") {
    return (
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
    );
  }

  return (
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
  );
}
