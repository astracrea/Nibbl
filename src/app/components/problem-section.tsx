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
        background: "var(--n-glass)",
        border: "1px solid var(--n-border)",
        transition: "background 0.2s",
      }}
      whileHover={{ background: "var(--n-glass-med)" } as any}
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
            color: "var(--n-heading)",
            fontSize: "1rem",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: "var(--n-body)",
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
      style={{ background: "var(--n-bg-alt)", borderTop: "1px solid var(--n-border-light)", borderColor: "var(--n-border-light)", transition: "background 0.4s ease" }}
      className="py-24 md:py-36 px-6 border-0 border-t"
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
                color: "var(--n-heading)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Finding good food is{" "}
              <span style={{ color: "var(--n-body)", fontStyle: "italic" }}>harder</span>
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
                color: "var(--n-muted)",
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
              className="mt-12 rounded-3xl overflow-hidden w-full"
              style={{ border: "1px solid var(--n-border-med)", maxWidth: 520 }}
            >
              {/* Browser chrome */}
              <div
                className="px-5 pt-4 pb-0 border-0 border-b"
                style={{ background: "var(--n-bg-card)", borderColor: "var(--n-border-light)" }}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 opacity-60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-60" />
                  <div className="w-3 h-3 rounded-full bg-green-500 opacity-60" />
                  <div
                    className="ml-3 flex-1 rounded-full px-4 py-1.5"
                    style={{ background: "var(--n-glass-card)", fontSize: "0.8rem", color: "var(--n-muted)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    "best restaurants near me"
                  </div>
                </div>

                {/* Fake search results list */}
                <div className="rounded-t-xl overflow-hidden" style={{ background: "var(--n-bg-inner)" }}>
                  {/* Map area */}
                  <div className="relative" style={{ height: 180 }}>
                    <div className="absolute inset-0 grid grid-cols-8 grid-rows-5 opacity-15">
                      {Array.from({ length: 40 }).map((_, i) => (
                        <div key={i} style={{ border: `0.5px solid var(--n-grid-cell)` }} />
                      ))}
                    </div>
                    {Array.from({ length: 22 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute"
                        style={{
                          left: `${6 + (i * 23) % 88}%`,
                          top: `${8 + (i * 19) % 78}%`,
                          width: 10, height: 10,
                          borderRadius: "50% 50% 50% 0",
                          transform: "rotate(-45deg)",
                          background: "#e05555",
                          boxShadow: "0 0 6px rgba(224,85,85,0.4)",
                        }}
                      />
                    ))}
                    <div
                      className="absolute bottom-3 right-3 rounded-lg px-3 py-1.5"
                      style={{
                        background: "var(--n-overlay-deep)",
                        fontSize: "0.75rem",
                        color: "var(--n-body)",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      247 results
                    </div>
                  </div>

                  {/* Fake result rows */}
                  <div className="flex flex-col">
                    {[
                      { name: "Generic Chain Restaurant", rating: "3.8", reviews: "2,410", tag: "Sponsored" },
                      { name: "Tourist Trap Kitchen", rating: "4.0", reviews: "5,021", tag: "Ad" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 px-4 py-3"
                        style={{ borderTop: "1px solid var(--n-border-light)" }}
                      >
                        <div
                          className="shrink-0 rounded-lg"
                          style={{ width: 40, height: 40, background: "var(--n-glass-med)" }}
                        />
                        <div className="flex-1 min-w-0">
                          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "var(--n-semi)", fontWeight: 500 }}>
                            {item.name}
                          </p>
                          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "var(--n-dim)", marginTop: 2 }}>
                            ⭐ {item.rating} · ({item.reviews} reviews)
                          </p>
                        </div>
                        {item.tag && (
                          <span
                            className="shrink-0 rounded-full px-2.5 py-0.5"
                            style={{
                              background: "rgba(224,85,85,0.12)",
                              fontSize: "0.65rem",
                              color: "#e05555",
                              fontFamily: "'DM Sans', sans-serif",
                              fontWeight: 500,
                            }}
                          >
                            {item.tag}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom caption */}
              <div className="px-5 py-4" style={{ background: "var(--n-bg-card)" }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "var(--n-muted)", lineHeight: 1.5 }}>
                  Overwhelming. Impersonal. Flooded with ads — not what you actually wanted.
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
