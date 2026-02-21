import { motion } from "framer-motion";
import patternAccent from "@/assets/pattern-accent.png";

const AboutUs = () => {
  return (
    <section className="relative py-28 bg-secondary overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute top-0 right-0 w-72 h-72 opacity-10">
        <img src={patternAccent} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-0 left-0 w-56 h-56 opacity-10 rotate-180">
        <img src={patternAccent} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="container relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-foreground mb-4 text-center">
            About Us
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="rounded-2xl border border-primary/20 bg-secondary-foreground/5 p-8 backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-secondary-foreground/80 text-base sm:text-lg leading-relaxed">
              We believe no one should have to choose between financial convenience and their faith. Millions of Muslims want the flexibility of Buy Now, Pay Later but are locked out by interest, hidden fees, and terms that contradict their values.
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-primary/20 bg-secondary-foreground/5 p-8 backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-secondary-foreground/80 text-base sm:text-lg leading-relaxed">
              We're building the UK's first Shariah compliant BNPL platform: one that lets you buy today and pay over time with complete transparency, no riba, no debt traps, and no ethical compromise. This isn't just about payments — it's about trust and inclusion in a financial system that has overlooked too many people for too long.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
