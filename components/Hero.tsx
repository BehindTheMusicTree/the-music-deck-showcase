"use client";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "6rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(168,124,40,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/the-music-deck-mark-full.png"
        alt="The Music Deck"
        width={320}
        height={320}
        style={{ width: 320, height: 320, marginBottom: "2rem" }}
      />

      <p
        className="mono"
        style={{
          fontSize: "0.7rem",
          letterSpacing: "0.25em",
          color: "var(--gold)",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
        }}
      >
        Trading Card Game · Season 1
      </p>

      <h1
        style={{
          fontFamily: "var(--font-cinzel), serif",
          fontWeight: 900,
          fontSize: "clamp(3rem, 10vw, 7rem)",
          lineHeight: 1,
          letterSpacing: "0.06em",
          marginBottom: "1.5rem",
          color: "var(--text)",
        }}
      >
        THE MUSIC{" "}
        <span style={{ color: "var(--gold-hi)" }}>DECK</span>
      </h1>

      <p
        style={{
          fontFamily: "var(--font-garamond), serif",
          fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
          color: "var(--muted)",
          maxWidth: "560px",
          lineHeight: 1.7,
          marginBottom: "2.5rem",
        }}
      >
        A collectible music card game where players build lineups, open boosters,
        and battle through genre-based strategy.
      </p>

      <a
        href="#contact"
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
          border: "none",
          cursor: "pointer",
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
        Get in touch
      </a>
    </section>
  );
}
