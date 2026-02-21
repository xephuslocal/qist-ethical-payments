import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
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
          {/* Subtle geometric accent */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 0 L200 100 L100 200 L0 100 Z" fill="white" />
            </svg>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-foreground mb-4 relative z-10">
            Ready to shop ethically?
          </h2>
          <p className="text-secondary-foreground/70 text-lg max-w-md mx-auto mb-8 relative z-10">
            Join thousands of Muslims who are choosing a better way to pay.
          </p>
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-8 py-6 text-base font-semibold relative z-10"
          >
            Join the Waitlist
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
