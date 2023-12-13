import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface NumberProps {
  n: number;
  isInView: boolean;
}

export default function Number({ n, isInView }: NumberProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, n, { duration: 3, delay: 0.6 });
      return animation.stop;
    }
  }, [isInView, n, count]);

  return <motion.div>{rounded}</motion.div>;
}
