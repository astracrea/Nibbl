import { Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer
      style={{ background: "var(--n-bg)", borderTop: "1px solid var(--n-border)", transition: "background 0.4s ease" }}
      className="px-6 py-14"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10" style={{ borderBottom: "1px solid var(--n-border-light)" }}>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "#FF5C28" }}>
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "#fff", fontSize: "1rem" }}>N</span>
              </div>
              <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "var(--n-heading)", fontSize: "1.15rem" }}>
                Nibbl
              </span>
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--n-muted)", fontSize: "0.85rem", lineHeight: 1.7, maxWidth: 220 }}>
              Discover food worth stepping out for. Hyperlocal, mood-based, honest.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {[
                { Icon: Twitter, label: "Twitter" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  title={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "var(--n-glass-med)",
                    border: "1px solid var(--n-border-med)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,92,40,0.1)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,92,40,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--n-glass-med)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--n-border-med)";
                  }}
                >
                  <Icon size={14} style={{ color: "var(--n-body)" }} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "var(--n-heading)", fontSize: "0.85rem", marginBottom: "1rem" }}>
              Product
            </p>
            {[
              { label: "How it works", target: "meet-nibbl" },
              { label: "Features", target: "features" },
              { label: "Bucket Lists", target: "bucket-list" },
              { label: "Shared Lists", target: "share" },
              { label: "Coming soon", target: "final-cta" },
            ].map(({ label, target }) => (
              <p
                key={label}
                className="mb-2 cursor-pointer"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--n-muted)", fontSize: "0.82rem" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--n-body)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--n-muted)")}
                onClick={() => document.getElementById(target)?.scrollIntoView({ behavior: "smooth" })}
              >
                {label}
              </p>
            ))}
          </div>

          <div>
            <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "var(--n-heading)", fontSize: "0.85rem", marginBottom: "1rem" }}>
              Say hello
            </p>
            <div className="flex items-center gap-2 mb-2">
              <Mail size={13} style={{ color: "#FF5C28" }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--n-body)", fontSize: "0.82rem" }}>
                getnibbl@gmail.com
              </span>
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--n-muted)", fontSize: "0.78rem", lineHeight: 1.6, maxWidth: 220, marginTop: 8 }}>
              We read every email. If you have a food spot we absolutely must know about, tell us.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--n-muted)", fontSize: "0.75rem" }}>
            © 2026 Nibbl. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--n-muted)", fontSize: "0.75rem" }}>
              Made with care for food lovers everywhere
            </span>
            
          </div>
        </div>
      </div>
    </footer>
  );
}