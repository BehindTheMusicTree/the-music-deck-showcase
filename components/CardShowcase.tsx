const cards = [
  {
    genre: "Rock",
    subgenre: "Indie Rock",
    title: "Last Nite",
    artist: "The Strokes",
    year: "2001",
    color: "#d01828",
    headerBg: "#0d0506",
    artwork: "linear-gradient(160deg, #3a0810 0%, #1a0308 40%, #0d0202 100%)",
    pop: 8,
    exp: 7,
  },
  {
    genre: "Electronic",
    subgenre: "Techno",
    title: "Strings of Life",
    artist: "Rhythim Is Rhythim",
    year: "1987",
    color: "#2850c8",
    headerBg: "#050810",
    artwork: "linear-gradient(160deg, #081040 0%, #040818 40%, #020408 100%)",
    pop: 9,
    exp: 8,
  },
  {
    genre: "Hip-hop",
    subgenre: "East Coast",
    title: "N.Y. State of Mind",
    artist: "Nas",
    year: "1994",
    color: "#c8960a",
    headerBg: "#0a0800",
    artwork: "linear-gradient(160deg, #3a2800 0%, #1a1200 40%, #0a0800 100%)",
    pop: 9,
    exp: 9,
  },
];

function PopBar({ value, color }: { value: number; color: string }) {
  return (
    <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          style={{
            width: "14px",
            height: "6px",
            borderRadius: "2px",
            background: i < value ? color : "rgba(255,255,255,0.08)",
          }}
        />
      ))}
    </div>
  );
}

function Card({ genre, subgenre, title, artist, year, color, headerBg, artwork, pop, exp }: (typeof cards)[0]) {
  const parchment = "#ede4cc";
  return (
    <div
      style={{
        width: "232px",
        borderRadius: "12px",
        border: `8px solid ${color}`,
        background: "#16141f",
        overflow: "hidden",
        boxShadow: `0 8px 40px rgba(0,0,0,0.7), 0 0 24px ${color}33`,
        flexShrink: 0,
      }}
    >
      {/* Header */}
      <div
        style={{
          background: headerBg,
          padding: "8px 10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "6px",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: color,
              textTransform: "uppercase",
            }}
          >
            {genre}
          </div>
          <div
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "11px",
              fontWeight: 700,
              color: "#d8d4f0",
              lineHeight: 1.2,
              marginTop: "2px",
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: "9px", color: "#6a6480", fontStyle: "italic", marginTop: "1px" }}>
            {artist}
          </div>
        </div>
      </div>

      {/* Artwork */}
      <div style={{ height: "130px", background: artwork, position: "relative" }}>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40px",
            background: "linear-gradient(to top, #16141f, transparent)",
          }}
        />
      </div>

      {/* Genre strip */}
      <div
        style={{
          background: parchment,
          padding: "5px 10px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: color,
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-cinzel), serif",
            fontSize: "8px",
            color: "#3a3020",
            fontWeight: 700,
            letterSpacing: "0.06em",
          }}
        >
          {subgenre.toUpperCase()}
        </span>
      </div>

      {/* Stats */}
      <div style={{ padding: "10px", display: "flex", flexDirection: "column", gap: "6px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
          <span style={{ fontFamily: "var(--font-cinzel), serif", fontSize: "7px", color: "#6a6480", letterSpacing: "0.08em" }}>POPULARITY</span>
          <PopBar value={pop} color={color} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
          <span style={{ fontFamily: "var(--font-cinzel), serif", fontSize: "7px", color: "#6a6480", letterSpacing: "0.08em" }}>EXPRESSIVITY</span>
          <PopBar value={exp} color={`${color}99`} />
        </div>
        <div style={{ textAlign: "right", fontFamily: "var(--font-mono), monospace", fontSize: "8px", color: "#28263a", marginTop: "2px" }}>
          {year}
        </div>
      </div>
    </div>
  );
}

export default function CardShowcase() {
  return (
    <section style={{ padding: "5rem 2rem" }}>
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
          The Cards
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "var(--muted)",
            marginBottom: "3rem",
            fontSize: "1rem",
          }}
        >
          Each card represents a song — with genre identity, stats, and rarity
        </p>

        <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {cards.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
