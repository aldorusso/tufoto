'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  distance = 32,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-10% 0px' });

  const directionMap = {
    up:    { y: distance  },
    down:  { y: -distance },
    left:  { x: distance  },
    right: { x: -distance },
    none:  {},
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...directionMap[direction] }}
      animate={isInView
        ? { opacity: 1, x: 0, y: 0 }
        : { opacity: 0, ...directionMap[direction] }
      }
      transition={{
        duration: 0.65,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}
