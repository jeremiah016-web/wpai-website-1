"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Member = {
  name: string;
  role: string;
  image: string;
};

export default function LeadershipGrid({
  members,
}: {
  members: Member[];
}) {
  const [visible, setVisible] = useState(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "28px",
      }}
    >
      {members.map((member, index) => (
        <div
          key={member.name}
          className="leadership-card"
          style={{
            background: "#ffffff",
            borderRadius: "24px",
            padding: "36px 24px",
            textAlign: "center",
            border: "1px solid rgba(226,232,240,0.8)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",

            opacity: visible ? 1 : 0,

            transform: visible
              ? "translateY(0)"
              : "translateY(40px)",

            transition:
              "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",

            transitionDelay: `${index * 0.1}s`,
          }}
        >
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
  );
}