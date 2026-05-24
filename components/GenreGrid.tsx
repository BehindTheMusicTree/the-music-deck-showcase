const genres = [
  { name: "Rock", color: "#d01828" },
  { name: "Reggae / Dub", color: "#3a9030" },
  { name: "Vintage", color: "#787878" },
  { name: "World", color: "#a01818" },
  { name: "Classical", color: "#5c2a0a" },
  { name: "Electronic", color: "#2850c8" },
  { name: "Country", color: "#7a4e20" },
  { name: "Disco / Funk", color: "#c0387a" },
  { name: "Hip-hop", color: "#c8960a" },
  { name: "Pop", color: "#a0a0c0" },
];

export default function GenreGrid() {
  return (
    <section
      style={{
        padding: "5rem 2rem",
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
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
          10 Genres
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "var(--muted)",
            marginBottom: "3rem",
            fontSize: "1rem",
          }}
        >
          Each with unique strengths, weaknesses, and archetypes
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "1.5rem",
          }}
        >
          {genres.map(({ name, color }) => (
            <div
              key={name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.6rem",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: `${color}22`,
                  border: `2px solid ${color}`,
                  boxShadow: `0 0 12px ${color}44`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    background: color,
                  }}
                />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-cinzel), serif",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  color: "var(--muted)",
                  textAlign: "center",
                  textTransform: "uppercase",
                  lineHeight: 1.3,
                }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
