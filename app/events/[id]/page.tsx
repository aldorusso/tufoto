'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Camera, MapPin, Calendar, ScanFace, Hash, ShoppingBag, ArrowLeft } from 'lucide-react';
import { MOCK_EVENTS, MOCK_PHOTOS } from '@/lib/data/mockPhotos';
import Link from 'next/link';

export default function EventDetailPage() {
  const params = useParams();
  const eventId = params.id as string;
  const event = MOCK_EVENTS.find(e => e.id === eventId) || MOCK_EVENTS[0]; // fallback

  const [searchMethod, setSearchMethod] = useState<'face' | 'bib'>('face');
  const [bibNumber, setBibNumber] = useState('');

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      
      {/* 1. Event Hero Banner */}
      <div className="relative w-full h-[50vh] min-h-[400px]">
        <Image
          src={`https://picsum.photos/seed/${event.unsplashId}/800/600`}
          alt={event.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Top Navbar over hero */}
        <div className="absolute top-20 left-0 w-full px-6 flex justify-between items-center z-10">
          <Link href="/search" className="flex items-center gap-2 text-white hover:text-[var(--accent)] transition-colors drop-shadow-md">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-bold">Volver a eventos</span>
          </Link>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-10 text-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider">
                  Evento
                </span>
                <span className="flex items-center gap-1 text-sm font-medium">
                  <Camera className="w-4 h-4" /> {event.photoCount.toLocaleString()} fotos
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2 leading-[1.1] text-white">
                {event.title}
              </h1>
              <div className="flex items-center gap-4 text-sm md:text-base font-medium opacity-90">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {event.date}</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {event.location}</span>
              </div>
            </div>
            
            <div className="text-right">
              <p className="text-sm opacity-80 mb-1">Fotografía oficial por</p>
              <p className="font-bold text-lg">{event.author}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 pb-24">
        
        {/* Search Card */}
        <div 
          className="rounded-3xl p-6 md:p-8 shadow-xl mb-12 flex flex-col md:flex-row items-center gap-8"
          style={{ background: 'var(--bg-primary)', border: '1px solid var(--border)' }}
        >
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--fg-primary)' }}>Encuentra tus fotos</h2>
            <p className="text-sm" style={{ color: 'var(--fg-secondary)' }}>Usamos inteligencia artificial para encontrar todas tus fotos al instante.</p>
          </div>

          <div className="w-full md:w-2/3 flex flex-col sm:flex-row gap-4">
            {/* Selfie Search Button */}
            <button 
              onClick={() => setSearchMethod('face')}
              className={`flex-1 flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all cursor-pointer ${searchMethod === 'face' ? 'border-[var(--accent)] bg-[var(--accent)]/5' : 'border-[var(--border)] hover:border-[var(--fg-muted)]'}`}
              style={{ color: searchMethod === 'face' ? 'var(--fg-primary)' : 'var(--fg-secondary)' }}
            >
              <ScanFace className={`w-8 h-8 mb-3 ${searchMethod === 'face' ? 'text-[var(--accent)]' : ''}`} />
              <span className="font-bold">Buscar por Selfie</span>
              <span className="text-xs mt-1 opacity-70 text-center">Encuentra tu rostro en {event.photoCount} fotos</span>
            </button>

            {/* Dorsal Search Button */}
            <button 
              onClick={() => setSearchMethod('bib')}
              className={`flex-1 flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all cursor-pointer ${searchMethod === 'bib' ? 'border-[var(--accent)] bg-[var(--accent)]/5' : 'border-[var(--border)] hover:border-[var(--fg-muted)]'}`}
              style={{ color: searchMethod === 'bib' ? 'var(--fg-primary)' : 'var(--fg-secondary)' }}
            >
              <Hash className={`w-8 h-8 mb-3 ${searchMethod === 'bib' ? 'text-[var(--accent)]' : ''}`} />
              <span className="font-bold">Número de Dorsal</span>
              <span className="text-xs mt-1 opacity-70 text-center">Filtra por tu número de corredor</span>
            </button>
          </div>
        </div>

        {/* Results Mock Context */}
        {searchMethod === 'bib' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-12 flex justify-center">
            <div className="flex gap-2 p-2 rounded-full border shadow-sm w-full max-w-md focus-within:shadow-md transition-shadow" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
              <input 
                type="text" 
                placeholder="Ej. 1045..." 
                className="w-full bg-transparent border-none outline-none px-4 text-center text-lg font-bold"
                value={bibNumber}
                onChange={(e) => setBibNumber(e.target.value)}
                style={{ color: 'var(--fg-primary)' }}
              />
              <button 
                className="px-6 py-2 rounded-full font-bold transition-transform hover:scale-105"
                style={{ background: 'var(--fg-primary)', color: 'var(--bg-primary)' }}
              >
                Buscar
              </button>
            </div>
          </motion.div>
        )}

        {searchMethod === 'face' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-12 flex justify-center">
             <button 
                className="px-8 py-4 rounded-full font-bold flex items-center gap-3 transition-transform hover:scale-105 shadow-xl"
                style={{ background: 'var(--accent)', color: 'white' }}
              >
                <Camera className="w-5 h-5" />
                Subir una selfie para buscar
              </button>
          </motion.div>
        )}

        {/* Gallery Divider */}
        <div className="flex items-center gap-4 mb-8">
          <h3 className="text-xl font-bold" style={{ color: 'var(--fg-primary)' }}>Todas las fotos</h3>
          <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          <span className="text-sm font-medium" style={{ color: 'var(--fg-secondary)' }}>Últimas subidas</span>
        </div>

        {/* Event Photos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {MOCK_PHOTOS.map((photo, i) => (
             <Link href={`/photo/${photo.id}`} key={`${photo.id}-${i}`}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer"
                style={{ background: 'var(--bg-muted)' }}
              >
                <Image
                  src={`https://picsum.photos/seed/${photo.unsplashId}/800/600`}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                   <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                     <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg">
                       <ShoppingBag className="w-5 h-5" />
                     </div>
                   </div>
                </div>

                {/* Price tag */}
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded-md text-white text-xs font-bold">
                  {photo.price}€
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
