'use client';

import { motion } from 'framer-motion';
import { Trophy, Mountain, Bike, Waves, Camera } from 'lucide-react';
import Link from 'next/link';

const CATEGORIES = [
  { id: 'c1', name: 'Maratón', icon: Trophy,  color: '#f4f4f5' },
  { id: 'c2', name: 'Trail',   icon: Mountain, color: '#f4f4f5' },
  { id: 'c3', name: 'Ciclismo', icon: Bike,     color: '#f4f4f5' },
  { id: 'c4', name: 'Triatlón', icon: Waves,    color: '#f4f4f5' },
  { id: 'c5', name: 'Fotógrafos', icon: Camera,  color: '#f4f4f5' },
];

export function PopularCategories() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 w-full border-t" style={{ borderColor: 'var(--border)', background: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold tracking-tight mb-10 text-center sm:text-left" style={{ color: 'var(--fg-primary)' }}>
          Explorar por deporte
        </h2>
        
        <div className="flex flex-wrap justify-center sm:justify-between items-center gap-6">
          {CATEGORIES.map((cat, i) => (
            <Link href={`/search?category=${cat.name.toLowerCase()}`} key={cat.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center gap-4 cursor-pointer group"
              >
                <div 
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center transition-all duration-300 group-hover:shadow-md"
                  style={{ background: cat.color, border: '1px solid var(--border)' }}
                >
                  <cat.icon className="w-8 h-8 transition-transform group-hover:scale-110" style={{ color: 'var(--fg-primary)' }} />
                </div>
                <span className="text-sm font-semibold" style={{ color: 'var(--fg-primary)' }}>
                  {cat.name}
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
