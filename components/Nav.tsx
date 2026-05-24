"use client";

export default function Nav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(9, 8, 13, 0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
        padding: "0 2rem",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/the-music-deck-mark.svg"
          alt=""
          aria-hidden
          width={32}
          height={32}
          style={{ width: 32, height: 32 }}
        />
        <span
          style={{
            fontFamily: "var(--font-cinzel), serif",
            fontWeight: 900,
            fontSize: "1rem",
            letterSpacing: "0.12em",
            color: "var(--gold-hi)",
          }}
        >
          THE MUSIC DECK
        </span>
      </span>
      <a
        href="#contact"
        style={{
          fontFamily: "var(--font-cinzel), serif",
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
          color: "var(--muted)",
          textDecoration: "none",
          textTransform: "uppercase",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) =>
          ((e.target as HTMLAnchorElement).style.color = "var(--gold-hi)")
        }
        onMouseLeave={(e) =>
          ((e.target as HTMLAnchorElement).style.color = "var(--muted)")
        }
      >
        Contact
      </a>
    </nav>
  );
}
