'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Shield, Download } from 'lucide-react';
import { MOCK_PHOTOS } from '@/lib/data/mockPhotos';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { formatPrice } from '@/lib/utils';

const FEATURES = [
  {
    icon: Shield,
    title: 'Descarga segura',
    description: 'Archivos entregados por email con enlace protegido de 48h.',
  },
  {
    icon: Star,
    title: 'Calidad premium',
    description: 'Imágenes en alta resolución, listas para imprimir o publicar.',
  },
  {
    icon: Download,
    title: 'Descarga inmediata',
    description: 'Acceso instantáneo tras el pago. Sin esperas.',
  },
];

export function FeaturedSection() {
  const featured = MOCK_PHOTOS.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      {/* Features strip */}
      <section
        className="py-16"
        style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feat, i) => (
              <ScrollReveal key={feat.title} delay={i * 0.1} direction="up">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(201,169,110,0.12)', border: '1px solid rgba(201,169,110,0.25)' }}
                  >
                    <feat.icon className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm" style={{ color: 'var(--fg-primary)' }}>
                      {feat.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-secondary)' }}>
                      {feat.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured photos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <ScrollReveal className="flex items-end justify-between mb-10">
          <div>
            <p className="text-label mb-2">Destacadas</p>
            <h2
              className="text-display"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--fg-primary)' }}
            >
              Las más{' '}
              <span className="text-gradient italic">populares</span>
            </h2>
          </div>
          <Link href="/gallery">
            <motion.span
              className="text-sm font-medium flex items-center gap-1.5 transition-colors"
              style={{ color: 'var(--fg-secondary)' }}
              whileHover={{ color: 'var(--accent)' }}
            >
              Ver todo <ArrowRight className="w-4 h-4" />
            </motion.span>
          </Link>
        </ScrollReveal>

        {/* Featured grid — one large + two small */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 h-auto lg:h-[580px]">
          {/* Large card */}
          {featured[0] && (
            <ScrollReveal className="lg:row-span-1 h-64 sm:h-80 lg:h-full">
              <Link href={`/photo/${featured[0].id}`} className="block h-full">
                <motion.div
                  className="relative h-full rounded-2xl overflow-hidden group cursor-pointer bg-[var(--bg-tertiary)]"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={`https://picsum.photos/seed/${featured[0].unsplashId}/800/600`}
                    alt={featured[0].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    draggable={false}
                  />
                  <div className="photo-overlay absolute inset-0" />
                  <div className="absolute inset-0 watermark-overlay">
                    <span className="watermark-text">tufoto.net</span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-label mb-1">{featured[0].category}</p>
                    <h3 className="text-white font-semibold text-xl mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      {featured[0].title}
                    </h3>
                    <p className="text-white/60 text-sm">{featured[0].photographer} · {formatPrice(featured[0].price)}</p>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          )}

          {/* Two smaller cards */}
          <div className="flex flex-col gap-5 h-64 sm:h-auto">
            {featured.slice(1, 3).map((photo, i) => (
              <ScrollReveal key={photo.id} delay={0.1 + i * 0.1} className="flex-1 min-h-48">
                <Link href={`/photo/${photo.id}`} className="block h-full">
                  <motion.div
                    className="relative h-full min-h-48 rounded-2xl overflow-hidden group cursor-pointer bg-[var(--bg-tertiary)]"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={`https://picsum.photos/seed/${photo.unsplashId}/800/600`}
                      alt={photo.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      draggable={false}
                    />
                    <div className="photo-overlay absolute inset-0" />
                    <div className="absolute inset-0 watermark-overlay">
                      <span className="watermark-text" style={{ fontSize: '1rem' }}>tufoto.net</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-medium text-sm mb-0.5" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        {photo.title}
                      </h3>
                      <p className="text-white/60 text-xs">{photo.photographer} · {formatPrice(photo.price)}</p>
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <ScrollReveal>
          <div
            className="relative rounded-3xl overflow-hidden px-8 py-16 text-center"
            style={{
              background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)',
              border: '1px solid var(--border)',
            }}
          >
            {/* Decorative circle */}
            <div
              className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)' }}
            />
            <div
              className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full opacity-10"
              style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)' }}
            />

            <p className="text-label mb-4">¿Eres fotógrafo?</p>
            <h2
              className="text-display mb-4"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--fg-primary)' }}
            >
              Vende tus fotos en{' '}
              <span className="text-gradient italic">tufoto.net</span>
            </h2>
            <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: 'var(--fg-secondary)' }}>
              Únete a nuestra comunidad de más de 48 fotógrafos profesionales y convierte tu pasión en ingresos.
            </p>
            <MagneticButton size="lg" variant="primary">
              Empieza gratis <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
