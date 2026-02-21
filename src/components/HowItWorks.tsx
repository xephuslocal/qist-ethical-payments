import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Sign Up", description: "Create your free account in under a minute." },
  { number: "02", title: "Shop Anywhere", description: "Use Qist at your favourite online and in-store retailers." },
  { number: "03", title: "Split Payments", description: "Choose a halal instalment plan that suits your budget." },
  { number: "04", title: "Pay With Peace", description: "Complete your payments with zero interest — always." },
];

const HowItWorks = () => {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How Qist works
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Simple, transparent, and completely halal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-5xl font-bold text-primary/15 font-body mb-3">{step.number}</div>
              <h3 className="font-body font-semibold text-foreground text-lg mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
