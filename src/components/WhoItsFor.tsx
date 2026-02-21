import { motion } from "framer-motion";
import { ShoppingBag, Store } from "lucide-react";

const audiences = [
  {
    icon: ShoppingBag,
    title: "Consumers",
    points: ["Ethical alternative", "Flexible plans", "No interest"],
  },
  {
    icon: Store,
    title: "Merchants",
    points: [
      "Increase your basket size",
      "Access an underserved customer base",
      "Ethical brand alignment",
    ],
  },
];

const WhoItsFor = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-4">
            Who it's for
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Built for shoppers and sellers who value transparency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {audiences.map((audience, i) => (
            <motion.div
              key={audience.title}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <audience.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                {audience.title}
              </h3>
              <ul className="space-y-3">
                {audience.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-muted-foreground text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
