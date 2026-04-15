'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  strength?: number;
}

export function MagneticButton({
  children,
  className,
  onClick,
  variant = 'primary',
  size = 'md',
  strength = 0.35,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 15, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const variants = {
    primary: 'bg-[var(--accent)] text-[var(--bg-primary)] hover:bg-[var(--accent-light)]',
    outline: 'border border-[var(--border-strong)] text-[var(--fg-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)]',
    ghost: 'text-[var(--fg-secondary)] hover:text-[var(--fg-primary)]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-2.5',
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      className={cn(
        'relative inline-flex items-center justify-center font-medium rounded-full',
        'transition-colors duration-200 select-none overflow-hidden',
        'cursor-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {/* Ripple glow on hover */}
      <motion.span
        className="absolute inset-0 rounded-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        style={{
          background: variant === 'primary'
            ? 'rgba(255,255,255,0.15)'
            : 'rgba(201,169,110,0.1)',
        }}
      />
      <span className="relative z-10 flex items-center gap-inherit">{children}</span>
    </motion.button>
  );
}
