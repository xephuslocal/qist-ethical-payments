import { motion } from "framer-motion";
import { Shield, Banknote, Clock, Heart } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Shariah-Compliant",
    description: "Every transaction is structured without interest (riba). Approved by scholars, trusted by the community.",
  },
  {
    icon: Banknote,
    title: "Zero Interest",
    description: "Split your payments into manageable instalments with absolutely no interest charges. Ever.",
  },
  {
    icon: Clock,
    title: "Flexible Plans",
    description: "Choose payment schedules that work for you — weekly, bi-weekly, or monthly instalments.",
  },
  {
    icon: Heart,
    title: "Built for You",
    description: "Designed specifically for Muslims who want to shop ethically without compromising their values.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Features = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Finance that aligns with your faith
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Qist is built from the ground up to respect Islamic principles of ethical commerce.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-body font-semibold text-foreground text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
