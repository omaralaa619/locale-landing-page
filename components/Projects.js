"use client";
import { motion } from "framer-motion";
import { ExternalLink, Calendar, ShoppingBag, TrendingUp } from "lucide-react";
import Link from "next/link";
import Container from "./ui/Container";

const projects = [
  {
    title: "NODIKA",
    category: "Fashion & Apparel",
    description:
      "What you wear is how you present yourself to the world, especially today, NODIKA Is your fashion.",

    image: "/new.png",
    stats: [
      { icon: ShoppingBag, label: "Monthly Orders", value: "850+" },
      { icon: TrendingUp, label: "Sales Increase", value: "+240%" },
      { icon: Calendar, label: "Launch", value: "1 week" },
    ],
    features: [
      "Mobile-First Design",
      "Custom Checkout",
      "Inventory Sync",
      "Social Integration",
    ],
    year: "2026",
    link: "https://nodika.vercel.app/",
  },
  {
    title: "THAWB",
    category: "Fashion & Apparel",
    description:
      "Thawb is an Egyptian fashion brand offering premium quality, uniquely designed, affordable clothing.",

    image: "/thawbpic.png",
    stats: [
      { icon: ShoppingBag, label: "Monthly Orders", value: "320+" },
      { icon: TrendingUp, label: "Sales Increase", value: "+180%" },
      { icon: Calendar, label: "Launch", value: "1 week" },
    ],
    features: [
      "Subscription System",
      "Story-driven Design",
      "Product Education",
      "Local Pickup",
    ],
    year: "2025",
    link: "https://thawb.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20  section-gradient">
      <Container>
        {/* Header */}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative glass-card glow-border overflow-hidden">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} ecommerce website design`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 cta-gradient text-primary-foreground px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    {project.year}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-glow-blue text-sm font-semibold mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-t border-b border-border">
                    {project.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <stat.icon className="w-5 h-5 text-glow-blue mx-auto mb-2" />
                        <div className="font-semibold text-foreground text-sm">
                          {stat.value}
                        </div>
                        <div className="text-muted-foreground text-xs">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-full text-foreground border border-glass-border bg-card/50 backdrop-blur-sm py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:bg-card/80 hover:border-primary/50 group/btn">
                      View Live Store
                      <ExternalLink className="w-4 h-4 " />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
