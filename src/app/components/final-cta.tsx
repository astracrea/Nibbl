import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { WaitlistForm } from "./waitlist-form";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const IMG_CITY = "https://images.unsplash.com/photo-1619204661697-899026420f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwbWFwJTIwY2l0eSUyMGFlcmlhbCUyMGV4cGxvcmF0aW9uJTIwdXJiYW58ZW58MXx8fHwxNzczOTg0NzE4fDA&ixlib=rb-4.1.0&q=80&w=1080";

export function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="final-cta"
      className="relative py-32 md:py-44 px-6 overflow-hidden"
      style={{ background: "var(--n-bg-alt)", borderTop: "1px solid var(--n-border-light)", transition: "background 0.4s ease" }}
    >
      <div className="absolute inset-0">
        <ImageWithFallback
          src={IMG_CITY}
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity: 0.12, filter: "saturate(0.3)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, var(--n-cta-overlay-start) 0%, var(--n-cta-overlay-end) 70%)" }}
        />
      </div>

      <div
        className="absolute"
        style={{
          width: 600, height: 600, top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(255,92,40,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center" ref={ref}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6"
          style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", fontWeight: 500,
            color: "#FF5C28", letterSpacing: "0.08em", textTransform: "uppercase",
          }}
        >
          Be the first to explore
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.12 }}
          style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
            color: "var(--n-heading)", lineHeight: 1.05, letterSpacing: "-0.03em",
          }}
        >
          Never wonder where
          <br />
          to eat <span style={{ color: "#FF5C28" }}>again.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.26 }}
          className="mt-5 mb-10"
          style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--n-body)", fontSize: "1.05rem", lineHeight: 1.7 }}
        >
          Be the first to discover your city through food.
          <br />
          Join the waitlist — early access, coming soon.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.38 }}
        >
          <WaitlistForm variant="cta" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center gap-4 mt-12"
        >
          {["🍜", "☕", "🌮", "🍖", "🥘", "🍱", "🫖"].map((emoji, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
              style={{ fontSize: "1.4rem", opacity: 0.5 }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}