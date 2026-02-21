import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";

const WAITLIST_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe4ZbHJK6P_8uC9qCl1j7XAs4UyLg-Ii5jNubPwsCb3DnP6Mw/viewform";

const Hero = () => {

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Geometric pattern background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="islamic-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M40 0 L80 40 L40 80 L0 40 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
              <circle cx="40" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-4 py-1.5 mb-8">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-accent-foreground">We're levelling up Buy Now Pay Later</span>
              </div>
            </motion.div>

            <motion.h1
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            >
              Modern payments meets{" "}
              <span className="text-primary">ethical finance</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              We're solving buy now pay later for the Muslim community. No interest. No hidden fees. Just honest, halal payments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            >
              <a
                href={WAITLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
              >
                Join Our Waiting List
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            className="hidden lg:flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <img
              src={heroPhone}
              alt="Qist payment app on smartphone with Islamic geometric patterns"
              className="w-full max-w-lg rounded-2xl"
            />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
