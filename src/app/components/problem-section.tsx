import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Search, MessageSquare, MapPin, Star } from "lucide-react";

const PROBLEMS = [
  {
    icon: Search,
    title: "Cluttered search results",
    desc: "Hundreds of options, none of them what you actually wanted.",
    color: "#FF5C28",
    x: "0%",
    delay: 0,
  },
  {
    icon: Star,
    title: "Unreliable reviews",
    desc: "4.2 stars could mean anything. Paid reviews, old photos, dead spots.",
    color: "#FFA726",
    x: "5%",
    delay: 0.15,
  },
  {
    icon: MapPin,
    title: "Hidden gems stay hidden",
    desc: "The best street food never shows up on any app. You only know if you know.",
    color: "#B5CC1A",
    x: "0%",
    delay: 0.3,
  },
  {
    icon: MessageSquare,
    title: "Asking friends. Again.",
    desc: "\"Any good spots near Andheri?\" — the text you've sent and received a hundred times.",
    color: "#FF5C28",
    x: "5%",
    delay: 0.45,
  },
];

function ProblemCard({ icon: Icon, title, desc, color, delay }: (typeof PROBLEMS)[0] & { delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className="flex items-start gap-4 p-5 rounded-2xl group cursor-default"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.06)",
        transition: "background 0.2s",
      }}
      whileHover={{ background: "rgba(255,255,255,0.04)" } as any}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: `${color}15`, border: `1px solid ${color}30` }}
      >
        <Icon size={18} style={{ color }} />
      </div>
      <div>
        <h3
          className="mb-1"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            color: "#F2EFE8",
            fontSize: "1rem",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: "#8A8780",
            fontSize: "0.88rem",
            lineHeight: 1.6,
          }}
        >
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

export function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      style={{ background: "#0E0D0B", borderTop: "1px solid rgba(255,255,255,0.04)" }}
      className="py-24 md:py-36 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Headline */}
          <div ref={ref} className="lg:sticky lg:top-32">
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.78rem",
                fontWeight: 500,
                color: "#FF5C28",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              The Problem
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 }}
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                color: "#F2EFE8",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Finding good food is{" "}
              <span style={{ color: "#8A8780", fontStyle: "italic" }}>harder</span>
              <br />
              than it should be.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="mt-6"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "#55534F",
                fontSize: "1rem",
                lineHeight: 1.7,
                maxWidth: 360,
              }}
            >
              The tools we use for food discovery were built for scale, not taste.
              They show you what's popular, not what's good.
            </motion.p>

            {/* Visual: Messy map hint */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.06)", maxWidth: 340 }}
            >
              <div
                className="p-4"
                style={{ background: "#161512", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 opacity-70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 opacity-70" />
                  <div
                    className="ml-2 flex-1 rounded-full px-3 py-1"
                    style={{ background: "rgba(255,255,255,0.06)", fontSize: "0.65rem", color: "#55534F", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    "restaurants near me"
                  </div>
                </div>
                {/* Fake cluttered map */}
                <div className="relative rounded-lg overflow-hidden" style={{ height: 120, background: "#1E1C18" }}>
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-20">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div key={i} style={{ border: "0.5px solid rgba(255,255,255,0.3)" }} />
                    ))}
                  </div>
                  {/* Tons of red pins - representing clutter */}
                  {Array.from({ length: 18 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute"
                      style={{
                        left: `${8 + (i * 19) % 85}%`,
                        top: `${10 + (i * 17) % 75}%`,
                        width: 8,
                        height: 8,
                        borderRadius: "50% 50% 50% 0",
                        transform: "rotate(-45deg)",
                        background: "#e05555",
                        boxShadow: "0 0 4px rgba(224,85,85,0.5)",
                      }}
                    />
                  ))}
                  <div
                    className="absolute bottom-2 right-2 rounded-lg px-2 py-1"
                    style={{
                      background: "rgba(11,10,9,0.85)",
                      fontSize: "0.6rem",
                      color: "#8A8780",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    247 results
                  </div>
                </div>
              </div>
              <div className="px-4 py-3" style={{ background: "#161512" }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "#55534F" }}>
                  Overwhelming. Impersonal. Not what you actually wanted.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Problem cards */}
          <div className="flex flex-col gap-4">
            {PROBLEMS.map((p) => (
              <ProblemCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
