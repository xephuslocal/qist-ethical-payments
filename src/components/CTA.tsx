import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { z } from "zod";
import patternAccent from "@/assets/pattern-accent.png";

const emailSchema = z.string().trim().email("Please enter a valid email").max(255);
const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe4ZbHJK6P_8uC9qCl1j7XAs4UyLg-Ii5jNubPwsCb3DnP6Mw/formResponse";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }
    setError("");

    const formData = new FormData();
    formData.append("entry.219565874", result.data);

    try {
      await fetch(FORM_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });
    } catch {
      // Google Forms doesn't return CORS headers, but the submission still goes through
    }
    setSubmitted(true);
  };

  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          className="relative bg-secondary rounded-3xl p-12 sm:p-16 text-center overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Decorative pattern */}
          <img
            src={patternAccent}
            alt=""
            aria-hidden="true"
            className="absolute -top-16 -right-16 w-56 h-56 opacity-10 rotate-12"
          />
          <img
            src={patternAccent}
            alt=""
            aria-hidden="true"
            className="absolute -bottom-12 -left-12 w-40 h-40 opacity-[0.07] -rotate-45"
          />

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4 relative z-10">
            Ready to shop ethically?
          </h2>
          <p className="text-secondary-foreground/70 text-lg max-w-md mx-auto mb-8 relative z-10">
            Join thousands of Muslims who are choosing a better way to pay.
          </p>

          <div className="relative z-10">
            {submitted ? (
              <div className="flex items-center justify-center gap-3 text-primary-foreground font-medium">
                <CheckCircle className="h-5 w-5" />
                You're on the list! We'll be in touch soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(""); }}
                    placeholder="Enter your email"
                    className="w-full h-12 px-5 rounded-full bg-secondary-foreground/10 border border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/40 focus:outline-none focus:ring-2 focus:ring-secondary-foreground/30 text-sm"
                  />
                  {error && <p className="text-destructive-foreground text-xs mt-1.5 ml-4">{error}</p>}
                </div>
                <button
                  type="submit"
                  className="h-12 px-6 rounded-full bg-primary-foreground text-primary font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shrink-0"
                >
                  Join Waitlist
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
