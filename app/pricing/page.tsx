'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Zap, HardDrive, Infinity } from 'lucide-react';
import Link from 'next/link';
import { BrandMetrics } from '@/components/home/BrandMetrics';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-32 pb-24">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest mb-6"
           style={{ background: 'var(--bg-card)', color: 'var(--fg-primary)', border: '1px solid var(--border)' }}
        >
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
          Sin comisiones ocultas
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
        >
          Paga solo el espacio <br/>
          <span style={{ color: 'var(--accent)' }}>que tu negocio necesita.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl font-medium" 
          style={{ color: 'var(--fg-secondary)' }}
        >
          En todos los planes se aplica nuestra comisión base del <strong>15% por cada fotográfia vendida</strong>. El coste mensual depende únicamente de tu almacenamiento activo.
        </motion.p>
      </div>

      {/* Pricing Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-24">
          
          {/* Plan 0: Base */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-3xl p-8 flex flex-col h-full"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
          >
            <div className="text-xl font-bold mb-2 uppercase tracking-wide" style={{ color: 'var(--fg-primary)' }}>Free Starter</div>
            <p className="text-sm font-medium mb-6" style={{ color: 'var(--fg-secondary)' }}>Para probar y montar tu primer par de galerías pequeñas.</p>
            <div className="flex items-end gap-1 mb-8">
              <span className="text-5xl font-extrabold tracking-tighter" style={{ color: 'var(--fg-primary)' }}>0€</span>
              <span className="font-bold pb-1" style={{ color: 'var(--fg-muted)' }}>/mes</span>
            </div>
            
            <ul className="space-y-4 mb-10 flex-1">
              {[
                { label: '5 GB de Alta Resolución', icon: HardDrive },
                { label: 'Ventas limitadas', icon: Infinity },
                { label: 'Pasarela de pagos Stripe', icon: Zap }
              ].map((item, i) => (
                 <li key={i} className="flex items-center gap-3">
                   <div className="p-1 rounded-full bg-[var(--bg-primary)] border border-[var(--border)]"><item.icon className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }}/></div>
                   <span className="text-sm font-bold" style={{ color: 'var(--fg-primary)' }}>{item.label}</span>
                 </li>
              ))}
            </ul>
            
            <Link href="/register" className="w-full">
              <button className="w-full py-4 rounded-xl font-bold transition-all hover:bg-[var(--bg-secondary)]" style={{ border: '2px solid var(--border)', color: 'var(--fg-primary)' }}>
                Empezar Gratis
              </button>
            </Link>
          </motion.div>

          {/* Plan 1: Pro */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-3xl p-8 flex flex-col h-full relative"
            style={{ border: '2px solid var(--accent)', background: 'var(--bg-primary)', boxShadow: 'var(--shadow-xl)' }}
          >
             {/* Popular Badge */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full text-xs font-bold bg-[var(--accent)] text-white shadow-lg">
               El más popular
             </div>

            <div className="text-xl font-bold mb-2 uppercase tracking-wide" style={{ color: 'var(--accent)' }}>Pro Season</div>
            <p className="text-sm font-medium mb-6" style={{ color: 'var(--fg-secondary)' }}>El estándar para fotógrafos que operan todos los fines de semana.</p>
            <div className="flex items-end gap-1 mb-8">
              <span className="text-5xl font-extrabold tracking-tighter" style={{ color: 'var(--fg-primary)' }}>9€</span>
              <span className="font-bold pb-1" style={{ color: 'var(--fg-muted)' }}>/mes</span>
            </div>
            
            <ul className="space-y-4 mb-10 flex-1">
              {[
                { label: '100 GB de Alta Resolución', icon: HardDrive },
                { label: 'Ventas Ilimitadas', icon: Infinity },
                { label: 'Priority AI Tagging', icon: Zap },
                { label: 'Estadísticas Avanzadas', icon: CheckCircle2 }
              ].map((item, i) => (
                 <li key={i} className="flex items-center gap-3">
                   <div className="p-1 rounded-full bg-[var(--accent)]"><item.icon className="w-3.5 h-3.5 text-white"/></div>
                   <span className="text-sm font-bold" style={{ color: 'var(--fg-primary)' }}>{item.label}</span>
                 </li>
              ))}
            </ul>
            
            <Link href="/register" className="w-full">
              <button className="w-full py-4 rounded-xl font-bold transition-all hover:scale-[1.02]" style={{ background: 'var(--fg-primary)', color: 'var(--bg-primary)' }}>
                Elegir plan Pro
              </button>
            </Link>
          </motion.div>

          {/* Plan 2: Studio */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="rounded-3xl p-8 flex flex-col h-full"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
          >
            <div className="text-xl font-bold mb-2 uppercase tracking-wide" style={{ color: 'var(--fg-primary)' }}>Big Studio</div>
            <p className="text-sm font-medium mb-6" style={{ color: 'var(--fg-secondary)' }}>Para productoras masivas o grandes festivales y maratones.</p>
            <div className="flex items-end gap-1 mb-8">
              <span className="text-5xl font-extrabold tracking-tighter" style={{ color: 'var(--fg-primary)' }}>29€</span>
              <span className="font-bold pb-1" style={{ color: 'var(--fg-muted)' }}>/mes</span>
            </div>
            
            <ul className="space-y-4 mb-10 flex-1">
               {[
                { label: '500 GB de Alta Resolución', icon: HardDrive },
                { label: 'Multi-Subcuentas', icon: Infinity },
                { label: 'Watermarks personalizados', icon: Zap },
                { label: 'Extracción instantánea', icon: CheckCircle2 }
              ].map((item, i) => (
                 <li key={i} className="flex items-center gap-3">
                   <div className="p-1 rounded-full bg-[var(--bg-primary)] border border-[var(--border)]"><item.icon className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }}/></div>
                   <span className="text-sm font-bold" style={{ color: 'var(--fg-primary)' }}>{item.label}</span>
                 </li>
              ))}
            </ul>
            
            <Link href="/register" className="w-full">
              <button className="w-full py-4 rounded-xl font-bold transition-all hover:bg-[var(--bg-secondary)]" style={{ border: '2px solid var(--border)', color: 'var(--fg-primary)' }}>
                Elegir plan Studio
              </button>
            </Link>
          </motion.div>

        </div>

        {/* Enterprise Call */}
        <div className="max-w-4xl mx-auto rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8" style={{ background: 'var(--fg-primary)', color: 'var(--bg-primary)' }}>
           <div>
             <h3 className="text-3xl font-extrabold tracking-tight mb-2">¿Necesitas Terabytes de espacio?</h3>
             <p className="font-medium opacity-80">Si cubres Ironmans o mundiales de deporte, escríbenos. Te preparamos servidores dedicados a medida.</p>
           </div>
           <Link href="/contact" className="w-full md:w-auto">
              <button className="w-full md:w-auto whitespace-nowrap py-4 px-8 rounded-xl font-bold hover:scale-105 transition-transform text-black bg-white">
                Contactar a Ventas
              </button>
           </Link>
        </div>

      </div>

      <div className="mt-32">
        <BrandMetrics />
      </div>

    </div>
  );
}
