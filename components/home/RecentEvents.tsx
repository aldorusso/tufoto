'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Camera } from 'lucide-react';
import { MOCK_EVENTS } from '@/lib/data/mockPhotos';

export function RecentEvents() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2" style={{ color: 'var(--fg-primary)' }}>
            Eventos recientes
          </h2>
          <p className="text-base" style={{ color: 'var(--fg-secondary)' }}>
            Encuentra las fotos de tu última carrera
          </p>
        </div>
        <Link 
          href="/events" 
          className="flex items-center gap-1.5 text-sm font-bold transition-colors hover:text-[var(--fg-primary)]"
          style={{ color: 'var(--fg-secondary)' }}
        >
          Ver todos
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {MOCK_EVENTS.map((event, i) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group block relative rounded-2xl overflow-hidden cursor-pointer"
            style={{ 
              background: 'var(--bg-card)', 
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            {/* Cover Image Container */}
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <Image
                src={`https://picsum.photos/seed/${event.unsplashId}/800/600`}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Photo Count Badge */}
              <div 
                className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold shadow-md"
                style={{ background: 'var(--bg-primary)', color: 'var(--fg-primary)' }}
              >
                <Camera className="w-3.5 h-3.5" />
                {event.photoCount.toLocaleString()} fotos
              </div>
            </div>

            {/* Event Info */}
            <div className="p-5 flex flex-col h-full">
              <h3 className="text-lg font-bold mb-3 line-clamp-1 group-hover:text-[var(--accent)] transition-colors" style={{ color: 'var(--fg-primary)' }}>
                {event.title}
              </h3>
              
              <div className="flex items-center gap-4 text-xs font-medium mb-5" style={{ color: 'var(--fg-secondary)' }}>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {event.date}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {event.location}
                </div>
              </div>

              <div className="mt-auto pt-4 text-xs font-medium flex items-center gap-1" style={{ borderTop: '1px solid var(--border)', color: 'var(--fg-muted)' }}>
                por <span style={{ color: 'var(--fg-primary)' }}>{event.author}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
