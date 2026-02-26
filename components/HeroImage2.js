"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const HeroImage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4, once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        rotateX: 0,
        opacity: 1,
        y: 0,
        scale: 1,
        boxShadow:
          "0px 60px 120px rgba(0,0,0,0.45), 0px 20px 40px rgba(139,92,246,0.25)",
        transition: {
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        },
      });
    }
  }, [isInView, controls]);

  return (
    <div ref={ref}>
      <motion.div
        initial={{
          rotateX: 30,
          opacity: 0,
          y: 120,
          scale: 0.95,
          boxShadow:
            "0px 10px 20px rgba(0,0,0,0.15), 0px 5px 10px rgba(139,92,246,0.05)",
        }}
        animate={controls}
        style={{
          transformPerspective: 1200,
        }}
        className="relative rounded-xl"
      >
        <div className="glass-card glow-border rounded-xl overflow-hidden leading-[0]">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-card/80 border-b border-glass-border">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-destructive/70" />
              <span className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-yellow-500/70" />
              <span className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-green-500/70" />
            </div>
            <div className="flex-1 mx-2">
              <div className="bg-muted/60 rounded-md px-3 py-[3px] md:px-3 md:py-1 text-xs text-muted-foreground truncate max-w-xs mx-auto text-center">
                admin.yourstore.com/dashboard
              </div>
            </div>
          </div>

          <img
            src="/LS.png"
            alt="eCommerce admin dashboard"
            className="w-full block"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroImage;
