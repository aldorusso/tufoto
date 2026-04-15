'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    question: '¿Cómo encuentro las fotos de mi evento?',
    answer: 'Simplemente ingresa el nombre del evento o la ciudad en nuestro buscador central. Una vez dentro de la página del evento, puedes buscar usando tu número de dorsal o subiendo un selfie para utilizar nuestro reconocimiento facial instantáneo.'
  },
  {
    question: '¿En qué formatos puedo descargar mis fotografías?',
    answer: 'Ofrecemos dos formatos digitales: "Digital Web" ideal para redes sociales (optimizada y ligera), y "Digital HD", el archivo original en máxima resolución sin compresión, perfecto para impresiones de gran tamaño.'
  },
  {
    question: 'Soy organizador, ¿puedo subir mi propio evento?',
    answer: '¡Por supuesto! tufoto.net es la plataforma ideal para centralizar la venta de tus fotos. Regístrate como Organizador o Fotógrafo en el enlace superior derecho para acceder a nuestras herramientas de subida masiva e Inteligencia Artificial.'
  },
  {
    question: '¿Cuánto tardan en procesarse los pagos y descargas?',
    answer: 'Es automático. Una vez realizas el pago seguro mediante tarjeta o pasarelas online, recibirás de inmediato un enlace de descarga directa y, opcionalmente, las fotos a través de tu WhatsApp.'
  }
];

export function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 w-full border-t" style={{ borderColor: 'var(--border)', background: 'var(--bg-primary)' }}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center" style={{ color: 'var(--fg-primary)' }}>
          Preguntas Frecuentes
        </h2>

        <div className="flex flex-col border-t" style={{ borderColor: 'var(--border)' }}>
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b" style={{ borderColor: 'var(--border)' }}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full py-6 flex items-center justify-between text-left focus:outline-none group transition-colors hover:bg-[var(--bg-secondary)] px-4"
                >
                  <span className="text-lg font-semibold pr-4" style={{ color: 'var(--fg-primary)' }}>
                    {faq.question}
                  </span>
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{ background: isOpen ? 'var(--fg-primary)' : 'var(--bg-secondary)' }}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" style={{ color: 'var(--bg-primary)' }} />
                    ) : (
                      <Plus className="w-4 h-4" style={{ color: 'var(--fg-primary)' }} />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 px-4">
                        <p className="text-base leading-relaxed max-w-2xl" style={{ color: 'var(--fg-secondary)' }}>
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
