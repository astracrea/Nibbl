import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

type Status = "idle" | "loading" | "success" | "error";

interface WaitlistFormProps {
  variant?: "hero" | "cta";
  onSuccess?: () => void;
}

export function WaitlistForm({ variant = "hero", onSuccess }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [touched, setTouched] = useState(false);

  const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  const hasError = touched && email.length > 0 && !isValidEmail(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!isValidEmail(email)) {
      setStatus("error");
      return;
    }
    
    setStatus("loading");

    try {
      // Send the email via EmailJS
      await emailjs.send(
        'nibbl.app',   // Replace with your real Service ID
        'Nibbl Mail',  // Replace with your real Template ID
        {
          user_email: email, 
        },
        'zJgcqJhWacxhQtk-4'    // Replace with your real Public Key
      );

      setStatus("success");
      setEmail("");
      onSuccess?.();
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center text-center gap-2 rounded-2xl px-6 py-5"
        style={{
          background: "rgba(181,204,26,0.1)",
          border: "1px solid rgba(181,204,26,0.25)",
        }}
      >
        <CheckCircle size={22} style={{ color: "#B5CC1A" }} />
        <div>
          <p style={{ fontFamily: "'Syne', sans-serif", color: "var(--n-heading)", fontWeight: 600 }}>
            You're on the list!
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--n-body)", fontSize: "0.85rem", marginTop: 2 }}>
            We'll reach out when Nibbl is ready for you.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-[2]">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
              setTouched(false);
            }}
            onBlur={() => setTouched(true)}
            placeholder="your@email.com"
            className="w-full rounded-xl outline-none transition-all duration-200 px-[16px] py-[16px] text-[13px] placeholder:text-[13px]"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              background: "var(--n-glass-input)",
              border: hasError
                ? "1px solid rgba(220,60,60,0.6)"
                : "1px solid var(--n-border-strong)",
              color: "var(--n-heading)",
            }}
          />
          <AnimatePresence>
            {hasError && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute -bottom-6 left-0 flex items-center gap-1"
              >
                <AlertCircle size={12} style={{ color: "#e05555" }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", color: "#e05555", fontSize: "0.78rem" }}>
                  Please enter a valid email address
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.button
          type="submit"
          disabled={status === "loading"}
          whileHover={{ scale: status === "loading" ? 1 : 1.03 }}
          whileTap={{ scale: status === "loading" ? 1 : 0.97 }}
          className="flex items-center justify-center gap-2 rounded-xl px-6 py-4 transition-all duration-200"
          style={{
            fontFamily: "'Syne', sans-serif",
            background: status === "loading" ? "#cc4a20" : "#FF5C28",
            color: "#fff",
            fontWeight: 600,
            fontSize: "0.95rem",
            cursor: status === "loading" ? "not-allowed" : "pointer",
            whiteSpace: "nowrap",
            boxShadow: "0 4px 24px rgba(255,92,40,0.35)",
          }}
        >
          {status === "loading" ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Joining…
            </>
          ) : (
            <>
              Join the Waitlist
              <ArrowRight size={16} />
            </>
          )}
        </motion.button>
      </form>

      {variant === "hero" && status !== "error" && (
        <p className="mt-4" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--n-muted)", fontSize: "0.8rem" }}>
          No spam. Just an early invite when we're ready.
        </p>
      )}
    </div>
  );
}
