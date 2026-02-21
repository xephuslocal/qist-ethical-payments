import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container max-w-3xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            About Us
          </h2>
          <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            <p>
              We believe no one should have to choose between financial convenience and their faith. Millions of Muslims want the flexibility of Buy Now, Pay Later but are locked out by interest, hidden fees, and terms that contradict their values.
            </p>
            <p>
              We're building the UK's first Shariah compliant BNPL platform: one that lets you buy today and pay over time with complete transparency, no riba, no debt traps, and no ethical compromise. This isn't just about payments — it's about trust and inclusion in a financial system that has overlooked too many people for too long.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
