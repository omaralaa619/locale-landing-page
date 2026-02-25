"use client";
import { motion } from "framer-motion";
import { BarChart3, ShoppingCart, Package, Tag } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Real-time sales, revenue, and conversion tracking with beautiful visualizations and exportable reports.",
  },
  {
    icon: ShoppingCart,
    title: "Order Management",
    description:
      "Streamlined order processing with status tracking, automated notifications, and bulk operations.",
  },
  {
    icon: Package,
    title: "Product & Inventory",
    description:
      "Manage products, variants, stock levels, and categories with an intuitive drag-and-drop interface.",
  },
  {
    icon: Tag,
    title: "Discount & Coupons",
    description:
      "Create flexible discount rules, promo codes, and automated campaign scheduling to boost sales.",
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-32 section-gradient">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-medium text-glow-purple mb-4 tracking-widest uppercase">
            Dashboard
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Powerful <span className="gradient-text">Built-In Dashboard</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Everything you need to manage and grow your online store, all in one
            beautiful interface.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card glow-border p-8 hover:bg-card/70 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-glow-purple" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
