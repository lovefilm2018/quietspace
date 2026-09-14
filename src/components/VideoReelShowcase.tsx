import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Sparkles, ChevronRight, Check } from "lucide-react";
import { assetUrl } from "@/lib/assets";

interface VideoScene {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  videoSrc: string;
  tag: string;
}

const scenes: VideoScene[] = [
  {
    id: "reel",
    title: "Complete Kitchen Reel",
    subtitle: "Sussex Home Transformation",
    description: "A continuous flow across divided cutlery, designated utensil storage, and balanced servingware.",
    videoSrc: assetUrl("videos/quiet-space-reel.mp4"),
    tag: "Continuous Loop",
  },
  {
    id: "cutlery",
    title: "Cutlery & Flatware",
    subtitle: "Intuitive Everyday Drawers",
    description: "Precision compartmentalisation for knives, forks, and spoons so every meal prep begins with ease.",
    videoSrc: assetUrl("videos/clip-cutlery.mp4"),
    tag: "Drawer Systems",
  },
  {
    id: "utensils",
    title: "Cooking Utensils",
    subtitle: "Sub-Hob Organisation",
    description: "Spacious tiered drawers keeping whisks, spatulas, and baking tools right where they are needed.",
    videoSrc: assetUrl("videos/clip-utensils.mp4"),
    tag: "Prep Station",
  },
  {
    id: "servingware",
    title: "Island & Servingware",
    subtitle: "Considered Cabinet Storage",
    description: "Accessible lower island cupboards designed for heavy platters, ceramics, and entertaining pieces.",
    videoSrc: assetUrl("videos/clip-island.mp4"),
    tag: "Cabinet Reset",
  },
];

export function VideoReelShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeScene = scenes[activeIdx];

  // When changing tabs, ensure the video starts playing
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  }, [activeIdx]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="section-wrap" style={{ paddingTop: "72px", paddingBottom: "110px" }}>
      <div className="section-heading-row" style={{ marginBottom: "42px" }}>
        <div>
          <p className="eyebrow"><span /> Real Homes • Real Results</p>
          <h2 style={{ fontSize: "clamp(2.5rem, 4.5vw, 4.2rem)" }}>
            Quiet order, <em>in motion.</em>
          </h2>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#61726a", fontSize: "12px" }}>
          <Sparkles size={16} color="#b5883b" /> Sussex kitchen organisation
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "clamp(24px, 4vw, 48px)",
          alignItems: "center",
          background: "#f3f0e8",
          borderRadius: "6px",
          border: "1px solid #d9d6c9",
          padding: "clamp(20px, 4vw, 44px)",
        }}
      >
        {/* Video Player Card */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "420px",
            margin: "0 auto",
            aspectRatio: "9 / 16",
            maxHeight: "680px",
            borderRadius: "6px",
            overflow: "hidden",
            boxShadow: "0 12px 34px rgba(36, 77, 79, 0.12)",
            background: "#244d4f",
          }}
        >
          <video
            ref={videoRef}
            key={activeScene.videoSrc}
            src={activeScene.videoSrc}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />

          {/* Quiet Space Editorial Brand Overlay Tint */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background: "linear-gradient(180deg, rgba(36,77,79,0.08) 0%, rgba(36,77,79,0.38) 100%)",
            }}
          />

          {/* Top Scene Tag */}
          <div
            style={{
              position: "absolute",
              top: "16px",
              left: "16px",
              background: "rgba(248, 246, 240, 0.92)",
              backdropFilter: "blur(6px)",
              color: "#244d4f",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "5px 12px",
              borderRadius: "3px",
              border: "1px solid rgba(45,98,100,0.2)",
            }}
          >
            {activeScene.tag}
          </div>

          {/* Bottom Controls & Info */}
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              left: "16px",
              right: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
            }}
          >
            <div>
              <p
                style={{
                  margin: 0,
                  color: "#fffdf8",
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                  textShadow: "0 1px 3px rgba(0,0,0,0.4)",
                }}
              >
                {activeScene.title}
              </p>
              <span
                style={{
                  color: "#d8cab8",
                  fontSize: "11px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {activeScene.subtitle}
              </span>
            </div>

            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                background: "rgba(248, 246, 240, 0.95)",
                border: "1px solid #2d6264",
                color: "#244d4f",
                display: "grid",
                placeItems: "center",
                cursor: "pointer",
                transition: "transform 0.15s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} style={{ marginLeft: "2px" }} />}
            </button>
          </div>
        </div>

        {/* Scene Selection & Descriptions */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <span
              style={{
                color: "#b5883b",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Interactive Showcase
            </span>
            <h3
              style={{
                fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)",
                margin: "6px 0 12px",
                color: "#244d4f",
              }}
            >
              Every tool has its home.
            </h3>
            <p
              style={{
                color: "#576662",
                fontSize: "14px",
                lineHeight: "1.75",
                margin: "0 0 20px",
              }}
            >
              Watch how thoughtful zones and tailored compartmentalisation turn busy kitchen workspaces into calming, frictionless rituals.
            </p>
          </div>

          {/* Clickable Scene Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {scenes.map((scene, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={scene.id}
                  onClick={() => setActiveIdx(idx)}
                  style={{
                    textAlign: "left",
                    padding: "14px 18px",
                    borderRadius: "4px",
                    background: isActive ? "#2d6264" : "#fbf9f4",
                    color: isActive ? "#fffdf8" : "#244d4f",
                    border: `1px solid ${isActive ? "#2d6264" : "#d9d6c9"}`,
                    cursor: "pointer",
                    transition: "all 0.18s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "14px",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.borderColor = "#2d6264";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.borderColor = "#d9d6c9";
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "3px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: 700,
                          letterSpacing: "0.12em",
                          color: isActive ? "#d9b974" : "#b5883b",
                          textTransform: "uppercase",
                        }}
                      >
                        0{idx + 1}
                      </span>
                      <strong style={{ fontSize: "14px", fontWeight: 600 }}>{scene.title}</strong>
                    </div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "12px",
                        lineHeight: "1.5",
                        color: isActive ? "#dce6df" : "#62706a",
                      }}
                    >
                      {scene.description}
                    </p>
                  </div>
                  <div style={{ flexShrink: 0, opacity: isActive ? 1 : 0.4 }}>
                    {isActive ? <Check size={18} color="#d9b974" /> : <ChevronRight size={18} />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
