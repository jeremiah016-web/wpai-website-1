import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet the leadership team of Washington Pentecostal Assembly.",
};

const PASTOR = {
  name: "Pastor James Mulavana (Jaimson Babu)",
  role: "Pastor and President of WPA",
  image: "/leadership/pastor.jpg",
};

const BOARD = [
  {
    name: "Bro. Moses Devaprakasam",
    role: "Board Member",
    image: "/leadership/moses.jpg",
  },
 
  {
    name: "Bro. Melvin Mathew",
    role: "Board Member",
    image: "/leadership/melvin.jpg",
  },
  {
    name: "Bro. Babychan P",
    role: "Vice President",
    image: "/leadership/babychan.jpg",
  },
  {
    name: "Bro. Thomas John",
    role: "Secretary",
    image: "/leadership/thomas.jpg",
  },
  {
    name: "Bro. Sam Chonai",
    role: "Treasurer",
    image: "/leadership/sam.jpg",
  },
  {
    name: "Pr. James Mulavana (Jaimson Babu)",
    role: "Senior Pastor",
    image: "/leadership/pastor.jpg",
  },
];

export default function LeadershipPage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        title="Leadership"
        breadcrumb="Leadership"
        image="https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=1600&q=80&auto=format&fit=crop"
      />

      {/* MAIN SECTION */}
      <section
        style={{
          background:
            "linear-gradient(to bottom, #ffffff 0%, #f8fafc 100%)",
          padding: "80px 20px 100px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* TITLE */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "70px",
            }}
          >
            <p
              style={{
                color: "#c8a84b",
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                fontWeight: 700,
                fontSize: "0.72rem",
                marginBottom: "12px",
              }}
            >
              Our Leadership
            </p>

            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 900,
                color: "#111827",
                marginBottom: "18px",
                lineHeight: 1.1,
              }}
            >
              Guiding the Church
              <br />
              With Faith & Vision
            </h2>

            <div
              style={{
                width: "70px",
                height: "4px",
                background: "#c8a84b",
                margin: "0 auto 24px",
                borderRadius: "20px",
              }}
            />

            <p
              style={{
                maxWidth: "720px",
                margin: "0 auto",
                color: "#64748b",
                fontSize: "1rem",
                lineHeight: 1.8,
              }}
            >
              Our leadership team is committed to serving God,
              strengthening the church community, and guiding people
              in faith, worship, and spiritual growth.
            </p>
          </div>

          {/* SENIOR PASTOR */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "30px",
              padding: "50px 40px",
              marginBottom: "80px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
              border: "1px solid rgba(226,232,240,0.8)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "28px",
              }}
            >
              <div
                style={{
                  width: "190px",
                  height: "190px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "5px solid #c8a84b",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
                }}
              >
                <Image
                  src={PASTOR.image}
                  alt={PASTOR.name}
                  width={190}
                  height={190}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>

            <p
              style={{
                color: "#c8a84b",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                fontSize: "0.72rem",
                marginBottom: "12px",
              }}
            >
              Senior Leadership
            </p>

            <h3
              style={{
                fontSize: "2rem",
                fontWeight: 900,
                color: "#111827",
                marginBottom: "10px",
              }}
            >
              {PASTOR.name}
            </h3>

            <p
              style={{
                color: "#1a2e4a",
                fontSize: "1rem",
                fontWeight: 700,
                marginBottom: "24px",
              }}
            >
              {PASTOR.role}
            </p>

            <p
              style={{
                maxWidth: "760px",
                margin: "0 auto",
                color: "#64748b",
                lineHeight: 1.9,
                fontSize: "0.98rem",
              }}
            >
              Dedicated to preaching the Gospel and leading the church
              with humility, wisdom, and compassion, Pastor James
              Mulavana continues to inspire believers through faithful
              ministry and spiritual guidance.
            </p>
          </div>

          {/* BOARD TITLE */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            <p
              style={{
                color: "#c8a84b",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                fontWeight: 700,
                fontSize: "0.72rem",
                marginBottom: "12px",
              }}
            >
              Church Board
            </p>

            <h3
              style={{
                fontSize: "2rem",
                fontWeight: 900,
                color: "#111827",
              }}
            >
              Leadership Team
            </h3>
          </div>

          {/* GRID */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "28px",
            }}
          >
            {BOARD.map((member) => (
              <div
                key={member.name}
                style={{
                  background: "#ffffff",
                  borderRadius: "24px",
                  padding: "36px 24px",
                  textAlign: "center",
                  border: "1px solid rgba(226,232,240,0.8)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                }}
              >
                {/* IMAGE */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "110px",
                      height: "110px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      border:
                        "4px solid rgba(200,168,75,0.85)",
                      boxShadow:
                        "0 8px 20px rgba(0,0,0,0.12)",
                    }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={110}
                      height={110}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>

                {/* NAME */}
                <h4
                  style={{
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: "#111827",
                    lineHeight: 1.5,
                    marginBottom: "8px",
                  }}
                >
                  {member.name}
                </h4>

                {/* ROLE */}
                <p
                  style={{
                    color: "#c8a84b",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}