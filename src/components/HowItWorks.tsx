import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Ethical Finance for All", description: "We're on a mission to offer ethical finance to the masses — transparent, fair, and accessible to everyone." },
  { number: "02", title: "Shop Where You Love", description: "Find Qist at your favourite online retailers and pay the way that works for you." },
  { number: "03", title: "Flexible Plans", description: "We offer flexible payment plans designed to meet your needs and fit your budget." },
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
            Our Goals
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Simple, transparent, and built for everyone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
