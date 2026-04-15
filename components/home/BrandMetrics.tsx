'use client';

import { motion } from 'framer-motion';

const METRICS = [
  { value: 'IA', label: 'Búsqueda facial instantánea', delay: 0 },
  { value: 'HD', label: 'Descargas de formato original', delay: 0.1 },
  { value: '24h', label: 'Pagos directos a tu cuenta', delay: 0.2 },
  { value: '100%', label: 'Control total sobre tus tarifas', delay: 0.3 },
];

export function BrandMetrics() {
  return (
    <section className="py-20 w-full border-t border-b" style={{ borderColor: 'var(--border)', background: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x-0 md:divide-x divide-gray-200">
          {METRICS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: s.delay }}
              className="flex flex-col items-center justify-center px-4"
            >
              <h3 
                className="font-bold tracking-tighter mb-2" 
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--fg-primary)' }}
              >
                {s.value}
              </h3>
              <p className="text-sm md:text-base font-medium" style={{ color: 'var(--fg-secondary)' }}>
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
