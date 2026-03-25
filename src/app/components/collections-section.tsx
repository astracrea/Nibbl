import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Bookmark, Plus } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const IMG_CAFE = "https://images.unsplash.com/photo-1589221475596-7133b597dc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwY2FmZSUyMGNvZmZlZSUyMGxhdHRlJTIwZmxhdCUyMGxheXxlbnwxfHx8fDE3NzM5ODQ3MTJ8MA&ixlib=rb-4.1.0&q=80&w=400";
const IMG_BURGER = "https://images.unsplash.com/photo-1676806083731-9b0ee3ea2943?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRlJTIwbmlnaHQlMjBmb29kJTIwYnVyZ2VyJTIwZ3JpbGxlZCUyMGRhcmslMjBtb29keXxlbnwxfHx8fDE3NzM5ODQ3MTd8MA&ixlib=rb-4.1.0&q=80&w=400";
const IMG_CHAAT = "https://images.unsplash.com/photo-1486548730767-5c679e8eda6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGljeSUyMGluZGlhbiUyMGNoYWF0JTIwc3RyZWV0JTIwZm9vZCUyMGNvbG9yZnVsfGVufDF8fHx8MTc3Mzk4NDcxNnww&ixlib=rb-4.1.0&q=80&w=400";
const IMG_PROTEIN = "https://images.unsplash.com/photo-1765100778328-e9866d490568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwcHJvdGVpbiUyMGJvd2wlMjBzYWxhZCUyMGZyZXNoJTIwaW5ncmVkaWVudHN8ZW58MXx8fHwxNzczOTg0NzE4fDA&ixlib=rb-4.1.0&q=80&w=400";

const COLLECTIONS = [
  {
    id: 1,
    name: "Late Night Food",
    count: 12,
    emoji: "🌙",
    color: "#FF5C28",
    bg: "rgba(255,92,40,0.1)",
    border: "rgba(255,92,40,0.2)",
    img: IMG_BURGER,
    rotate: 2,
    z: 4,
  },
  {
    id: 2,
    name: "Cheap Eats",
    count: 24,
    emoji: "💸",
    color: "#FFA726",
    bg: "rgba(255,167,38,0.1)",
    border: "rgba(255,167,38,0.2)",
    img: IMG_CHAAT,
    rotate: -3,
    z: 3,
  },
  {
    id: 3,
    name: "Cafés & Brew",
    count: 8,
    emoji: "☕",
    color: "#B5CC1A",
    bg: "rgba(181,204,26,0.1)",
    border: "rgba(181,204,26,0.2)",
    img: IMG_CAFE,
    rotate: 1,
    z: 2,
  },
  {
    id: 4,
    name: "High Protein",
    count: 15,
    emoji: "💪",
    color: "#FFA726",
    bg: "rgba(255,167,38,0.08)",
    border: "rgba(255,167,38,0.15)",
    img: IMG_PROTEIN,
    rotate: -1,
    z: 1,
  },
];

function CollectionCard({
  collection,
  index,
  inView,
}: {
  collection: (typeof COLLECTIONS)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, rotate: 0, scale: 1.02 }}
      className="relative rounded-2xl overflow-hidden cursor-pointer"
      style={{
        transform: `rotate(${collection.rotate}deg)`,
        border: `1px solid ${collection.border}`,
        background: "#161512",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* Image */}
      <div className="relative" style={{ height: 120, overflow: "hidden" }}>
        <ImageWithFallback
          src={collection.img}
          alt={collection.name}
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.55)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to bottom, transparent 40%, rgba(22,21,18,1))` }}
        />
      </div>

      {/* Content */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span style={{ fontSize: "1rem" }}>{collection.emoji}</span>
            <span
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                color: "#F2EFE8",
                fontSize: "0.88rem",
              }}
            >
              {collection.name}
            </span>
          </div>
          <Bookmark size={14} style={{ color: collection.color }} />
        </div>
        <p style={{ fontFamily: "'Inter', sans-serif", color: "#55534F", fontSize: "0.7rem", marginTop: 3 }}>
          {collection.count} spots saved
        </p>
      </div>
    </motion.div>
  );
}

export function CollectionsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="collections"
      style={{ background: "#0B0A09", borderTop: "1px solid rgba(255,255,255,0.04)" }}
      className="py-24 md:py-36 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div ref={ref}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.78rem",
                fontWeight: 500,
                color: "#FFA726",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                display: "inline-block",
                marginBottom: "1rem",
              }}
            >
              Feature 05 · Collections
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
              Save now.
              <br />
              <span style={{ color: "#FFA726" }}>Explore later.</span>
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
                maxWidth: 400,
              }}
            >
              Bookmark spots into personal collections. Build your "Late Night Food"
              list, your "Cheap Eats" go-tos, your weekend café spots — all in one
              place, organized by you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.36 }}
              className="mt-8 flex flex-col gap-3"
            >
              {[
                "Create themed collections",
                "One tap to bookmark",
                "Access offline, anytime",
                "Share with friends",
              ].map((f, i) => (
                <div key={f} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,167,38,0.15)", border: "1px solid rgba(255,167,38,0.25)" }}
                  >
                    <Plus size={10} style={{ color: "#FFA726" }} />
                  </div>
                  <span style={{ fontFamily: "'Inter', sans-serif", color: "#8A8780", fontSize: "0.88rem" }}>
                    {f}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Stacked cards */}
          <div className="relative">
            {/* Layered cards with stagger and rotation */}
            <div className="relative" style={{ height: 460 }}>
              {COLLECTIONS.map((col, i) => (
                <div
                  key={col.id}
                  className="absolute w-full"
                  style={{
                    top: `${i * 24}px`,
                    zIndex: col.z,
                    maxWidth: 320,
                    left: `${i % 2 === 0 ? "5%" : "15%"}`,
                  }}
                >
                  <CollectionCard collection={col} index={i} inView={inView} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}