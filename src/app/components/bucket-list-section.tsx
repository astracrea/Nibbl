import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Check, Trophy, MapPin } from "lucide-react";

const INITIAL_ITEMS = [
  { id: 1, name: "Bademiya, Colaba", type: "Street Food", done: true, emoji: "🍖" },
  { id: 2, name: "Lucky Restaurant, Bandra", type: "Irani Café", done: true, emoji: "☕" },
  { id: 3, name: "Kyani & Co., Marine Lines", type: "Bakery", done: false, emoji: "🥐" },
  { id: 4, name: "Café Military, Fort", type: "Heritage", done: false, emoji: "🏛️" },
  { id: 5, name: "Sardar Pav Bhaji, Tardeo", type: "Street Food", done: false, emoji: "🍛" },
  { id: 6, name: "Olympia Coffee House", type: "Café", done: false, emoji: "🫖" },
];

export function BucketListSection() {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const toggleItem = (id: number) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item))
    );
  };

  const doneCount = items.filter((i) => i.done).length;
  const progress = (doneCount / items.length) * 100;

  return (
    <section
      id="bucket-list"
      style={{ background: "#0E0D0B", borderTop: "1px solid rgba(255,255,255,0.04)" }}
      className="py-24 md:py-36 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div ref={ref} className="lg:sticky lg:top-32">
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.78rem",
                fontWeight: 500,
                color: "#B5CC1A",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                display: "inline-block",
                marginBottom: "1rem",
              }}
            >
              Feature 04 · Bucket List
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
              Turn food into
              <br />
              <span style={{ color: "#B5CC1A" }}>experiences.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="mt-5"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#8A8780",
                fontSize: "1rem",
                lineHeight: 1.7,
                maxWidth: 380,
              }}
            >
              Build a living map of every food spot you want to visit. Check them
              off as you go. Turn eating out into a quest worth completing.
            </motion.p>

            {/* Progress stat */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="mt-10 flex items-center gap-4"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: "rgba(181,204,26,0.1)", border: "1px solid rgba(181,204,26,0.25)" }}
              >
                <Trophy size={24} style={{ color: "#B5CC1A" }} />
              </div>
              <div>
                <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "#F2EFE8", fontSize: "1.8rem", lineHeight: 1 }}>
                  {doneCount}/{items.length}
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", color: "#55534F", fontSize: "0.82rem", marginTop: 2 }}>
                  spots visited this list
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#55534F",
                fontSize: "0.82rem",
                fontStyle: "italic",
              }}
            >
              Click the items to check them off →
            </motion.p>
          </div>

          {/* Right: Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, color: "#F2EFE8", fontSize: "0.85rem" }}>
                  Mumbai Classics Bucket List
                </span>
                <span style={{ fontFamily: "'Inter', sans-serif", color: "#B5CC1A", fontSize: "0.78rem", fontWeight: 600 }}>
                  {Math.round(progress)}%
                </span>
              </div>
              <div
                className="w-full rounded-full overflow-hidden"
                style={{ height: 6, background: "rgba(255,255,255,0.06)" }}
              >
                <motion.div
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #B5CC1A, #96A817)" }}
                />
              </div>
            </div>

            {/* List items */}
            <div
              className="rounded-3xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.07)", background: "#161512" }}
            >
              {items.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                  onClick={() => toggleItem(item.id)}
                  className="flex items-center gap-4 px-5 py-4 cursor-pointer group"
                  style={{
                    borderBottom: i < items.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                    transition: "background 0.15s",
                  }}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" } as any}
                >
                  {/* Checkbox */}
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200"
                    style={{
                      background: item.done ? "#B5CC1A" : "transparent",
                      border: item.done ? "none" : "1.5px solid rgba(255,255,255,0.15)",
                      boxShadow: item.done ? "0 2px 8px rgba(181,204,26,0.4)" : "none",
                    }}
                  >
                    <AnimatePresence>
                      {item.done && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Check size={13} strokeWidth={3} color="#0B0A09" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Emoji */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      fontSize: "1.2rem",
                      opacity: item.done ? 0.5 : 1,
                      transition: "opacity 0.2s",
                    }}
                  >
                    {item.emoji}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 600,
                        color: item.done ? "#55534F" : "#F2EFE8",
                        fontSize: "0.92rem",
                        textDecoration: item.done ? "line-through" : "none",
                        transition: "all 0.2s",
                      }}
                    >
                      {item.name}
                    </p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <MapPin size={10} style={{ color: "#55534F" }} />
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "#55534F" }}>
                        {item.type}
                      </span>
                    </div>
                  </div>

                  {/* Done badge */}
                  <AnimatePresence>
                    {item.done && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.7 }}
                        className="rounded-full px-2.5 py-1"
                        style={{
                          background: "rgba(181,204,26,0.12)",
                          border: "1px solid rgba(181,204,26,0.2)",
                        }}
                      >
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.62rem", color: "#B5CC1A", fontWeight: 600 }}>
                          Visited ✓
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Achievement */}
            <AnimatePresence>
              {doneCount === items.length && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 rounded-2xl px-5 py-4 flex items-center gap-3"
                  style={{
                    background: "rgba(181,204,26,0.1)",
                    border: "1px solid rgba(181,204,26,0.25)",
                  }}
                >
                  <Trophy size={20} style={{ color: "#B5CC1A" }} />
                  <div>
                    <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "#F2EFE8", fontSize: "0.9rem" }}>
                      List complete! 🎉
                    </p>
                    <p style={{ fontFamily: "'Inter', sans-serif", color: "#8A8780", fontSize: "0.75rem" }}>
                      You've conquered Mumbai Classics. Time to build a new list.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
