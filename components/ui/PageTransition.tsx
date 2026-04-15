'use client';

import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  enter:   { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -8 },
};

const pageTransition = {
  type: 'tween',
  ease: [0.25, 0.46, 0.45, 0.94],
  duration: 0.45,
};

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}
