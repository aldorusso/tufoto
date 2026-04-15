'use client';

import { motion } from 'framer-motion';
import { Search, Book, CreditCard, Camera, Users, AlertCircle, Shield, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function HelpCenterPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { icon: Book, title: 'Primeros Pasos', desc: 'Tutoriales básicos para configurar tu cuenta y subir fotos.' },
    { icon: CreditCard, title: 'Facturación y Pagos', desc: 'Conectar con Stripe, comisiones y configuración fiscal.' },
    { icon: Camera, title: 'IA y Reconocimiento', desc: 'Cómo optimizar fotos para el etiquetado facial de la IA.' },
    { icon: Users, title: 'Portal de Clientes', desc: 'Respuestas que puedes dar a tus clientes si tienen problemas.' },
    { icon: AlertCircle, title: 'Soporte Técnico', desc: 'Resolución de errores de subida, formatos RAW/JPEG.' },
    { icon: Shield, title: 'Legal y Privacidad', desc: 'Derechos de autor, GDPR y políticas de reembolso.' }
  ];

  const popularArticles = [
    '¿Cómo configuro mi cuenta de Stripe Express?',
    '¿Qué porcentaje de comisión cobra tufoto.net?',
    'Error de subida: Las fotos exceden los 50MB por archivo.',
    'Mi cliente no encuentra sus fotos con el número de dorsal.',
    'Personalizar la marca de agua (Watermark) de mis galerías.'
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
       
       {/* Search Hero */}
       <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 border-b border-[var(--border)] relative overflow-hidden" style={{ background: 'var(--bg-card)' }}>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[var(--accent)] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />
         
         <div className="max-w-3xl mx-auto text-center relative z-10">
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
             style={{ color: 'var(--fg-primary)' }}
           >
             ¿Cómo podemos <span style={{ color: 'var(--accent)' }}>ayudarte?</span>
           </motion.h1>
           
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="relative max-w-2xl mx-auto"
           >
             <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6" style={{ color: 'var(--fg-muted)' }} />
             <input 
               type="text" 
               placeholder="Busca tutoriales, errores, palabras clave..."
               className="w-full pl-16 pr-6 py-5 rounded-full outline-none text-lg font-medium shadow-xl transition-all focus:shadow-2xl focus:scale-[1.01]"
               style={{ background: 'var(--bg-primary)', border: '1px solid var(--border)', color: 'var(--fg-primary)' }}
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
             />
           </motion.div>
         </div>
       </div>

       {/* Main Content */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Categories */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--fg-primary)' }}>Navegar por categorías</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((cat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.05) }}
                  className="p-6 rounded-2xl cursor-pointer transition-transform hover:-translate-y-1"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                >
                  <cat.icon className="w-8 h-8 mb-4" style={{ color: 'var(--accent)' }} />
                  <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--fg-primary)' }}>{cat.title}</h3>
                  <p className="text-sm font-medium" style={{ color: 'var(--fg-secondary)' }}>{cat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.3 }}
             className="flex flex-col gap-10"
          >
             {/* Popular Articles */}
             <div>
               <h2 className="text-xl font-bold mb-6" style={{ color: 'var(--fg-primary)' }}>Artículos Populares</h2>
               <ul className="space-y-4">
                 {popularArticles.map((art, i) => (
                   <li key={i}>
                     <Link href="#" className="flex items-start gap-3 group">
                       <Book className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--fg-muted)' }} />
                       <span className="text-sm font-medium group-hover:text-[var(--accent)] transition-colors" style={{ color: 'var(--fg-secondary)' }}>
                         {art}
                       </span>
                     </Link>
                   </li>
                 ))}
               </ul>
             </div>

             {/* Not found block */}
             <div className="p-8 rounded-3xl" style={{ background: 'var(--fg-primary)', color: 'var(--bg-primary)' }}>
               <h3 className="text-xl font-bold mb-3">¿Aún necesitas ayuda?</h3>
               <p className="text-sm font-medium opacity-80 mb-6">Si no encuentras respuesta en los artículos, contacta con nuestro equipo B2B directamente.</p>
               <Link href="/contact">
                 <button className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-white text-black transition-transform hover:scale-105">
                   Abrir Ticket <ArrowRight className="w-4 h-4"/>
                 </button>
               </Link>
             </div>
          </motion.div>
       </div>

    </div>
  );
}
