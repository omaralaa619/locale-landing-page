"use client";
import { motion } from "framer-motion";
import Button from "./ui/Button";
import Container from "./ui/Container";
import Counter from "./ui/Counter";
import HeroImage from "./HeroImage";
import HeroImage2 from "./HeroImage2";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-16 ">
      {/* Background glow */}
      {/* <div className="pointer-events-none absolute inset-0 particle-bg" /> */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-glow-purple/20 blur-[120px] animate-glow-pulse" />

      <Container className={"pt-20 lg:pt-30 lg:pb-20 text-center"}>
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          {/* Left - Text */}
          <motion.div className="space-y-8">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm text-muted-foreground">
              {/* <span className="h-2 w-2 rounded-full bg-glow-purple animate-pulse" /> */}
              Next-gen eCommerce Solutions
            </div>

            <h1 className="text-5xl  lg:text-7xl font-bold leading-tight tracking-tight">
              Launch Your{" "}
              <span className="gradient-text">
                Ecommerce <br /> Store now.
              </span>
            </h1>
            <div className="flex flex-col items-center gap-4">
              <p className="text-lg  text-muted-foreground max-w-lg leading-relaxed">
                Custom-built, scalable eCommerce websites with a powerful
                analytics dashboard. Own your platform, own your data.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link
                  href="https://locale-dashboard.vercel.app/dashboard"
                  target="_blank"
                >
                  <Button className="hero" size="xl">
                    Dashboard Demo
                  </Button>
                </Link>
                <Link href={"#projects"}>
                  <Button variant="heroOutline" size="xl">
                    View Live Stores
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-4 mt-6">
                {[
                  { value: "50+", label: "Stores Launched" },
                  { value: "100k+", label: "Orders Processed" },
                  { value: "0", label: "Monthly Fees" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold gradient-text-bright">
                      <Counter value={stat.value} />
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Dashboard Mockup */}
          {/* <HeroImage /> */}
          <HeroImage2 />
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
