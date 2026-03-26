import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Share2, Link, Check, MapPin, Star } from "lucide-react";

const SHARED_LIST = [
  { name: "Irani Café Sassanian", type: "Irani Café", rating: "4.8", emoji: "☕" },
  { name: "Bademiya", type: "Street Food", rating: "4.9", emoji: "🍖" },
  { name: "Olympia Coffee House", type: "Café", rating: "4.6", emoji: "🫖" },
  { name: "Kyani & Co.", type: "Bakery", rating: "4.7", emoji: "🥐" },
];

export function ShareSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="share"
      style={{ background: "var(--n-bg-alt)", borderTop: "1px solid var(--n-border-light)", transition: "background 0.4s ease" }}
      className="py-24 md:py-36 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              className="rounded-3xl overflow-hidden"
              style={{
                background: "var(--n-bg-card2)",
                border: "1px solid var(--n-border-med)",
                boxShadow: `0 24px 60px var(--n-shadow)`,
              }}
            >
              <div className="px-6 py-5" style={{ borderBottom: "1px solid var(--n-border-light)" }}>
                <div className="flex items-start justify-between">
                  <div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "var(--n-muted)", marginBottom: 4 }}>
                      Shared by Arjun S.
                    </p>
                    <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "var(--n-heading)", fontSize: "1.15rem" }}>
                      South Bombay Must-Tries 🏛️
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin size={10} style={{ color: "var(--n-muted)" }} />
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "var(--n-muted)" }}>
                        South Mumbai · 4 spots
                      </span>
                    </div>
                  </div>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(255,92,40,0.2)", border: "1.5px solid rgba(255,92,40,0.4)" }}
                  >
                    <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "#FF5C28", fontSize: "0.8rem" }}>A</span>
                  </div>
                </div>
              </div>

              <div className="px-6 py-3">
                {SHARED_LIST.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                    className="flex items-center gap-3 py-3"
                    style={{ borderBottom: i < SHARED_LIST.length - 1 ? "1px solid var(--n-border-light)" : "none" }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--n-glass-med)", fontSize: "1.1rem" }}
                    >
                      {item.emoji}
                    </div>
                    <div className="flex-1">
                      <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, color: "var(--n-heading)", fontSize: "0.85rem" }}>
                        {item.name}
                      </p>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--n-muted)", fontSize: "0.67rem" }}>
                        {item.type}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={10} fill="#FFA726" stroke="#FFA726" />
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "var(--n-body)" }}>{item.rating}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="px-6 py-4 flex items-center gap-3" style={{ borderTop: "1px solid var(--n-border-light)" }}>
                <div
                  className="flex-1 rounded-xl px-4 py-2.5 flex items-center gap-2"
                  style={{ background: "var(--n-glass-med)", border: "1px solid var(--n-border)" }}
                >
                  <Link size={12} style={{ color: "var(--n-muted)" }} />
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "var(--n-muted)" }}>
                    nibbl.app/list/south-bombay-classics
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopy}
                  className="rounded-xl px-4 py-2.5 flex items-center gap-1.5"
                  style={{
                    background: copied ? "rgba(181,204,26,0.15)" : "rgba(255,92,40,0.15)",
                    border: copied ? "1px solid rgba(181,204,26,0.3)" : "1px solid rgba(255,92,40,0.3)",
                    cursor: "pointer", transition: "all 0.2s",
                  }}
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                        <Check size={13} style={{ color: "#B5CC1A" }} />
                      </motion.div>
                    ) : (
                      <motion.div key="share" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                        <Share2 size={13} style={{ color: "#FF5C28" }} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.72rem", fontWeight: 600, color: copied ? "#B5CC1A" : "#FF5C28" }}>
                    {copied ? "Copied!" : "Share"}
                  </span>
                </motion.button>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-5 -right-4 rounded-2xl px-4 py-3 flex items-center gap-3"
              style={{
                background: "var(--n-marker-bg)",
                border: "1px solid var(--n-border)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="flex -space-x-2">
                {["#FF5C28", "#FFA726", "#B5CC1A", "#8A8780"].map((c, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full flex items-center justify-center border-2"
                    style={{ background: `${c}20`, borderColor: "var(--n-bg-card)", zIndex: 4 - i }}
                  >
                    <span style={{ fontSize: "0.55rem", color: c, fontFamily: "'Syne', sans-serif", fontWeight: 700 }}>
                      {["R", "M", "P", "S"][i]}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "var(--n-heading)", fontSize: "0.78rem" }}>
                  24 people saved this
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--n-muted)", fontSize: "0.62rem" }}>
                  in the last 7 days
                </p>
              </div>
            </motion.div>
          </motion.div>

          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", fontWeight: 500,
                color: "#FF5C28", letterSpacing: "0.08em", textTransform: "uppercase",
                display: "inline-block", marginBottom: "1rem",
              }}
            >
              Feature 06 · Share Lists
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 }}
              style={{
                fontFamily: "'Syne', sans-serif", fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                color: "var(--n-heading)", lineHeight: 1.1, letterSpacing: "-0.02em",
              }}
            >
              Food is better
              <br />
              <span style={{ color: "#FF5C28" }}>when shared.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="mt-5"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--n-body)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 400 }}
            >
              Share your curated lists with friends. Drop a link in WhatsApp,
              Instagram, anywhere. Your recommendations become theirs — no app
              required to view.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.36 }}
              className="mt-8 grid grid-cols-2 gap-4"
            >
              {[
                { num: "1 link", label: "to share any list" },
                { num: "No app", label: "needed to view" },
                { num: "Live updates", label: "as you add spots" },
                { num: "Private or public", label: "you decide" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl p-4"
                  style={{ background: "var(--n-glass)", border: "1px solid var(--n-border-light)" }}
                >
                  <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "#FF5C28", fontSize: "1rem" }}>
                    {s.num}
                  </p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--n-muted)", fontSize: "0.78rem", marginTop: 2 }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}