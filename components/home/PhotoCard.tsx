'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Eye, Heart } from 'lucide-react';
import { addItem } from '@/lib/store/cartSlice';
import { Photo } from '@/types';
import { formatPrice } from '@/lib/utils';
import { ShimmerImage } from '@/components/ui/ShimmerImage';

interface PhotoCardProps {
  photo: Photo;
  index?: number;
}

export function PhotoCard({ photo, index = 0 }: PhotoCardProps) {
  const [isHovered, setIsHovered]   = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const dispatch = useDispatch();
  const router   = useRouter();

  const defaultFormat = photo.formats[0];

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(addItem({ photo, format: defaultFormat }));
  };

  const handleView = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/photo/${photo.id}`);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  // Decide aspect ratio based on photo dimensions for masonry feel
  const aspectRatio = photo.height > photo.width ? 'aspect-[3/4]' : 'aspect-[4/3]';

  const UNSPLASH_URL = `https://picsum.photos/seed/${photo.unsplashId}/800/600`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative group cursor-pointer rounded-2xl overflow-hidden"
      style={{
        boxShadow: isHovered ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transition: 'box-shadow 0.3s ease',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => router.push(`/photo/${photo.id}`)}
    >
      {/* Image container */}
      <div className={`relative ${aspectRatio} overflow-hidden`}>
        <ShimmerImage
          src={UNSPLASH_URL}
          alt={photo.title}
          fill
          className="w-full h-full"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Watermark */}
        <div className="watermark-overlay">
          <span className="watermark-text">tufoto.net</span>
        </div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 photo-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Wishlist button (top right) */}
        <motion.button
          onClick={handleWishlist}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.2, delay: 0.05 }}
          className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center z-20 transition-colors"
          style={{
            background: isWishlisted ? 'rgba(201,169,110,0.9)' : 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(8px)',
            color: isWishlisted ? 'var(--bg-primary)' : 'white',
          }}
        >
          <Heart className="w-4 h-4" fill={isWishlisted ? 'currentColor' : 'none'} />
        </motion.button>

        {/* Category badge */}
        <div className="absolute top-3 left-3 z-20">
          <span
            className="text-xs font-medium px-2.5 py-1 rounded-full"
            style={{
              background: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(8px)',
              color: 'white',
            }}
          >
            {photo.category === 'wedding'  && '💍 Boda'}
            {photo.category === 'festival' && '🎵 Festival'}
            {photo.category === 'sports'   && '⚽ Deporte'}
            {photo.category === 'portrait' && '👤 Retrato'}
            {photo.category === 'nature'   && '🌿 Naturaleza'}
          </span>
        </div>

        {/* Bottom overlay info */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4 z-20"
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 8, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Title */}
          <p className="text-white font-medium text-sm mb-1 truncate">{photo.title}</p>
          <p className="text-white/60 text-xs mb-3">{photo.photographer}</p>

          {/* Actions row */}
          <div className="flex items-center gap-2">
            {/* Price */}
            <div className="flex-1">
              <span className="text-xs text-white/60">Desde</span>
              <p className="text-white font-bold text-base leading-none">
                {formatPrice(photo.price)}
              </p>
            </div>

            {/* View button */}
            <motion.button
              onClick={handleView}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium transition-colors"
              style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', color: 'white' }}
            >
              <Eye className="w-3.5 h-3.5" />
              Ver
            </motion.button>

            {/* Add to cart */}
            <motion.button
              onClick={handleAddToCart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium"
              style={{ background: 'var(--accent)', color: 'var(--bg-primary)' }}
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              Añadir
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Card footer */}
      <div
        className="px-3 py-2.5 flex items-center justify-between"
        style={{ background: 'var(--bg-card)' }}
      >
        <div className="flex items-center gap-2">
          {/* Photographer avatar */}
          <img
            src={photo.photographerAvatar}
            alt={photo.photographer}
            className="w-5 h-5 rounded-full object-cover"
          />
          <span className="text-xs" style={{ color: 'var(--fg-muted)' }}>
            {photo.photographer.split(' ')[0]}
          </span>
        </div>
        {photo.sold !== undefined && (
          <span className="text-xs" style={{ color: 'var(--fg-muted)' }}>
            {photo.sold} ventas
          </span>
        )}
      </div>
    </motion.article>
  );
}
