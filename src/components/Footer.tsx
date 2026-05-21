import Link from "next/link";
import type { ReactNode } from "react";
import { MINISTRY_EMAIL } from "@/config/email";

const ministryLinks = [
  { href: "/prayer-requests", label: "Prayer Requests" },
  { href: "/live-stream", label: "Live Stream" },
  { href: "/services", label: "Services" },
  { href: "/leadership", label: "Leadership" },
];

const resourcesLinks = [
  { href: "/about", label: "About Us" },
  { href: "/events", label: "Events" },
  { href: "/membership", label: "Membership" },
  { href: "/resources", label: "Resources" },
];

const connectLinks = [
  { href: "/women", label: "Women" },
  { href: "/youth", label: "Youth" },
  { href: "/kids", label: "Kids" },
  { href: "/contact", label: "Contact" },
];

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      style={{
        width: "44px",
        height: "44px",
        borderRadius: "999px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.14)",
        color: "#ffffff",
        textDecoration: "none",
        transition: "transform 0.2s ease, background 0.2s ease, border-color 0.2s ease",
      }}
    >
      {children}
    </Link>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h3 style={{ color: "#ffffff", fontSize: "1rem", fontWeight: 800, letterSpacing: "0.02em" }}>
      {children}
    </h3>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#000000",
        color: "rgba(255,255,255,0.86)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(circle at 12% 8%, rgba(200,168,75,0.16), transparent 20%), radial-gradient(circle at 88% 10%, rgba(255,255,255,0.06), transparent 18%)",
        }}
      />

      <div className="wrap" style={{ position: "relative", paddingTop: "64px", paddingBottom: "28px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "28px",
            alignItems: "start",
          }}
        >
          <section style={{ maxWidth: "360px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "6px 12px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.92)",
                border: "1px solid rgba(255,255,255,0.55)",
                boxShadow: "0 6px 18px rgba(0,0,0,0.14)",
                marginBottom: "22px",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/wpai-logo.png"
                alt="WPAI"
                style={{ height: "40px", width: "auto", objectFit: "contain" }}
              />
            </div>

            <p
              style={{
                fontSize: "0.98rem",
                lineHeight: "1.8",
                color: "rgba(255,255,255,0.68)",
                maxWidth: "34ch",
                marginBottom: "22px",
              }}
            >
              A Christ-centered, Bible-believing church serving families through worship,
              prayer, fellowship, and ministry.
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <IconLink href="/contact" label="Contact WPAI">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
                  <path
                    d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="m7 8.5 5 4 5-4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </IconLink>
              <IconLink href={`mailto:${MINISTRY_EMAIL}`} label="Email WPAI">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
                  <path
                    d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="m5.5 7 6.5 5 6.5-5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </IconLink>
              <IconLink href="/live-stream" label="Watch Live">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
                  <path
                    d="M8.5 6.5 18 12l-9.5 5.5v-11Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              </IconLink>
            </div>
          </section>

          <section>
            <SectionTitle>Ministry</SectionTitle>
            <div style={{ marginTop: "24px", display: "grid", gap: "16px" }}>
              {ministryLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="footer-link"
                  style={{
                    color: "rgba(255,255,255,0.84)",
                    textDecoration: "none",
                    fontSize: "0.98rem",
                    width: "fit-content",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle>Resources</SectionTitle>
            <div style={{ marginTop: "24px", display: "grid", gap: "16px" }}>
              {resourcesLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="footer-link"
                  style={{
                    color: "rgba(255,255,255,0.84)",
                    textDecoration: "none",
                    fontSize: "0.98rem",
                    width: "fit-content",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle>Connect</SectionTitle>
            <div style={{ marginTop: "24px", display: "grid", gap: "16px" }}>
              {connectLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="footer-link"
                  style={{
                    color: "rgba(255,255,255,0.84)",
                    textDecoration: "none",
                    fontSize: "0.98rem",
                    width: "fit-content",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </section>
        </div>

        <div
          style={{
            marginTop: "34px",
            paddingTop: "28px",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "18px",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <a
              href={`mailto:${MINISTRY_EMAIL}`}
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "1.05rem",
                fontWeight: 700,
              }}
            >
              {MINISTRY_EMAIL}
            </a>
            <p style={{ color: "rgba(255,255,255,0.58)", fontSize: "0.9rem" }}>
              For prayer requests and general inquiries
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "18px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="tel:2409096289"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "1.05rem",
                fontWeight: 700,
              }}
            >
              (240) 909-6289
            </a>
            <span style={{ width: "1px", height: "34px", background: "rgba(255,255,255,0.15)" }} />
            <p style={{ color: "rgba(255,255,255,0.58)", fontSize: "0.9rem" }}>
              4318 Baltimore Ave, Bladensburg, MD 20710
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: "24px",
            paddingTop: "18px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "12px",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.52)" }}>
            Copyright {year} Washington Pentecostal Assembly International. All rights reserved.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "center" }}>
            <Link
              href="/resources#terms"
              style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.72)", textDecoration: "none" }}
            >
              Terms and Conditions
            </Link>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>|</span>
            <Link
              href="/resources#privacy"
              style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.72)", textDecoration: "none" }}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
