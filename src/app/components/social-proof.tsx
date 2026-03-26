import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  { name: "Priya M.", handle: "@priya_eats", quote: "Finally an app that understands I don't want \"top rated\" — I want what's actually good near me right now.", color: "#FF5C28" },
  { name: "Rahul K.", handle: "@rahulbombayfood", quote: "The bucket list feature is genius. I've been checking off street food spots I've been meaning to try for years.", color: "#FFA726" },
  { name: "Sneha T.", handle: "@snehaeats", quote: "Shared my 'Cheap Eats Bandra' list with 3 friends and they all added 5 more spots to it. This is how food discovery should work.", color: "#B5CC1A" },
];

const AVATARS = [
  { initial: "P", color: "#FF5C28" },
  { initial: "R", color: "#FFA726" },
  { initial: "S", color: "#B5CC1A" },
  { initial: "A", color: "#FF5C28" },
  { initial: "M", color: "#FFA726" },
  { initial: "K", color: "#B5CC1A" },
  { initial: "V", color: "#FF5C28" },
];

export function SocialProofSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      style={{ background: "var(--n-bg)", borderTop: "1px solid var(--n-border-light)", transition: "background 0.4s ease" }}
      className="py-24 md:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex -space-x-3">
              {AVATARS.map((av, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.05 * i }}
                  className="w-9 h-9 rounded-full flex items-center justify-center border-2"
                  style={{ background: `${av.color}20`, borderColor: "var(--n-bg)", zIndex: AVATARS.length - i }}
                >
                  <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: av.color, fontSize: "0.7rem" }}>
                    {av.initial}
                  </span>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="w-9 h-9 rounded-full flex items-center justify-center border-2"
                style={{ background: "var(--n-glass-card)", borderColor: "var(--n-bg)" }}
              >
                <span style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--n-body)", fontSize: "0.6rem" }}>+</span>
              </motion.div>
            </div>

            <div>
              <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "var(--n-heading)" }}>
                Join <span style={{ color: "#FF5C28" }}>500+ early users</span>
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--n-muted)", fontSize: "0.82rem", marginTop: 4 }}>
                Food explorers already on the waitlist
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.12 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-5"
              style={{ background: "var(--n-glass)", border: "1px solid var(--n-border)", transition: "box-shadow 0.2s" }}
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={12} fill="#FFA726" stroke="#FFA726" />
                ))}
              </div>

              <p style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--n-body)", fontSize: "0.88rem", lineHeight: 1.7, fontStyle: "italic" }}>
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 mt-4">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: `${t.color}20`, border: `1px solid ${t.color}30` }}
                >
                  <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: t.color, fontSize: "0.75rem" }}>
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, color: "var(--n-heading)", fontSize: "0.82rem" }}>
                    {t.name}
                  </p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--n-muted)", fontSize: "0.7rem" }}>
                    {t.handle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.5 }}
          className="mt-14 text-center"
        >
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--n-muted)", fontSize: "0.78rem", marginBottom: 12 }}>
            Launching in
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Mumbai 🏙️", "Bengaluru 🌿", "Delhi 🏛️", "Pune ☕", "Hyderabad 🍖", "Chennai 🌊"].map((city) => (
              <span
                key={city}
                className="rounded-full px-4 py-1.5"
                style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem",
                  color: "var(--n-body)", background: "var(--n-glass-light)", border: "1px solid var(--n-border)",
                }}
              >
                {city}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}