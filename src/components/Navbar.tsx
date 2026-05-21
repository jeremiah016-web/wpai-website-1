"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/prayer-requests", label: "Prayer Requests" },
  { href: "/services", label: "Services" },
  { href: "/live-stream", label: "Live Stream" },
  { href: "/leadership", label: "Leadership" },
  { href: "/women", label: "Women" },
  { href: "/contact", label: "Contact" },
];

const BP = 1100;

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [desktop, setDesktop] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Active route
  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  // Scroll hide/show navbar
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

      // Hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        // Show when scrolling up
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    const onResize = () => {
      setDesktop(window.innerWidth >= BP);
    };

    onScroll();
    onResize();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,

    /* Hide on scroll down */
    transform: hidden
      ? "translateY(-100%)"
      : "translateY(0)",

    /* FULLY TRANSPARENT */
    background: "transparent",

    /* REMOVE ALL EFFECTS */
    backdropFilter: "none",
    WebkitBackdropFilter: "none",

    borderBottom: "none",

    boxShadow: "none",

    transition: "transform 0.35s ease",
  }}
>
      {/* CONTAINER */}
      <div
        className="wrap"
        style={{
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        {/* LOGO */}
        <Link
          href="/"
          aria-label="WPAI"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
            flexShrink: 0,
            padding: "6px 12px",
            borderRadius: "9999px",
            background: "rgba(255,255,255,0.92)",
            border: "1px solid rgba(255,255,255,0.55)",
            boxShadow: "0 6px 18px rgba(0,0,0,0.14)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/wpai-logo.png"
            alt="WPAI"
            style={{
              height: "40px",
              width: "auto",
              objectFit: "contain",
            }}
          />

          
        </Link>

        {/* DESKTOP NAV */}
        {desktop && (
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            {NAV.map(({ href, label }) => {
              const active = isActive(href);

              return (
                <Link
                  key={href}
                  href={href}
                  style={{
                    padding: "10px 14px",
                    borderRadius: "8px",
                    textDecoration: "none",

                    fontSize: "0.82rem",
                    fontWeight: active ? 700 : 500,

                    color: active
                      ? "#ffffff"
                      : "rgba(255,255,255,0.82)",

                    background: active
                      ? "rgba(255,255,255,0.12)"
                      : "transparent",

                    borderBottom: active
                      ? "2px solid #c8a84b"
                      : "2px solid transparent",

                    transition: "all 0.2s ease",

                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;

                    if (!active) {
                      el.style.background =
                        "rgba(255,255,255,0.1)";
                      el.style.color = "#ffffff";
                    }
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;

                    if (!active) {
                      el.style.background = "transparent";
                      el.style.color =
                        "rgba(255,255,255,0.82)";
                    }
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        )}

        {/* MOBILE BUTTON */}
        {!desktop && (
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",

              display: "flex",
              flexDirection: "column",
              gap: "5px",

              padding: "8px",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  width: "24px",
                  height: "2px",
                  background: "#ffffff",
                  borderRadius: "20px",

                  transition: "all 0.25s ease",

                  transform: open
                    ? i === 0
                      ? "translateY(7px) rotate(45deg)"
                      : i === 2
                      ? "translateY(-7px) rotate(-45deg)"
                      : "scaleX(0)"
                    : "none",

                  opacity: open && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        )}
      </div>

      {/* MOBILE MENU */}
      {!desktop && (
        <div
          style={{
            maxHeight: open ? "600px" : "0",
            overflow: "hidden",

            transition: "max-height 0.35s ease",

           background: "#0a1628",
            backdropFilter: "none",
            borderTop: open
              ? "1px solid rgba(255,255,255,0.08)"
              : "none",
          }}
        >
          <div
            className="wrap"
            style={{
              padding: "14px 20px 24px",
            }}
          >
            {NAV.map(({ href, label }) => {
              const active = isActive(href);

              return (
                <Link
                  key={href}
                  href={href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",

                    padding: "14px 14px",
                    marginBottom: "4px",

                    borderRadius: "10px",

                    textDecoration: "none",

                    color: active
                      ? "#ffffff"
                      : "rgba(255,255,255,0.82)",

                    background: active
                      ? "rgba(255,255,255,0.1)"
                      : "transparent",

                    fontWeight: active ? 700 : 500,

                    fontSize: "0.92rem",
                  }}
                >
                  {label}

                  {active && (
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#c8a84b",
                      }}
                    />
                  )}
                </Link>
              );
            })}

            {/* CONTACT */}
            <div
              style={{
                marginTop: "16px",
                paddingTop: "16px",
                borderTop:
                  "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "0.75rem",
                  marginBottom: "6px",
                }}
              >
                📍 4318 Baltimore Ave, Bladensburg, MD 20710
              </p>

              <p
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "0.75rem",
                }}
              >
                📞 (240) 909-6289
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
