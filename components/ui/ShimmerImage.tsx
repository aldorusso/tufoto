'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ShimmerImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function ShimmerImage({
  src,
  alt,
  fill,
  width,
  height,
  className,
  priority = false,
  sizes,
}: ShimmerImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Shimmer skeleton */}
      <motion.div
        className="absolute inset-0 shimmer z-10"
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        style={{ pointerEvents: 'none' }}
      />

      {/* Actual image */}
      <motion.div
        className="w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
            className="object-cover protected-image"
            onLoad={() => setIsLoaded(true)}
            draggable={false}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            sizes={sizes}
            className="object-cover protected-image"
            onLoad={() => setIsLoaded(true)}
            draggable={false}
          />
        )}
      </motion.div>
    </div>
  );
}
