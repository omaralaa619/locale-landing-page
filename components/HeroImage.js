import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

const HeroImage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      console.log("Y scroll progress:", latest);
    });
  }, [scrollYProgress]);

  const rotateX = useTransform(scrollYProgress, [0, 1], ["90deg", "0deg"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], ["1000px", "0px"]);

  return (
    <div ref={ref}>
      <motion.div
        style={{ rotateX, opacity, translateY, transformPerspective: 1000 }}
        className="relative"
      >
        <div className="relative ">
          {/* <div className="absolute -inset-4 bg-glow-purple/10 rounded-3xl blur-2xl" /> */}
          <div className="glass-card glow-border rounded-xl overflow-hidden leading-[0]">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-card/80 border-b border-glass-border">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-destructive/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 mx-2">
                <div className="bg-muted/60 rounded-md px-3 py-1 text-xs text-muted-foreground truncate max-w-xs mx-auto text-center">
                  admin.yourstore.com/dashboard
                </div>
              </div>
            </div>
            {/* Content */}
            <img
              src={"/dd2.png"}
              alt="eCommerce admin dashboard with analytics charts, order management, and product controls"
              className="w-full block"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroImage;
