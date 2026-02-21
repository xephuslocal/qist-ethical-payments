import { motion } from "framer-motion";

const stats = [
  {
    value: "33%",
    description: "UK adults used BNPL in 2025",
  },
  {
    value: "4M+",
    description: "Muslims in the UK",
  },
  {
    value: "0",
    description: "Dedicated Shariah-compliant BNPL solutions for everyday consumers in the UK",
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
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-4">
            Finance that puts ethics first
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Qist is built from the ground up to respect principles of transparent, ethical commerce.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.description}
              variants={item}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-colors text-center"
            >
              <p className="font-display text-4xl sm:text-5xl font-bold text-primary mb-3">{stat.value}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
