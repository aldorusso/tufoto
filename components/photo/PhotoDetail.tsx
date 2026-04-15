'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShoppingCart, Heart, Share2, ZoomIn, ChevronLeft,
  MapPin, Calendar, User, Check, Shield,
} from 'lucide-react';
import { Photo, PhotoFormat } from '@/types';
import { addItem } from '@/lib/store/cartSlice';
import { formatPrice, formatDate } from '@/lib/utils';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface PhotoDetailProps {
  photo: Photo;
}

export function PhotoDetail({ photo }: PhotoDetailProps) {
  const dispatch = useDispatch();
  const [selectedFormat,  setSelectedFormat]  = useState<PhotoFormat>(photo.formats[0]);
  const [isZoomed,        setIsZoomed]        = useState(false);
  const [isWishlisted,    setIsWishlisted]    = useState(false);
  const [addedToCart,     setAddedToCart]     = useState(false);

  const UNSPLASH_URL = `https://picsum.photos/seed/${photo.unsplashId}/800/600`;

  const handleAddToCart = () => {
    dispatch(addItem({ photo, format: selectedFormat }));
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  const digitalFormats = photo.formats.filter((f) => f.id.startsWith('digital'));
  const printFormats   = photo.formats.filter((f) => !f.id.startsWith('digital'));

  return (
    <div className="min-h-screen pt-20" style={{ background: 'var(--bg-primary)' }}>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 text-sm transition-colors hover:text-[var(--accent)]"
          style={{ color: 'var(--fg-muted)' }}
        >
          <ChevronLeft className="w-4 h-4" />
          Volver a la galería
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* ── Left: Image ────────────────────────────────────── */}
          <div>
            <motion.div
              className="relative rounded-2xl overflow-hidden cursor-zoom-in"
              style={{
                aspectRatio: `${photo.width} / ${photo.height}`,
                boxShadow: 'var(--shadow-lg)',
              }}
              onClick={() => setIsZoomed(true)}
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={UNSPLASH_URL}
                alt={photo.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                draggable={false}
                style={{ userSelect: 'none' }}
              />

              {/* Watermark */}
              <div className="watermark-overlay">
                <span className="watermark-text">tufoto.net</span>
              </div>

              {/* Zoom hint */}
              <div
                className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs"
                style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)', color: 'white' }}
              >
                <ZoomIn className="w-3.5 h-3.5" />
                Vista previa
              </div>
            </motion.div>

            {/* Photographer credit */}
            <div className="flex items-center gap-3 mt-4">
              <img
                src={photo.photographerAvatar}
                alt={photo.photographer}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium" style={{ color: 'var(--fg-primary)' }}>
                  {photo.photographer}
                </p>
                <p className="text-xs" style={{ color: 'var(--fg-muted)' }}>Fotógrafo</p>
              </div>
            </div>
          </div>

          {/* ── Right: Details ─────────────────────────────────── */}
          <div>
            <ScrollReveal direction="right">
              {/* Category */}
              <p className="text-label mb-3">
                {photo.category === 'wedding'  && '💍 Bodas'}
                {photo.category === 'festival' && '🎵 Festival'}
                {photo.category === 'sports'   && '⚽ Deportes'}
                {photo.category === 'portrait' && '👤 Retrato'}
                {photo.category === 'nature'   && '🌿 Naturaleza'}
              </p>

              {/* Title */}
              <h1
                className="text-display mb-4"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--fg-primary)' }}
              >
                {photo.title}
              </h1>

              {/* Meta info */}
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { icon: MapPin,   text: photo.location },
                  { icon: Calendar, text: formatDate(photo.date) },
                  { icon: User,     text: photo.photographer },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--fg-secondary)' }}>
                    <Icon className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
                    {text}
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {photo.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{ background: 'var(--bg-secondary)', color: 'var(--fg-muted)', border: '1px solid var(--border)' }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Formats */}
              <div className="mb-8 space-y-5">
                {/* Digital */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--fg-muted)' }}>
                    Formato Digital
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {digitalFormats.map((fmt) => (
                      <FormatCard
                        key={fmt.id}
                        format={fmt}
                        isSelected={selectedFormat.id === fmt.id}
                        onClick={() => setSelectedFormat(fmt)}
                      />
                    ))}
                  </div>
                </div>

                {/* Print */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--fg-muted)' }}>
                    Impresión Física
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {printFormats.map((fmt) => (
                      <FormatCard
                        key={fmt.id}
                        format={fmt}
                        isSelected={selectedFormat.id === fmt.id}
                        onClick={() => setSelectedFormat(fmt)}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-end gap-3 mb-6">
                <p
                  className="font-bold"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '2rem', color: 'var(--fg-primary)' }}
                >
                  {formatPrice(selectedFormat.price)}
                </p>
                <p className="text-sm mb-1.5" style={{ color: 'var(--fg-muted)' }}>
                  / {selectedFormat.name}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mb-6">
                <MagneticButton
                  size="lg"
                  variant={addedToCart ? 'ghost' : 'primary'}
                  onClick={handleAddToCart}
                  className="flex-1 !justify-center"
                >
                  <AnimatePresence mode="wait">
                    {addedToCart ? (
                      <motion.span
                        key="added"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="flex items-center gap-2"
                        style={{ color: 'var(--accent)' }}
                      >
                        <Check className="w-4 h-4" /> ¡Añadido!
                      </motion.span>
                    ) : (
                      <motion.span
                        key="add"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="flex items-center gap-2"
                      >
                        <ShoppingCart className="w-4 h-4" /> Añadir al carrito
                      </motion.span>
                    )}
                  </AnimatePresence>
                </MagneticButton>

                <motion.button
                  whileTap={{ scale: 0.93 }}
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="w-14 h-14 rounded-full flex items-center justify-center border transition-colors"
                  style={{
                    borderColor: isWishlisted ? 'var(--accent)' : 'var(--border)',
                    background: isWishlisted ? 'rgba(201,169,110,0.1)' : 'transparent',
                    color: isWishlisted ? 'var(--accent)' : 'var(--fg-muted)',
                  }}
                >
                  <Heart className="w-5 h-5" fill={isWishlisted ? 'currentColor' : 'none'} />
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.93 }}
                  className="w-14 h-14 rounded-full flex items-center justify-center border"
                  style={{ borderColor: 'var(--border)', color: 'var(--fg-muted)' }}
                  onClick={() => navigator.share?.({ title: photo.title, url: window.location.href })}
                >
                  <Share2 className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Trust badge */}
              <div
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm"
                style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', color: 'var(--fg-secondary)' }}
              >
                <Shield className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--accent)' }} />
                Compra protegida · Descarga inmediata tras el pago · Soporte 24h
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* ── Zoom lightbox ──────────────────────────────────────── */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.93)', backdropFilter: 'blur(8px)', cursor: 'zoom-out' }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="relative rounded-xl overflow-hidden"
                style={{ aspectRatio: `${photo.width} / ${photo.height}`, maxHeight: '85vh' }}
              >
                <Image
                  src={UNSPLASH_URL}
                  alt={photo.title}
                  fill
                  className="object-contain"
                  draggable={false}
                />
                {/* Watermark in lightbox too */}
                <div className="watermark-overlay">
                  <span className="watermark-text">tufoto.net</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Format card sub-component ────────────────────────────── */
function FormatCard({
  format,
  isSelected,
  onClick,
}: {
  format: PhotoFormat;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className="relative text-left p-3 rounded-xl border transition-all duration-200"
      style={{
        background: isSelected ? 'rgba(201,169,110,0.08)' : 'var(--bg-secondary)',
        borderColor: isSelected ? 'var(--accent)' : 'var(--border)',
        color: 'var(--fg-primary)',
      }}
    >
      {isSelected && (
        <motion.div
          layoutId="format-check"
          className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center"
          style={{ background: 'var(--accent)' }}
        >
          <Check className="w-3 h-3" style={{ color: 'var(--bg-primary)' }} />
        </motion.div>
      )}
      <p className="text-xs font-semibold mb-0.5" style={{ color: isSelected ? 'var(--accent)' : 'var(--fg-primary)' }}>
        {format.name}
      </p>
      <p className="text-xs mb-1" style={{ color: 'var(--fg-muted)' }}>{format.description}</p>
      {format.resolution && (
        <p className="text-xs font-medium" style={{ color: 'var(--fg-secondary)' }}>{format.resolution}</p>
      )}
      <p className="text-sm font-bold mt-1.5" style={{ color: 'var(--fg-primary)' }}>
        {formatPrice(format.price)}
      </p>
    </motion.button>
  );
}
