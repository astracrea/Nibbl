import { useRef } from "react";
import { motion, useInView } from "motion/react";

const CRAVINGS = [
  { label: "cheap eats 🤑", size: "xl", color: "#FF5C28", bg: "rgba(255,92,40,0.12)", border: "rgba(255,92,40,0.25)", rotate: -3, x: "0%", y: "0%" },
  { label: "late night food 🌙", size: "md", color: "#FFA726", bg: "rgba(255,167,38,0.1)", border: "rgba(255,167,38,0.2)", rotate: 4, x: "5%", y: "0%" },
  { label: "high protein 💪", size: "sm", color: "#B5CC1A", bg: "rgba(181,204,26,0.1)", border: "rgba(181,204,26,0.2)", rotate: -6, x: "0%", y: "0%" },
  { label: "chai tapri ☕", size: "lg", color: "#FFA726", bg: "rgba(255,167,38,0.1)", border: "rgba(255,167,38,0.2)", rotate: 3, x: "0%", y: "0%" },
  { label: "date spots 🕯️", size: "md", color: "#FF5C28", bg: "rgba(255,92,40,0.1)", border: "rgba(255,92,40,0.2)", rotate: -4, x: "0%", y: "0%" },
  { label: "hidden gems 💎", size: "xl", color: "#B5CC1A", bg: "rgba(181,204,26,0.1)", border: "rgba(181,204,26,0.2)", rotate: 6, x: "0%", y: "0%" },
  { label: "after office 🍻", size: "sm", color: "#FF5C28", bg: "rgba(255,92,40,0.1)", border: "rgba(255,92,40,0.2)", rotate: -2, x: "0%", y: "0%" },
  { label: "vegan friendly 🥦", size: "md", color: "#B5CC1A", bg: "rgba(181,204,26,0.1)", border: "rgba(181,204,26,0.2)", rotate: 5, x: "0%", y: "0%" },
  { label: "under ₹200 💸", size: "lg", color: "#FFA726", bg: "rgba(255,167,38,0.1)", border: "rgba(255,167,38,0.2)", rotate: -5, x: "0%", y: "0%" },
  { label: "street food 🛒", size: "xl", color: "#FF5C28", bg: "rgba(255,92,40,0.12)", border: "rgba(255,92,40,0.25)", rotate: 2, x: "0%", y: "0%" },
  { label: "sunday brunch 🥞", size: "sm", color: "#FFA726", bg: "rgba(255,167,38,0.1)", border: "rgba(255,167,38,0.2)", rotate: -7, x: "0%", y: "0%" },
  { label: "quick bites ⚡", size: "md", color: "#B5CC1A", bg: "rgba(181,204,26,0.1)", border: "rgba(181,204,26,0.2)", rotate: 4, x: "0%", y: "0%" },
];

const SIZE_MAP = {
  sm: { fontSize: "0.82rem", px: "14px", py: "8px" },
  md: { fontSize: "0.95rem", px: "18px", py: "10px" },
  lg: { fontSize: "1.1rem", px: "22px", py: "12px" },
  xl: { fontSize: "1.3rem", px: "28px", py: "14px" },
};

function CravingTag({
  label, size, color, bg, border, rotate, delay,
}: (typeof CRAVINGS)[0] & { delay: number }) {
  const s = SIZE_MAP[size as keyof typeof SIZE_MAP];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.08, rotate: 0, zIndex: 10 }}
      className="inline-flex items-center rounded-full cursor-default select-none"
      style={{
        background: bg,
        border: `1px solid ${border}`,
        color,
        fontFamily: "'Syne', sans-serif",
        fontWeight: 600,
        fontSize: s.fontSize,
        padding: `${s.py} ${s.px}`,
        transform: `rotate(${rotate}deg)`,
        boxShadow: `0 2px 16px ${bg}`,
        transition: "transform 0.25s ease",
        position: "relative",
        zIndex: 1,
      }}
    >
      {label}
    </motion.div>
  );
}

export function CravingsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="cravings"
      style={{ background: "#0B0A09", borderTop: "1px solid rgba(255,255,255,0.04)" }}
      className="py-24 md:py-36 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.78rem",
              fontWeight: 500,
              color: "#FFA726",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            A shift in thinking
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              color: "#F2EFE8",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            People don't search restaurants.
            <br />
            <span style={{ color: "#FFA726" }}>They search cravings.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="mt-5 max-w-lg mx-auto"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#55534F",
              fontSize: "1rem",
              lineHeight: 1.7,
            }}
          >
            Nibbl understands how you actually think about food — not by category, but by feeling.
          </motion.p>
        </div>

        {/* Tags scattered layout */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 items-center" style={{ maxWidth: 840, margin: "0 auto" }}>
          {CRAVINGS.map((craving, i) => (
            <CravingTag key={craving.label} {...craving} delay={0.05 * i} />
          ))}
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: "#55534F",
            fontSize: "0.88rem",
          }}
        >
          Search how you feel. Nibbl figures out the rest.
        </motion.p>
      </div>
    </section>
  );
}
