'use client';

import { motion } from 'framer-motion';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Camera, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function ForPhotographers() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 w-full overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Side: Images/Context */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 relative h-[500px]"
        >
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <Image
              src="https://picsum.photos/seed/photographer/800/600"
              alt="Fotógrafo profesional"
              fill
              className="object-cover"
              sizes="50vw"
            />
            {/* Vexora-style overlay to make it clean */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.1) 0%, transparent 100%)' }} />
          </div>
          
          {/* Floating detail box */}
          <div 
            className="absolute -bottom-6 -right-6 p-6 rounded-2xl shadow-xl w-64 hidden sm:block"
            style={{ background: 'var(--bg-primary)', border: '1px solid var(--border)' }}
          >
            <div className="flex items-center gap-3 mb-2">
              <Camera className="w-5 h-5" style={{ color: 'var(--fg-primary)' }} />
              <h4 className="font-bold text-sm" style={{ color: 'var(--fg-primary)' }}>Para profesionales</h4>
            </div>
            <p className="text-xs" style={{ color: 'var(--fg-secondary)' }}>
              Únete a nuestra plataforma, centra tu tiempo en disparar y deja que nosotros nos encarguemos de la inteligencia artificial, indexación y ventas.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Copy */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ color: 'var(--fg-primary)' }}>
            Lleva tu fotografía de eventos al siguiente nivel
          </h2>
          <p className="text-lg mb-8 max-w-md" style={{ color: 'var(--fg-secondary)' }}>
            Vende tus imágenes de manera automática a miles de participantes usando nuestra tecnología líder de búsqueda por IA y reconocimiento de dorsal.
          </p>

          <ul className="flex flex-col gap-4 mb-10">
            {[
              'Sube tus galerías en minutos y de forma masiva',
              'Auto-etiquetado inteligente con reconocimiento facial',
              'Pagos puntuales y estadísticas de ventas en tiempo real',
              'Control total sobre tus precios y formatos'
            ].map((benefit, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--fg-primary)' }} />
                <span className="font-medium text-sm md:text-base" style={{ color: 'var(--fg-primary)' }}>
                  {benefit}
                </span>
              </li>
            ))}
          </ul>

          <Link href="/for-photographers">
            <MagneticButton size="lg" className="w-fit" variant="primary">
              Empezar a vender fotos
            </MagneticButton>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
