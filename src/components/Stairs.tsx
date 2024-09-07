"use client";
import { motion } from "framer-motion";

const Stairs = () => {
  const stairAnimation = {
    initial: { top: "0%" },
    animate: { top: "100%" },
    exit: { top: ["100%", "0%"] },
  };

  const reverseIndex = (index: number) => {
    const totalStep = 6;
    return totalStep - index - 1;
  };

  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.1,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          variants={stairAnimation}
          className="h-full w-full bg-slate-800 relative"
        />
      ))}
    </>
  );
};

export default Stairs;
