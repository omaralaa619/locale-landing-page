"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import Button from "./ui/Button";

const stores = [
  {
    name: "NODIKA",
    description:
      "What you wear is how you present yourself to the world, especially today, NODIKA Is your fashion.",
    image: "/new.png",
  },
  {
    name: "Thawb",
    description:
      "Thawb is an Egyptian fashion brand offering premium quality, uniquely designed, affordable clothing.",
    image: "/dashboard-mockup.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-16 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-medium text-glow-blue mb-4 tracking-widest uppercase">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Stores We've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Each store is custom-crafted to match the brand's identity and
            optimize conversions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          {stores.map((store, i) => (
            <motion.div
              key={store.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card glow-border overflow-hidden hover:-translate-y-2 transition-all duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={store.image}
                  alt={`${store.name} eCommerce store preview`}
                  className="w-full h-56 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex flex-col gap-4  justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-foreground">
                    {store.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {store.description}
                  </p>
                </div>
                <Button variant="heroOutline" size="sm" className=" ml-4">
                  <ExternalLink className="h-4 w-4" />
                  Visit
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
