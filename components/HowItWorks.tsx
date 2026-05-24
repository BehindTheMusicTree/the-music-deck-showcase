const steps = [
  {
    number: "01",
    title: "Collect",
    desc: "Open boosters from the active pack to unlock Song cards, Artist cards, and rare Special cards including shiny full-arts and legendaries.",
  },
  {
    number: "02",
    title: "Build",
    desc: "Create a 10-slot lineup by combining subgenre stacks — each extra card in a stack adds +15% — and leveraging genre synergy bonuses.",
  },
  {
    number: "03",
    title: "Battle",
    desc: "Enter festival battles against other players. Genre type advantages, lineup synergies, and skill determine who tops the leaderboard.",
  },
];

export default function HowItWorks() {
  return (
    <section
      style={{
        padding: "5rem 2rem",
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
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
          How It Works
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "var(--muted)",
            marginBottom: "3.5rem",
            fontSize: "1rem",
          }}
        >
          Three steps, endless depth
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "0",
            position: "relative",
          }}
        >
          {steps.map(({ number, title, desc }, i) => (
            <div
              key={number}
              style={{
                padding: "2rem",
                borderLeft: i > 0 ? "1px solid var(--border)" : "none",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <span
                className="mono"
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  color: "var(--dim)",
                  lineHeight: 1,
                }}
              >
                {number}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-cinzel), serif",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "var(--gold-hi)",
                }}
              >
                {title}
              </h3>
              <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.7 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
