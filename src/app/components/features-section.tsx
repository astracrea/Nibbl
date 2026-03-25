import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Smile, Gem, Navigation, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Images from Unsplash
const IMG_STREET_FOOD = "https://images.unsplash.com/photo-1761662826177-a50286fe7eef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBmb29kJTIwbmlnaHQlMjBtYXJrZXQlMjB2ZW5kb3IlMjBpbmRpYXxlbnwxfHx8fDE3NzM5ODQ3MTF8MA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_CAFE = "https://images.unsplash.com/photo-1589221475596-7133b597dc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwY2FmZSUyMGNvZmZlZSUyMGxhdHRlJTIwZmxhdCUyMGxheXxlbnwxfHx8fDE3NzM5ODQ3MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_RAMEN = "https://images.unsplash.com/photo-1764158156827-0df193e9783c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpY2lvdXMlMjBzdHJlZXQlMjBmb29kJTIwYm93bCUyMHJhbWVuJTIwbm9vZGxlc3xlbnwxfHx8fDE3NzM5ODQ3MTN8MA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_CHAAT = "https://images.unsplash.com/photo-1486548730767-5c679e8eda6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGljeSUyMGluZGlhbiUyMGNoYWF0JTIwc3RyZWV0JTIwZm9vZCUyMGNvbG9yZnVsfGVufDF8fHx8MTc3Mzk4NDcxNnww&ixlib=rb-4.1.0&q=80&w=1080";

const MOODS = [
  { label: "Spicy & bold 🌶️", active: true },
  { label: "Comfort food 🍜", active: false },
  { label: "Light & healthy 🥗", active: false },
  { label: "Sweet treat 🍮", active: false },
  { label: "Quick bite ⚡", active: false },
];

function FeatureA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      id="features"
      className="py-20 md:py-28 px-6"
      style={{ background: "#0B0A09" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="flex items-center gap-2 mb-4"
          >
            <Smile size={14} style={{ color: "#FF5C28" }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#FF5C28", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Feature 01
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#F2EFE8",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Discovery that starts with a mood.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="mt-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#8A8780",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: 400,
            }}
          >
            Not "Italian restaurants nearby." Just "I'm feeling something spicy and cheap." 
            Nibbl maps cravings to places worth visiting.
          </motion.p>

          {/* Mood selector UI */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.36 }}
            className="mt-8 flex flex-col gap-2"
          >
            {MOODS.map((m, i) => (
              <motion.div
                key={m.label}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 rounded-xl px-4 py-3 cursor-default"
                style={{
                  background: m.active ? "rgba(255,92,40,0.1)" : "rgba(255,255,255,0.025)",
                  border: m.active ? "1px solid rgba(255,92,40,0.3)" : "1px solid rgba(255,255,255,0.05)",
                  transition: "all 0.2s",
                }}
              >
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: m.active ? "#FF5C28" : "#55534F" }}
                />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.88rem",
                    color: m.active ? "#F2EFE8" : "#8A8780",
                    fontWeight: m.active ? 500 : 400,
                  }}
                >
                  {m.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden relative" style={{ aspectRatio: "4/3" }}>
            <ImageWithFallback
              src={IMG_RAMEN}
              alt="Mood based food discovery"
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.65)" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(11,10,9,0.8) 0%, transparent 50%)" }}
            />
            {/* Floating UI element */}
            <div
              className="absolute bottom-6 left-6 right-6 rounded-2xl p-4"
              style={{ background: "rgba(14,13,11,0.85)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", color: "#55534F", marginBottom: 4 }}>Matching your vibe ⚡</p>
              <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "#F2EFE8", fontSize: "0.95rem" }}>14 spicy spots nearby</p>
              <div className="flex items-center gap-2 mt-2">
                {["🍜", "🌶️", "🍱", "🍛"].map((e, i) => (
                  <div key={i} className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,92,40,0.15)", border: "1px solid rgba(255,92,40,0.2)", fontSize: "0.9rem" }}>{e}</div>
                ))}
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "#8A8780", marginLeft: 4 }}>+10 more</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function FeatureB() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="py-20 md:py-28 px-6" style={{ background: "#0E0D0B" }}>
      <div className="max-w-6xl mx-auto">
        {/* Full-bleed image with editorial text overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75 }}
          className="relative rounded-3xl overflow-hidden"
          style={{ minHeight: 440 }}
        >
          <ImageWithFallback
            src={IMG_STREET_FOOD}
            alt="Hidden gems and street food"
            className="w-full h-full object-cover absolute inset-0"
            style={{ filter: "brightness(0.45)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(120deg, rgba(11,10,9,0.85) 0%, transparent 60%)" }}
          />

          <div className="relative z-10 p-8 md:p-14 flex flex-col justify-end h-full" style={{ minHeight: 440 }}>
            <div className="max-w-lg">
              <div className="flex items-center gap-2 mb-4">
                <Gem size={14} style={{ color: "#B5CC1A" }} />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#B5CC1A", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Feature 02
                </span>
              </div>

              <h2
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "#F2EFE8",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                The spots Google Maps
                <br />
                <span style={{ color: "#B5CC1A" }}>won't show you.</span>
              </h2>

              <p
                className="mt-4"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "rgba(242,239,232,0.65)",
                  fontSize: "1rem",
                  lineHeight: 1.65,
                }}
              >
                Nibbl surfaces street stalls, tapris, hole-in-the-wall joints, and
                neighborhood institutions that never made it onto mainstream apps.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {["Tapri culture", "Street carts", "Family-run joints", "Cash-only gems"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full px-3 py-1.5"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.78rem",
                      background: "rgba(181,204,26,0.12)",
                      border: "1px solid rgba(181,204,26,0.25)",
                      color: "#B5CC1A",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function FeatureC() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="py-20 md:py-28 px-6" style={{ background: "#0B0A09" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Visual: map with area highlight */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div
            className="rounded-3xl overflow-hidden relative"
            style={{
              aspectRatio: "5/4",
              background: "#161512",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {/* Grid map */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />

            {/* Area highlight polygon */}
            <div
              className="absolute rounded-2xl opacity-20"
              style={{
                left: "25%", top: "20%",
                width: "50%", height: "45%",
                background: "#FF5C28",
                border: "1.5px solid #FF5C28",
              }}
            />

            {/* Food pins */}
            {[
              { l: "35%", t: "35%", c: "#FF5C28", label: "★ 4.9" },
              { l: "52%", t: "28%", c: "#FF5C28", label: "★ 4.7" },
              { l: "60%", t: "48%", c: "#FF5C28", label: "★ 4.8" },
              { l: "40%", t: "55%", c: "#FF5C28", label: "★ 4.6" },
              { l: "15%", t: "65%", c: "#FFA726", label: "★ 4.5" },
              { l: "75%", t: "20%", c: "#B5CC1A", label: "★ 4.8" },
              { l: "80%", t: "70%", c: "#FFA726", label: "★ 4.4" },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.07 }}
                className="absolute flex flex-col items-center"
                style={{ left: p.l, top: p.t, transform: "translate(-50%, -100%)" }}
              >
                <div
                  className="rounded-full px-2 py-0.5 mb-0.5"
                  style={{
                    background: "rgba(14,13,11,0.9)",
                    border: `1px solid ${p.c}40`,
                    fontSize: "0.5rem",
                    color: p.c,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                  }}
                >
                  {p.label}
                </div>
                <div
                  style={{
                    width: 8, height: 8,
                    borderRadius: "50% 50% 50% 0",
                    transform: "rotate(-45deg)",
                    background: p.c,
                    boxShadow: `0 0 8px ${p.c}60`,
                  }}
                />
              </motion.div>
            ))}

            {/* Area label */}
            <div
              className="absolute rounded-xl px-3 py-1.5"
              style={{
                left: "28%", top: "22%",
                background: "rgba(255,92,40,0.15)",
                border: "1px solid rgba(255,92,40,0.35)",
              }}
            >
              <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.7rem", color: "#FF5C28" }}>Bandra West</p>
            </div>

            {/* Legend */}
            <div
              className="absolute bottom-4 left-4 right-4 rounded-xl p-3"
              style={{ background: "rgba(11,10,9,0.9)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "#F2EFE8", fontSize: "0.8rem" }}>
                Best of Bandra
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", color: "#55534F", fontSize: "0.65rem" }}>7 curated spots · Updated this week</p>
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="flex items-center gap-2 mb-4"
          >
            <Navigation size={14} style={{ color: "#FFA726" }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#FFA726", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Feature 03
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#F2EFE8",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Your city,
            <br />
            block by block.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="mt-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#8A8780",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: 400,
            }}
          >
            Nibbl goes hyperlocal. Explore curated area lists — "Best spots in Bandra,"
            "Late night Colaba," "Dharavi's finest" — discovered by people who actually live there.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.36 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {["Bandra West 🌊", "Colaba 🏛️", "Andheri East ✈️", "Fort 🏰", "Dadar 🌸", "Dharavi 🤝"].map((area) => (
              <motion.div
                key={area}
                whileHover={{ scale: 1.05 }}
                className="rounded-full px-3 py-1.5 cursor-default"
                style={{
                  background: "rgba(255,167,38,0.08)",
                  border: "1px solid rgba(255,167,38,0.18)",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.82rem",
                  color: "#FFA726",
                }}
              >
                {area}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <>
      <FeatureA />
      <FeatureB />
      <FeatureC />
    </>
  );
}