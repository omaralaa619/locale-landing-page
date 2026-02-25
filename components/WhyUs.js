"use client";
import { motion } from "framer-motion";
import { DollarSign, Code2, TrendingUp, Zap, Shield } from "lucide-react";

const reasons = [
  {
    icon: DollarSign,
    title: "No Monthly Fees",
    description:
      "Pay once, own forever. No recurring charges eating into your profits.",
  },
  {
    icon: Code2,
    title: "Fully Custom-Built",
    description:
      "No plugin dependency. Every feature is purpose-built for your needs.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description: "Built to grow with you — from 10 orders a day to 10,000.",
  },
  {
    icon: Zap,
    title: "Optimized Performance",
    description: "Sub-second load times with CDN delivery and edge caching.",
  },
  {
    icon: Shield,
    title: "Secure & Production-Ready",
    description:
      "Enterprise-grade security with SSL, DDoS protection, and data encryption.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="relative py-32 section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-medium text-glow-cyan mb-4 tracking-widest uppercase">
            Advantages
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Why <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We don't just build stores — we build competitive advantages.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group glass-card glow-border p-8 hover:bg-card/70 transition-all duration-500 hover:-translate-y-2 ${
                i >= 3 ? "sm:col-span-1 lg:col-span-1" : ""
              }`}
            >
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <reason.icon className="h-6 w-6 text-glow-cyan" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
