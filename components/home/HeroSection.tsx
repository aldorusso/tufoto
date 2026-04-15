'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, MapPin } from 'lucide-react';
import { MOCK_EVENTS } from '@/lib/data/mockPhotos';

export function HeroSection() {
  const [searchEvent, setSearchEvent] = useState('');
  const [searchCity, setSearchCity]   = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchEvent, 'in', searchCity);
  };

  return (
    <section className="relative w-full overflow-hidden" 
      style={{ 
        background: 'var(--bg-primary)', // Pure Vexora white
        minHeight: '90vh',
        paddingTop: '8rem',
        paddingBottom: '4rem'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[70vh]">
        
        {/* Left Col: Text & Search */}
        <div className="flex flex-col text-left relative z-10 w-full xl:pr-10">
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="font-bold tracking-tight mb-4 leading-[1.1]"
            style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'var(--fg-primary)' }}
          >
            Encuentra tus fotos de carrera y deporte
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="text-lg font-medium mb-10 max-w-lg"
            style={{ color: 'var(--fg-secondary)' }}
          >
            Busca tu participación a través de tu número de dorsal o reconocimiento facial y revive tus mejores instantes.
          </motion.p>

          {/* Search Pill */}
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            onSubmit={handleSearch}
            className="w-full flex justify-between shadow-lg overflow-hidden border p-1 border-black/5"
            style={{ 
              background: 'var(--bg-card)', // #fafafa
              borderRadius: '2rem'
            }}
          >
            <div className="flex-1 flex flex-col sm:flex-row w-full divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              {/* Event/Number Input */}
              <div className="flex-1 flex items-center px-4 py-2">
                <Search className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--fg-secondary)' }} />
                <input 
                  type="text" 
                  placeholder="Nombre de evento o fotógrafo"
                  className="w-full bg-transparent border-none outline-none px-3 text-sm font-medium"
                  style={{ color: 'var(--fg-primary)' }}
                  value={searchEvent}
                  onChange={(e) => setSearchEvent(e.target.value)}
                />
              </div>

              {/* Location/Date Input */}
              <div className="sm:w-32 lg:w-40 xl:w-48 flex items-center px-4 py-2">
                <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--fg-secondary)' }} />
                <input 
                  type="text" 
                  placeholder="Ciudad"
                  className="w-full bg-transparent border-none outline-none px-3 text-sm font-medium"
                  style={{ color: 'var(--fg-primary)' }}
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                />
              </div>
            </div>

            <button 
              type="submit"
              className="px-6 py-2 ml-1 font-bold text-sm transition-colors rounded-[1.8rem] flex items-center justify-center whitespace-nowrap"
              style={{ background: 'var(--fg-primary)', color: 'var(--bg-primary)' }}
            >
              Buscar
            </button>
          </motion.form>

          {/* Quick links under search */}
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.3 }}
             className="flex flex-wrap items-center mt-6 gap-2 text-sm"
             style={{ color: 'var(--fg-secondary)' }}
          >
            <span className="font-semibold mr-2 text-xs uppercase tracking-wider" style={{ color: 'var(--fg-primary)' }}>Tendencia:</span>
            {['Maratón Valencia', 'Triatlón Vitoria', 'Behobia'].map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full border border-black/5 hover:border-black/20 cursor-pointer transition-colors" style={{ background: 'var(--bg-secondary)' }}>
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Col: Minimalist Image Collage */}
        <div className="relative w-full h-[500px] lg:h-[600px] hidden md:block">
          {MOCK_EVENTS.slice(0, 3).map((ev, idx) => {
            const positions = [
              { top: '10%', right: '5%', width: '60%', height: '55%', z: 3 },
              { bottom: '5%', left: '0%', width: '50%', height: '45%', z: 2 },
              { bottom: '20%', right: '0%', width: '45%', height: '40%', z: 1 },
            ];
            const p = positions[idx];
            return (
              <motion.div
                key={ev.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 + idx * 0.1, ease: 'easeOut' }}
                className="absolute overflow-hidden rounded-2xl shadow-xl border-4"
                style={{ 
                  ...p, 
                  borderColor: 'var(--bg-primary)', 
                  zIndex: p.z 
                }}
              >
                <Image
                  src={`https://picsum.photos/seed/${ev.unsplashId}/800/600`}
                  alt={ev.title}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </motion.div>
            )
          })}
        </div>
        
      </div>
    </section>
  );
}
