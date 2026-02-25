import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

const Counter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    // Extract number and suffix (like + or %)
    const numericValue = parseFloat(value);
    const suffix = value.replace(/[0-9.]/g, "");

    const controls = animate(0, numericValue, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate(latest) {
        setDisplayValue(latest.toFixed(numericValue % 1 !== 0 ? 1 : 0));
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue}
      {value.replace(/[0-9.]/g, "")}
    </span>
  );
};
export default Counter;
