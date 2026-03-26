import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { MapPin, SlidersHorizontal, Bookmark, Star, Zap } from "lucide-react";

const MOCK_SPOTS = [
  { name: "Bademiya", type: "Street Food", dist: "0.3 km", rating: "4.8", emoji: "🍖", tag: "Hidden Gem" },
  { name: "The Bombay Canteen", type: "Modern Indian", dist: "1.2 km", rating: "4.6", emoji: "🍽️", tag: "Trending" },
  { name: "Leopold Café", type: "Café & Bar", dist: "0.6 km", rating: "4.4", emoji: "☕", tag: "Iconic" },
];

export function MeetNibblSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="meet-nibbl"
      style={{ background: "var(--n-bg-alt)", borderTop: "1px solid var(--n-border-light)", transition: "background 0.4s ease" }}
      className="py-24 md:py-36 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: App preview mockup */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div
              className="relative mx-auto rounded-3xl overflow-hidden"
              style={{
                width: "min(360px, 90vw)",
                border: "1px solid var(--n-border-strong)",
                background: "var(--n-bg-deep)",
                boxShadow: `0 40px 80px var(--n-shadow), 0 0 0 1px var(--n-glass-card)`,
              }}
            >
              <div
                className="flex items-center justify-between px-5 pt-4 pb-2"
                style={{ background: "var(--n-bg-deep)" }}
              >
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "var(--n-heading)", fontSize: "1.1rem" }}>
                  Nibbl
                </span>
                <div className="flex items-center gap-2">
                  <div
                    className="rounded-full px-3 py-1 flex items-center gap-1"
                    style={{ background: "rgba(255,92,40,0.15)", border: "1px solid rgba(255,92,40,0.25)" }}
                  >
                    <MapPin size={10} style={{ color: "#FF5C28" }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", color: "#FF5C28" }}>Colaba, Mumbai</span>
                  </div>
                </div>
              </div>

              <div className="px-4 py-2">
                <div
                  className="rounded-xl px-4 py-3 flex items-center gap-2 mb-3"
                  style={{ background: "var(--n-glass-card)", border: "1px solid var(--n-border-med)" }}
                >
                  
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "var(--n-muted)" }}>
                    I'm craving something...
                  </span>
                </div>
                <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
                  {["All", "Street Food", "Cafés", "Cheap Eats", "Late Night"].map((f, i) => (
                    <div
                      key={f}
                      className="rounded-full px-3 py-1 whitespace-nowrap flex-shrink-0"
                      style={{
                        background: i === 0 ? "#FF5C28" : "var(--n-glass-card)",
                        border: i === 0 ? "none" : "1px solid var(--n-border)",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.65rem",
                        fontWeight: i === 0 ? 600 : 400,
                        color: i === 0 ? "#fff" : "var(--n-body)",
                      }}
                    >
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="mx-4 mb-3 rounded-xl overflow-hidden relative"
                style={{
                  height: 130,
                  background: "var(--n-bg-card2)",
                  border: "1px solid var(--n-border)",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                      linear-gradient(var(--n-grid-line-strong) 1px, transparent 1px),
                      linear-gradient(90deg, var(--n-grid-line-strong) 1px, transparent 1px)
                    `,
                    backgroundSize: "28px 28px",
                  }}
                />
                {[
                  { l: "30%", t: "35%", c: "#FF5C28" },
                  { l: "55%", t: "55%", c: "#FFA726" },
                  { l: "70%", t: "25%", c: "#B5CC1A" },
                  { l: "20%", t: "65%", c: "#FF5C28" },
                ].map((pin, i) => (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      left: pin.l, top: pin.t,
                      width: 12, height: 12,
                      borderRadius: "50% 50% 50% 0",
                      transform: "rotate(-45deg)",
                      background: pin.c,
                      boxShadow: `0 0 8px ${pin.c}80`,
                    }}
                  />
                ))}
                <div
                  className="absolute"
                  style={{
                    left: "48%", top: "48%",
                    width: 10, height: 10,
                    borderRadius: "50%",
                    background: "var(--n-heading)",
                    border: "2px solid var(--n-bg-deep)",
                    boxShadow: "0 0 12px rgba(242,239,232,0.4)",
                    transform: "translate(-50%,-50%)",
                  }}
                />
              </div>

              <div className="px-4 pb-6 flex flex-col gap-2">
                {MOCK_SPOTS.map((spot, i) => (
                  <motion.div
                    key={spot.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.12 }}
                    className="flex items-center gap-3 rounded-xl p-3"
                    style={{
                      background: "var(--n-glass-light)",
                      border: "1px solid var(--n-border)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--n-glass-strong)", fontSize: "1.2rem" }}
                    >
                      {spot.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, color: "var(--n-heading)", fontSize: "0.8rem" }}>
                        {spot.name}
                      </p>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--n-muted)", fontSize: "0.67rem" }}>
                        {spot.type} · {spot.dist}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div
                        className="rounded-full flex items-center justify-center"
                        style={{
                          padding: "4px 10px",
                          background: i === 0 ? "rgba(181,204,26,0.15)" : i === 1 ? "rgba(255,92,40,0.15)" : "rgba(255,167,38,0.15)",
                          border: `1px solid ${i === 0 ? "rgba(181,204,26,0.3)" : i === 1 ? "rgba(255,92,40,0.3)" : "rgba(255,167,38,0.3)"}`,
                        }}
                      >
                        <span style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.58rem",
                          fontWeight: 600,
                          lineHeight: 1,
                          display: "block",
                          color: i === 0 ? "#B5CC1A" : i === 1 ? "#FF5C28" : "#FFA726",
                        }}>
                          {spot.tag}
                        </span>
                      </div>
                      <div className="flex items-center gap-0.5">
                        <Star size={8} fill="#FFA726" stroke="#FFA726" />
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", color: "var(--n-body)" }}>{spot.rating}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -right-4 top-1/3 rounded-2xl px-4 py-3 hidden md:block"
              style={{
                background: "rgba(255,92,40,0.12)",
                border: "1px solid rgba(255,92,40,0.25)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="flex items-center gap-2">
                <Zap size={14} style={{ color: "#FF5C28" }} />
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "var(--n-heading)", fontSize: "0.78rem" }}>
                  Mood-matched
                </span>
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", color: "var(--n-body)", marginTop: 2 }}>
                Results tailored to you
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Text */}
          <div className="order-1 lg:order-2">
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.78rem",
                fontWeight: 500,
                color: "var(--n-accent-lime)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              The Product
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 }}
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                color: "var(--n-heading)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Meet Nibbl.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="mt-5"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "var(--n-body)",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                maxWidth: 440,
              }}
            >
              Nibbl helps you discover food based on how you feel, where you are,
              and what you actually want to eat. Not what's "near you."
            </motion.p>

            <div className="mt-10 flex flex-col gap-5">
              {[
                { icon: Zap, label: "Mood-based discovery", desc: "Tell us you're feeling cheap, spicy, or romantic — we'll find it." },
                { icon: MapPin, label: "Hyperlocal results", desc: "Street-level accuracy. Chai tapris, not just restaurants." },
                { icon: SlidersHorizontal, label: "Smart filters", desc: "Budget, diet, vibe, time of day — you're in control." },
                { icon: Bookmark, label: "Save & revisit", desc: "Build lists of places you want to try. Never forget a gem." },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,92,40,0.1)", border: "1px solid rgba(255,92,40,0.2)" }}
                  >
                    <item.icon size={16} style={{ color: "#FF5C28" }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "var(--n-heading)", fontSize: "0.95rem" }}>
                      {item.label}
                    </p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--n-muted)", fontSize: "0.83rem", lineHeight: 1.5, marginTop: 2 }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}