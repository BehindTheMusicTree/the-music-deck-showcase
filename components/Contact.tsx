"use client";

const CONTACT_EMAIL = "garcia.andreas.1991@gmail.com";

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        style={{
          padding: "6rem 2rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(168,124,40,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <h2
          style={{
            fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
            fontWeight: 700,
            letterSpacing: "0.1em",
            color: "var(--text)",
            marginBottom: "1rem",
          }}
        >
          Get in Touch
        </h2>
        <p
          style={{
            color: "var(--muted)",
            maxWidth: "480px",
            margin: "0 auto 2.5rem",
            fontSize: "1rem",
            lineHeight: 1.7,
          }}
        >
          The Music Deck is actively in development. If you&apos;re interested in
          collaborating, investing, or simply want to know more about the project,
          reach out directly.
        </p>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          style={{
            display: "inline-block",
            fontFamily: "var(--font-cinzel), serif",
            fontWeight: 700,
            fontSize: "0.8rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--bg)",
            background: "var(--gold)",
            padding: "0.85rem 2.5rem",
            textDecoration: "none",
            transition: "background 0.2s, transform 0.15s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.background = "var(--gold-hi)";
            el.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.background = "var(--gold)";
            el.style.transform = "translateY(0)";
          }}
        >
          {CONTACT_EMAIL}
        </a>
      </section>

      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "1.5rem 2rem",
          textAlign: "center",
        }}
      >
        <span
          className="mono"
          style={{ fontSize: "0.7rem", color: "var(--dim)", letterSpacing: "0.08em" }}
        >
          © 2026 The Music Deck
        </span>
      </footer>
    </>
  );
}
