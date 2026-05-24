"use client";

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M8 4v16M16 4v16"/>
      </svg>
    ),
    title: "Open Boosters",
    desc: "Unbox packs from the active content release to discover Song cards, Artist cards, and rare Specials.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h16M4 10h16M4 14h10"/>
        <circle cx="19" cy="17" r="3"/>
        <path d="M19 15v2l1 1"/>
      </svg>
    ),
    title: "Build Lineups",
    desc: "Assemble 10-slot lineups combining subgenre stacks and synergy bonuses to maximise your score.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: "Genre Battles",
    desc: "Challenge other players in festival duels — each genre has unique strengths, weaknesses, and archetypes.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: "Daily Enigmas",
    desc: "Solve AI-generated image puzzles linked to songs every day to earn cards and climb the leaderboard.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: "Marketplace",
    desc: "Trade and buy cards with other players using in-game points in a dynamic player-driven economy.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7L2 9l7-1 3-6z"/>
      </svg>
    ),
    title: "MusicTree",
    desc: "Explore your full collection mapped across the musical genre tree — track global and branch-level rankings.",
  },
];

export default function Features() {
  return (
    <section
      style={{
        padding: "5rem 2rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
          fontWeight: 700,
          letterSpacing: "0.1em",
          color: "var(--text)",
          marginBottom: "0.75rem",
        }}
      >
        Features
      </h2>
      <p
        style={{
          textAlign: "center",
          color: "var(--muted)",
          marginBottom: "3rem",
          fontSize: "1rem",
        }}
      >
        Everything in one game
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {features.map(({ icon, title, desc }) => (
          <div
            key={title}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "1.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              transition: "border-color 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--gold)";
              el.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--border)";
              el.style.transform = "translateY(0)";
            }}
          >
            <span style={{ color: "var(--gold)" }}>{icon}</span>
            <h3
              style={{
                fontFamily: "var(--font-cinzel), serif",
                fontSize: "0.9rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "var(--text)",
              }}
            >
              {title}
            </h3>
            <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
