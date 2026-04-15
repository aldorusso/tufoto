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
      <div className="w-full">
        
        {/* Massive Search Hero */}
        <div className="w-full bg-[var(--bg-card)] border-b border-[var(--border)] pt-20 pb-24 px-4 sm:px-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[40vh]">
           {/* Decorative background blur */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[var(--accent)] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />
           
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
             className="relative z-10 w-full max-w-3xl mx-auto text-center"
           >
             <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4" style={{ color: 'var(--fg-primary)' }}>
               Encuentra tu evento
             </h1>
             <p className="text-lg mb-10" style={{ color: 'var(--fg-secondary)' }}>
               Busca tu carrera, triatlón o festival corporativo en milisegundos.
             </p>
             
             {/* Prominent Search Bar */}
             <div 
               className="flex items-center w-full bg-[var(--bg-primary)] px-6 py-5 rounded-full border shadow-xl transition-all focus-within:shadow-2xl focus-within:scale-[1.02] focus-within:border-[var(--accent)]"
               style={{ borderColor: 'var(--border)' }}
             >
               <Search className="w-6 h-6 flex-shrink-0 mr-4" style={{ color: 'var(--accent)' }} />
               <input 
                 type="text" 
                 placeholder="Buscar por nombre, deporte o ciudad..."
                 className="w-full bg-transparent border-none outline-none text-lg md:text-xl font-medium"
                 style={{ color: 'var(--fg-primary)' }}
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                 autoFocus
               />
               
               {/* Search shortcut hint or button */}
               <div className="hidden md:flex items-center justify-center px-4 py-2 ml-4 rounded-full bg-[var(--fg-primary)] text-[var(--bg-primary)] font-bold text-sm cursor-pointer hover:scale-105 transition-transform">
                 Buscar
               </div>
             </div>
             
             {/* Quick tags */}
             <div className="mt-8 flex flex-wrap justify-center gap-3">
                <span className="text-sm font-medium opacity-60">Sugerencias:</span>
                {['Maratón', 'Madrid', 'Boda', 'Ciclismo'].map(tag => (
                  <button 
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    className="text-sm font-bold px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--bg-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                  >
                    {tag}
                  </button>
                ))}
             </div>
           </motion.div>
        </div>

        {/* Results Grid Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold" style={{ color: 'var(--fg-primary)' }}>
              {searchTerm ? `Resultados para "${searchTerm}"` : 'Eventos recientes'}
            </h2>
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border)]">
              {filteredEvents.length} eventos
            </span>
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
    </div>
  );
}
