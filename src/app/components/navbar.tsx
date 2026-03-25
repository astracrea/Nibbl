import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{
        background: scrolled ? "rgba(11,10,9,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "#FF5C28" }}
          >
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "#fff", fontSize: "1rem" }}>N</span>
          </div>
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "#F2EFE8", fontSize: "1.15rem" }}>
            Nibbl
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "How it works", id: "features" },
            { label: "Discover", id: "cravings" },
            { label: "Lists", id: "collections" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "#8A8780",
                fontSize: "0.9rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#F2EFE8")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#8A8780")}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => scrollTo("waitlist")}
          className="hidden md:flex rounded-xl px-5 py-2.5"
          style={{
            fontFamily: "'Syne', sans-serif",
            background: "#FF5C28",
            color: "#fff",
            fontWeight: 600,
            fontSize: "0.88rem",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 2px 12px rgba(255,92,40,0.3)",
          }}
        >
          Join Waitlist
        </motion.button>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <span className="block w-5 h-0.5" style={{ background: "#F2EFE8" }} />
          <span className="block w-5 h-0.5" style={{ background: "#F2EFE8" }} />
          <span className="block w-3 h-0.5" style={{ background: "#F2EFE8" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 rounded-2xl p-5 flex flex-col gap-4"
          style={{ background: "#1E1C18", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          {[
            { label: "How it works", id: "features" },
            { label: "Discover", id: "cravings" },
            { label: "Lists", id: "collections" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "#8A8780",
                fontSize: "1rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("waitlist")}
            className="rounded-xl px-5 py-3 mt-1"
            style={{
              fontFamily: "'Syne', sans-serif",
              background: "#FF5C28",
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.95rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            Join Waitlist
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}