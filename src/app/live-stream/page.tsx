import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Live Stream",
  description:
    "Watch Washington Pentecostal Assembly live stream services online.",
};

const CHANNEL_ID = "UCH4Y_txbKRQ5JXw_e8qUqOw";

/**
 * YouTube uploads playlist:
 * UCxxxxxxxx -> UUxxxxxxxx
 */
const UPLOADS_PLAYLIST = `UU${CHANNEL_ID.slice(2)}`;

export default function LiveStreamPage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        title="Live Stream"
        breadcrumb="Live Stream"
        image="https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1600&q=80&auto=format&fit=crop"
      />

      {/* LIVE STREAM SECTION */}
      <section
        style={{
          background: "#0a1628",
          padding: "64px 16px",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {/* SMALL LABEL */}
          <p
            style={{
              fontSize: "0.72rem",
              fontWeight: 800,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#c8a84b",
              textAlign: "center",
              marginBottom: "18px",
            }}
          >
            🔴 LIVE STREAM
          </p>

          {/* TITLE */}
          <h2
            style={{
              color: "#ffffff",
              textAlign: "center",
              fontSize: "2rem",
              fontWeight: 800,
              marginBottom: "14px",
            }}
          >
            Join Our Worship Service Online
          </h2>

          {/* DESCRIPTION */}
          <p
            style={{
              color: "rgba(255,255,255,0.72)",
              textAlign: "center",
              maxWidth: "700px",
              margin: "0 auto 36px",
              lineHeight: 1.7,
              fontSize: "0.95rem",
            }}
          >
            Watch our live services and latest sermons online. When a live
            broadcast is active, it will appear automatically below. Otherwise,
            the latest uploaded video will play.
          </p>

          {/* VIDEO EMBED */}
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              overflow: "hidden",
              borderRadius: "16px",
              background: "#000",
              boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
            }}
          >
            <iframe
              src={`https://www.youtube.com/embed/live_stream?channel=${CHANNEL_ID}&autoplay=1&rel=0`}
              title="WPAI Live Stream"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </div>

          {/* NOTE */}
          <p
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "0.82rem",
              textAlign: "center",
              marginTop: "14px",
            }}
          >
            Live stream appears automatically when broadcasting starts.
          </p>
        </div>
      </section>

      {/* LATEST VIDEOS */}
      <section
        style={{
          background: "#ffffff",
          padding: "72px 16px",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {/* HEADING */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "42px",
            }}
          >
            <p
              style={{
                color: "#c8a84b",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                fontSize: "0.72rem",
                marginBottom: "10px",
              }}
            >
              Latest Messages
            </p>

            <h2
              style={{
                fontSize: "2rem",
                fontWeight: 800,
                color: "#1a2e4a",
                marginBottom: "12px",
              }}
            >
              Recent Sermons & Services
            </h2>

            <div
              style={{
                width: "60px",
                height: "3px",
                background: "#c8a84b",
                margin: "0 auto",
                borderRadius: "10px",
              }}
            />
          </div>

          {/* PLAYLIST EMBED */}
          <div
            style={{
              position: "relative",
              width: "100%",
              overflow: "hidden",
              borderRadius: "16px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            }}
          >
            <iframe
              width="100%"
              height="600"
              src={`https://www.youtube.com/embed/videoseries?list=${UPLOADS_PLAYLIST}`}
              title="Latest YouTube Videos"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                border: "none",
              }}
            />
          </div>
        </div>
      </section>

      {/* SERVICE SCHEDULE */}
      <section
        style={{
          background: "#f8fafc",
          padding: "72px 16px",
        }}
      >
        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
          }}
        >
          {/* TITLE */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            <p
              style={{
                color: "#c8a84b",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                fontSize: "0.72rem",
                marginBottom: "10px",
              }}
            >
              Weekly Services
            </p>

            <h2
              style={{
                fontSize: "2rem",
                fontWeight: 800,
                color: "#1a2e4a",
                marginBottom: "12px",
              }}
            >
              Service Schedule
            </h2>

            <div
              style={{
                width: "60px",
                height: "3px",
                background: "#c8a84b",
                margin: "0 auto",
                borderRadius: "10px",
              }}
            />
          </div>

          {/* SCHEDULE LIST */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0 5px 18px rgba(0,0,0,0.06)",
            }}
          >
            {[
              {
                day: "Sunday",
                service: "Sunday School",
                time: "9:30 AM – 10:15 AM",
              },
              {
                day: "Sunday",
                service: "Worship Service",
                time: "10:15 AM – 12:30 PM",
              },
              {
                day: "Tuesday",
                service: "Cottage Meeting",
                time: "7:30 PM – 9:00 PM",
              },
              {
                day: "Thursday",
                service: "Cottage Meeting",
                time: "7:30 PM – 9:00 PM",
              },
              {
                day: "Saturday",
                service: "Cottage Meeting",
                time: "6:30 PM – 8:30 PM",
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "10px",
                  padding: "18px 22px",
                  background: index % 2 === 0 ? "#ffffff" : "#f9fafb",
                  borderBottom:
                    index !== 4 ? "1px solid #e5e7eb" : "none",
                }}
              >
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      color: "#1a2e4a",
                      marginBottom: "4px",
                    }}
                  >
                    {item.day}
                  </div>

                  <div
                    style={{
                      color: "#64748b",
                      fontSize: "0.92rem",
                    }}
                  >
                    {item.service}
                  </div>
                </div>

                <div
                  style={{
                    background: "rgba(200,168,75,0.12)",
                    color: "#1a2e4a",
                    padding: "8px 14px",
                    borderRadius: "999px",
                    fontWeight: 700,
                    fontSize: "0.84rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}