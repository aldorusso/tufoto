'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ForPhotographers as ForPhotographersComponent } from '@/components/home/ForPhotographers';
import { BrandMetrics } from '@/components/home/BrandMetrics';
import { Banknote, ShieldCheck, Zap, UploadCloud, BrainCircuit, ShoppingBag, ChevronDown, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const FAQ_ITEMS = [
  {
    q: '¿Conservaré los derechos de autor de mis fotos?',
    a: 'Absolutamente. Tú mantienes el 100% de la propiedad intelectual de tus imágenes. Nosotros solo actuamos como plataforma tecnológica y pasarela de venta.'
  },
  {
    q: '¿Cuándo recibo el dinero en mi banco?',
    a: 'Los pagos se procesan automáticamente a través de Stripe y se transfieren a tu cuenta bancaria vinculada en un plazo de 24 a 48 horas tras cada venta.'
  },
  {
    q: '¿Puedo establecer mis propios precios?',
    a: 'Sí, tienes control absoluto. Puedes vender tus fotos al precio que consideres justo e incluso ofrecer paquetes promocionales.'
  },
  {
    q: '¿Hay algún límite de subida?',
    a: 'No hay límite de fotos ni de eventos. Puedes subir coberturas enteras en alta resolución. Queremos que escales tu negocio sin restricciones.'
  }
];

export default function ForPhotographersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <div className="min-h-screen flex flex-col w-full bg-[var(--bg-primary)]">
      
      {/* 1. Ultra-Clean SaaS B2B Hero */}
      <section className="relative w-full pt-40 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[var(--bg-primary)] border-b border-[var(--border)]">
        {/* Vercel-style CSS Grid Background */}
        <div className="absolute inset-0 z-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(to right, var(--fg-primary) 1px, transparent 1px), linear-gradient(to bottom, var(--fg-primary) 1px, transparent 1px)', 
               backgroundSize: '4rem 4rem',
               maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
               WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
             }} 
        />
        
        {/* Soft glowing ambient orb behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[var(--accent)] opacity-[0.04] blur-[120px] rounded-full z-0" pointer-events="none" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          
          <motion.div
             initial={{ opacity: 0, y: -10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest mb-8"
             style={{ background: 'var(--bg-card)', color: 'var(--fg-primary)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
          >
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            La tecnología de tufoto.net para Profesionales
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tighter mb-8 leading-[1.05]"
            style={{ color: 'var(--fg-primary)' }}
          >
            Sube tus fotos.<br />
            <span style={{ color: 'var(--fg-secondary)' }}>La IA se encarga de venderlas.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--fg-secondary)' }}
          >
            Infraestructura cloud para cubrir eventos masivos. Automatizamos el etiquetado facial, la galería de cliente y la pasarela de pagos para que dediques tu tiempo a disparar, no a gestionar.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto"
          >
            <Link href="/register">
              <button 
                className="px-8 py-4 rounded-xl font-bold transition-transform hover:scale-[1.02] shadow-xl w-full sm:w-auto text-base"
                style={{ background: 'var(--fg-primary)', color: 'var(--bg-primary)' }}
              >
                Comenzar integración gratuita
              </button>
            </Link>
            <Link href="#pricing">
               <button 
                className="px-8 py-4 rounded-xl font-bold transition-transform hover:bg-[var(--bg-card)] w-full sm:w-auto text-base"
                style={{ background: 'transparent', color: 'var(--fg-primary)', border: '1px solid var(--border)' }}
              >
                Ver modelo de comisiones
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Beneficios */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[{
            icon: Zap,
            title: 'Sube Miles de Fotos en Minutos',
            desc: 'Servidores optimizados que aceptan RAWs masivos o JPEGs. Todo estructurado en carpetas automáticas.'
          }, {
            icon: ShieldCheck,
            title: 'Reconocimiento Facial IA',
            desc: 'Olvídate de clasificar quién es quién. Dejamos que los clientes se busquen con un simple selfie o su número de dorsal.'
          }, {
            icon: Banknote,
            title: 'Pagos Transparentes y Rápidos',
            desc: 'Controla el precio de compra. El dinero llega directo a tu cuenta vinculada de Stripe en 24 horas.'
          }].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-start p-8 rounded-3xl"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ background: 'var(--bg-primary)', border: '1px solid var(--border)' }}>
                <feature.icon className="w-6 h-6" style={{ color: 'var(--fg-primary)' }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--fg-primary)' }}>{feature.title}</h3>
              <p className="text-sm font-medium leading-relaxed" style={{ color: 'var(--fg-secondary)' }}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Cómo Funciona (Workflow) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)]" style={{ background: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--fg-primary)' }}>Cómo funciona</h2>
            <p className="text-lg" style={{ color: 'var(--fg-secondary)' }}>Un flujo de trabajo diseñado para que solo te preocupes de fotografiar.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', icon: UploadCloud, title: 'Sube las fotos', desc: 'Arrastra tus archivos exportados directamente desde Lightroom a nuestra nube.' },
              { step: '02', icon: BrainCircuit, title: 'IA etiqueta todo', desc: 'Nuestro algoritmo reconoce los rostros y dorsales de los corredores o invitados al instante.' },
              { step: '03', icon: ShoppingBag, title: 'Los clientes compran', desc: 'Con un selfie, tus clientes encuentran su galería personal y pagan en 1 clic.' },
              { step: '04', icon: Banknote, title: 'Recibes tu dinero', desc: 'Transferimos tus ganancias directo a tu banco sin que tengas que pedirlo.' }
            ].map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center px-4"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 relative z-10" style={{ background: 'var(--bg-primary)', border: '2px solid var(--accent)' }}>
                  <s.icon className="w-7 h-7" style={{ color: 'var(--accent)' }} />
                </div>
                {i !== 3 && <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-[var(--border)] -z-0" />}
                <div className="text-sm font-bold mb-2 uppercase tracking-widest text-[var(--accent)]">Paso {s.step}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--fg-primary)' }}>{s.title}</h3>
                <p className="text-sm font-medium" style={{ color: 'var(--fg-secondary)' }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Estructura de Precios (Transparent Pricing) */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ color: 'var(--fg-primary)' }}>
          Modelo de negocio <span style={{ color: 'var(--accent)' }}>Transparente.</span>
        </h2>
        <p className="text-xl font-medium mb-16 max-w-2xl mx-auto" style={{ color: 'var(--fg-secondary)' }}>
          Cero fricción. Sin mensualidades, ni pagos por almacenamiento.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
          <motion.div 
            whileHover={{ y: -5 }}
            className="flex-1 p-10 rounded-3xl text-left"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
          >
            <div className="text-[var(--accent)] font-bold text-6xl tracking-tighter mb-4">0€</div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--fg-primary)' }}>Mantenimiento</h3>
            <p className="font-medium text-sm mb-6" style={{ color: 'var(--fg-secondary)' }}>Podrás subir y almacenar todas las galerías de eventos que quieras, para siempre.</p>
            <ul className="space-y-3">
              {['Almacenamiento Ilimitado', 'Perfiles de fotógrafo', 'Estadísticas de ventas'].map((li, i) =>(
                <li key={i} className="flex items-center gap-2 text-sm font-bold" style={{ color: 'var(--fg-primary)' }}><CheckCircle2 className="w-4 h-4 text-[var(--accent)]"/> {li}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="flex-1 p-10 rounded-3xl text-left relative overflow-hidden"
            style={{ background: 'var(--fg-primary)', color: 'var(--bg-primary)', boxShadow: 'var(--shadow-xl)' }}
          >
            <div className="absolute top-0 right-0 p-4 opacity-10"><Zap className="w-32 h-32" /></div>
            <div className="text-[var(--bg-primary)] font-bold text-6xl tracking-tighter mb-4">15%</div>
            <h3 className="text-2xl font-bold mb-2">Comisión de venta</h3>
            <p className="font-medium text-sm mb-6 opacity-80">Sólo ganamos si tú ganas. Retenemos un porcentaje transaccional en cada compra de foto completada.</p>
            <ul className="space-y-3">
              {['Procesamiento de pagos (Stripe)', 'Uso de Inteligencia Artificial', 'Facturación a clientes automatizada'].map((li, i) =>(
                <li key={i} className="flex items-center gap-2 text-sm font-bold"><CheckCircle2 className="w-4 h-4 text-[var(--accent)]"/> {li}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 5. Metrics & Tools Highlight (Reused from Home) */}
      <ForPhotographersComponent />
      <div className="my-10"><BrandMetrics /></div>

      {/* 6. FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--fg-primary)' }}>Preguntas Frecuentes</h2>
        </div>
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, i) => (
             <div 
               key={i} 
               className="rounded-2xl overflow-hidden transition-all"
               style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
             >
               <button 
                 onClick={() => setOpenFaq(openFaq === i ? null : i)}
                 className="w-full px-6 py-5 flex items-center justify-between font-bold text-left"
                 style={{ color: 'var(--fg-primary)' }}
               >
                 {faq.q}
                 <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} className="flex-shrink-0 ml-4">
                   <ChevronDown className="w-5 h-5" />
                 </motion.div>
               </button>
               <AnimatePresence>
                 {openFaq === i && (
                   <motion.div 
                     initial={{ height: 0, opacity: 0 }} 
                     animate={{ height: 'auto', opacity: 1 }} 
                     exit={{ height: 0, opacity: 0 }}
                     className="px-6 pb-5 font-medium text-sm"
                     style={{ color: 'var(--fg-secondary)' }}
                   >
                     {faq.a}
                   </motion.div>
                 )}
               </AnimatePresence>
             </div>
          ))}
        </div>
      </section>

      {/* 7. Final Call to Action */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'var(--fg-primary)' }}>
        <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/seed/abstract-tech/1920/1080')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8" style={{ color: 'var(--bg-primary)' }}>
            Empieza a monetizar tu talento <span style={{ color: 'var(--accent)' }}>hoy mismo.</span>
          </h2>
          <p className="text-lg md:text-xl font-medium mb-12 opacity-80" style={{ color: 'var(--bg-primary)' }}>
            Únete a la mejor plataforma de gestión de fotos para profesionales. Sube tu primer evento en menos de 5 minutos.
          </p>
          <Link href="/register">
            <button 
              className="px-10 py-5 rounded-full font-bold transition-transform hover:scale-105 text-lg"
              style={{ background: 'var(--accent)', color: 'white' }}
            >
              Crear cuenta gratuita de Fotógrafo
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
