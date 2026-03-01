"use client";
import { useState } from "react";
import Button from "./ui/Button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./ui/Container";
import { Logo } from "./ui/Logo";
import Link from "next/link";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = ["Features", "Projects", "Why Us", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50  border-b border-border/50 bg-background/80 backdrop-blur-xl ">
      <Container className="flex h-16 items-center justify-between ">
        <a
          href="#"
          className="text-xl font-bold tracking-tight flex items-center gap-2"
        >
          <Logo />
          <div>
            <span className="text-foreground"></span>
            <span className="gradient-text-bright">LocalE</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="https://locale-dashboard.vercel.app/dashboard"
            target="_blank"
          >
            <Button variant="hero" size="sm">
              Dashboard
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl z-20"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {links.map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </Link>
              ))}
              <Link
                href="https://locale-dashboard.vercel.app/dashboard"
                target="_blank"
              >
                <Button variant="hero" size="lg" className="mt-2">
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
        {mobileOpen && (
          <motion.div
            className={
              "bg-black top-0 left-0 h-[100vh] w-full fixed opacity-30 !-z-10  md:hidden"
            }
            onClick={() => setMobileOpen(false)}
            initial={false}
            animate={{ opacity: 0.5, pointerEvents: "all" }}
            exit={{ opacity: 0, height: 0 }}
          ></motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
