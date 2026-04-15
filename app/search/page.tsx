'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, MapPin, Calendar, Camera, ArrowRight } from 'lucide-react';
import { MOCK_EVENTS } from '@/lib/data/mockPhotos';
import Link from 'next/link';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // Simple filter simulation
  const filteredEvents = MOCK_EVENTS.filter(ev => 
    ev.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    ev.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12 border-b pb-8" style={{ borderColor: 'var(--border)' }}>
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--fg-primary)' }}>
              Explorar Eventos
            </h1>
            <p className="text-base" style={{ color: 'var(--fg-secondary)' }}>
              Busca tu carrera, triatlón o festival. Encuentra tus fotos en segundos.
            </p>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-end">
            <div 
              className="flex items-center w-full max-w-md px-4 py-3 rounded-full border shadow-sm transition-shadow focus-within:shadow-md"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              <Search className="w-5 h-5 flex-shrink-0 mr-3" style={{ color: 'var(--fg-muted)' }} />
              <input 
                type="text" 
                placeholder="Buscar por nombre o ciudad..."
                className="w-full bg-transparent border-none outline-none text-sm font-medium"
                style={{ color: 'var(--fg-primary)' }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Results Grid */}
        {filteredEvents.length === 0 ? (
          <div className="py-20 text-center" style={{ color: 'var(--fg-muted)' }}>
            No se encontraron eventos para "{searchTerm}"
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEvents.map((event, i) => (
              <Link href={`/events/${event.id}`} key={event.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group block relative rounded-2xl overflow-hidden cursor-pointer h-full"
                  style={{ 
                    background: 'var(--bg-card)', 
                    border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  {/* Cover */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <Image
                      src={`https://picsum.photos/seed/${event.unsplashId}/800/600`}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div 
                      className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold shadow-md"
                      style={{ background: 'var(--bg-primary)', color: 'var(--fg-primary)' }}
                    >
                      <Camera className="w-3.5 h-3.5" />
                      {event.photoCount.toLocaleString()}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 flex flex-col h-[calc(100%-62.5%)]">
                    <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-[var(--accent)] transition-colors" style={{ color: 'var(--fg-primary)' }}>
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

                    <div className="mt-auto pt-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--border)' }}>
                      <span className="text-xs font-medium" style={{ color: 'var(--fg-muted)' }}>
                        por <span style={{ color: 'var(--fg-primary)' }}>{event.author}</span>
                      </span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" style={{ color: 'var(--fg-primary)' }} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
