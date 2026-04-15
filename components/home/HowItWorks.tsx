'use client';

import { motion } from 'framer-motion';
import { Search, UserSquare2, Download } from 'lucide-react';

const STEPS = [
  {
    icon: Search,
    number: '1',
    title: 'Busca tu evento',
    description: 'Encuentra tu carrera o evento deportivo en nuestro buscador',
  },
  {
    icon: UserSquare2,
    number: '2',
    title: 'Encuentra tus fotos',
    description: 'Usa reconocimiento facial o tu número de dorsal para encontrar tus fotos',
  },
  {
    icon: Download,
    number: '3',
    title: 'Descarga al instante',
    description: 'Compra y recibe tus fotos en alta calidad directamente por WhatsApp',
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 w-full" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-20 text-center" style={{ color: 'var(--fg-primary)' }}>
          ¿Cómo funciona?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              {/* Icon Container */}
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ background: 'var(--bg-primary)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
              >
                <step.icon className="w-7 h-7" style={{ color: 'var(--fg-primary)' }} />
              </div>

              {/* Number styling like the screenshot */}
              <div className="text-4xl font-bold mb-4 opacity-10" style={{ color: 'var(--fg-primary)' }}>
                {step.number}
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--fg-primary)' }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed max-w-[250px]" style={{ color: 'var(--fg-secondary)' }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
