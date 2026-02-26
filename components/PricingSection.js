"use client";
import { motion } from "framer-motion";
import Button from "./ui/Button";
import { Check, ArrowRight } from "lucide-react";

const features = [
  "One-time payment, no subscriptions",
  "Custom-designed eCommerce website",
  "Built-in analytics dashboard",
  "Order & inventory management",
  "Discount & coupon system",
  "Online payments via Paymob",
  "Facebook Pixel integration",
  "Mobile-responsive design",
  "SEO optimized",
  "SSL & security included",
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-16  md:py-32 section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-glow-purple mb-4 tracking-widest uppercase">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            One Price. <span className="gradient-text">No Surprises.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            No subscriptions, no hidden fees. Pay once and own your store
            forever.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-lg mx-auto"
        >
          <div className="glass-card glow-border p-10 text-center relative overflow-hidden">
            {/* Subtle top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-glow-purple/60 to-transparent" />

            <p className="text-sm font-medium text-glow-purple mb-2 uppercase tracking-wider">
              Complete Package
            </p>
            <div className="flex flex-col items-center mb-2">
              <span className="text-lg text-muted-foreground line-through">
                £10,000
              </span>
              <span className="text-6xl font-bold gradient-text-bright">
                £8,000
              </span>
            </div>
            <p className="text-muted-foreground mb-8">
              One-time payment · No monthly fees
            </p>

            <div className="grid gap-3 text-left mb-10">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-sm">
                  <div className="h-5 w-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 text-glow-purple" />
                  </div>
                  <span className="text-secondary-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
