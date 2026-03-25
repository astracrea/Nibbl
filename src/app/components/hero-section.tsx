import { useRef } from "react";
import { motion } from "motion/react";
import { WaitlistForm } from "./waitlist-form";
import { ChevronDown, MapPin, Star } from "lucide-react";

const FOOD_MARKERS = [
  { x: "5%", y: "15%", label: "Irani Café", emoji: "☕", delay: 0, color: "#FFA726" },
  { x: "80%", y: "12%", label: "Bademiya", emoji: "🍖", delay: 0.3, color: "#FF5C28" },
  { x: "78%", y: "65%", label: "Chai Tapri", emoji: "🍵", delay: 0.6, color: "#B5CC1A" },
  { x: "8%", y: "75%", label: "Sardar Pav Bhaji", emoji: "🥘", delay: 0.9, color: "#FF5C28" },
  { x: "12%", y: "58%", label: "Lucky Rest.", emoji: "🌙", delay: 1.1, color: "#FFA726" },
  { x: "82%", y: "82%", label: "Cafe Mondegar", emoji: "🎵", delay: 0.5, color: "#B5CC1A" },
  { x: "6%", y: "35%", label: "Hidden Gem", emoji: "💎", delay: 0.2, color: "#FF5C28" },
];

function FloatingMarker({ x, y, label, emoji, delay, color }: (typeof FOOD_MARKERS)[0]) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 12 }}
      animate={{ opacity: 0.75, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay + 0.8, ease: "easeOut" }}
      className="absolute px-[22px] py-[0px]"
      style={{ left: x, top: y }}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <div
          className="flex items-center gap-2 rounded-full px-3 py-1.5 cursor-default select-none"
          style={{
            background: "rgba(22,21,18,0.9)",
            border: `1px solid ${color}40`,
            boxShadow: `0 4px 20px rgba(0,0,0,0.4), 0 0 0 1px ${color}20`,
            backdropFilter: "blur(8px)",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ fontSize: "0.85rem" }}>{emoji}</span>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.72rem",
              fontWeight: 500,
              color: "#F2EFE8",
            }}
          >
            {label}
          </span>
          <div className="flex items-center gap-0.5 ml-0.5">
            <Star size={8} fill={color} stroke={color} />
          </div>
        </div>
        {/* Pin tail */}
        <div
          className="absolute left-1/2 -bottom-2 w-0.5 h-2"
          style={{ background: `${color}60`, transform: "translateX(-50%)" }}
        />
        <div
          className="absolute left-1/2 -bottom-2.5 w-1.5 h-1.5 rounded-full"
          style={{ background: color, transform: "translateX(-50%)", boxShadow: `0 0 8px ${color}` }}
        />
      </motion.div>
    </motion.div>
  );
}

export function HeroSection() {
  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "#0B0A09" }}
    >
      {/* Map grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glow clusters */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            width: 500,
            height: 500,
            top: "5%",
            right: "10%",
            background: "radial-gradient(circle, rgba(255,92,40,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 400,
            height: 400,
            bottom: "15%",
            left: "5%",
            background: "radial-gradient(circle, rgba(255,167,38,0.07) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 300,
            height: 300,
            top: "40%",
            left: "40%",
            background: "radial-gradient(circle, rgba(181,204,26,0.05) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Floating food markers (hidden on small screens) */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none">
        {FOOD_MARKERS.map((m) => (
          <FloatingMarker key={m.label} {...m} />
        ))}
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0B0A09)" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 pt-32 pb-20 text-center max-w-4xl mx-auto w-full">
        {/* Pre-label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2 rounded-full px-4 py-1.5 mb-8"
          style={{
            background: "rgba(255,92,40,0.1)",
            border: "1px solid rgba(255,92,40,0.25)",
          }}
        >
          <MapPin size={12} style={{ color: "#FF5C28" }} />
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.78rem",
              fontWeight: 500,
              color: "#FF5C28",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Food discovery, reimagined
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mb-6"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 800,
            color: "#F2EFE8",
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
          }}
        >
          Discover the best
          <br />
          <span style={{ color: "#FF5C28" }}>food spots</span> around you.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mb-10 max-w-xl"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            color: "#8A8780",
            lineHeight: 1.65,
            fontWeight: 400,
          }}
        >
          Explore hidden gems, street food, cafes, and local favorites — based
          on your mood, budget, and location.
        </motion.p>

        {/* Waitlist form */}
        <motion.div
          id="waitlist"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.72 }}
          className="w-full max-w-md"
        >
          <WaitlistForm variant="hero" />
        </motion.div>

        {/* Secondary CTA */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          onClick={scrollToFeatures}
          className="flex flex-col items-center gap-2 mt-14 group"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.82rem",
              color: "#55534F",
              letterSpacing: "0.04em",
            }}
          >
            Explore how it works
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={18} style={{ color: "#55534F" }} />
          </motion.div>
        </motion.button>
      </div>

      {/* Bottom stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="relative z-10 flex items-center justify-center gap-8 md:gap-16 pb-8 flex-wrap px-6"
      >
        {[
          { num: "500+", label: "Early signups" },
          { num: "12", label: "Cities at launch" },
          { num: "10k+", label: "Spots mapped" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "1.4rem",
                color: "#F2EFE8",
              }}
            >
              {stat.num}
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.78rem",
                color: "#55534F",
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}