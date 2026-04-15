'use client';

import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
            style={{ color: 'var(--fg-primary)' }}
          >
            Hablemos.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl font-medium max-w-2xl mx-auto"
            style={{ color: 'var(--fg-secondary)' }}
          >
            Tanto si eres un fotógrafo independiente como el organizador de un maratón mundial, estamos aquí para dotarte de infraestructura.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-10"
          >
             <div>
               <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--fg-primary)' }}>Ponte en contacto</h3>
               <p className="font-medium text-sm leading-relaxed mb-8" style={{ color: 'var(--fg-secondary)' }}>
                 Nuestro equipo técnico y de soporte comercial suele responder en menos de 24 horas laborables. Si tienes una emergencia de facturación, por favor indica "URGENTE" en el inicio de tu mensaje.
               </p>
             </div>

             <div className="flex items-start gap-4">
               <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                 <Mail className="w-5 h-5" style={{ color: 'var(--accent)' }}/>
               </div>
               <div>
                 <h4 className="font-bold mb-1" style={{ color: 'var(--fg-primary)' }}>Soporte Comercial</h4>
                 <p className="text-sm font-medium mb-1" style={{ color: 'var(--fg-secondary)' }}>Dudas sobre el modelo de comisiones o enterprise.</p>
                 <a href="mailto:hola@tufoto.net" className="text-sm font-bold underline" style={{ color: 'var(--fg-primary)' }}>hola@tufoto.net</a>
               </div>
             </div>

             <div className="flex items-start gap-4">
               <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                 <MessageCircle className="w-5 h-5" style={{ color: 'var(--accent)' }}/>
               </div>
               <div>
                 <h4 className="font-bold mb-1" style={{ color: 'var(--fg-primary)' }}>Línea Directa Partners</h4>
                 <p className="text-sm font-medium mb-1" style={{ color: 'var(--fg-secondary)' }}>Atención rápida a organizadores profesionales.</p>
                 <a href="tel:+34900000000" className="text-sm font-bold underline" style={{ color: 'var(--fg-primary)' }}>+34 900 000 000</a>
               </div>
             </div>

             <div className="flex items-start gap-4">
               <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                 <MapPin className="w-5 h-5" style={{ color: 'var(--accent)' }}/>
               </div>
               <div>
                 <h4 className="font-bold mb-1" style={{ color: 'var(--fg-primary)' }}>Headquarters</h4>
                 <p className="text-sm font-medium" style={{ color: 'var(--fg-secondary)' }}>tufoto.net Systems Inc.<br/>Distrito Tecnológico, Madrid, España.</p>
               </div>
             </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="p-8 md:p-12 rounded-[2rem]"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-xl)' }}
          >
            {submitted ? (
              <div className="text-center py-20 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-green-100 text-green-600">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-2">Mensaje Recibido</h3>
                <p className="font-medium text-sm text-gray-500">Te responderemos a la brevedad posible a tu correo.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--fg-muted)' }}>Nombre Completo</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full px-5 py-4 rounded-xl outline-none font-medium transition-colors"
                    style={{ background: 'var(--bg-primary)', border: '1px solid var(--border)', color: 'var(--fg-primary)' }}
                    placeholder="Ej. Ana García"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--fg-muted)' }}>Correo Electrónico</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full px-5 py-4 rounded-xl outline-none font-medium transition-colors"
                    style={{ background: 'var(--bg-primary)', border: '1px solid var(--border)', color: 'var(--fg-primary)' }}
                    placeholder="ana@ejemplo.com"
                  />
                </div>
                <div>
                   <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--fg-muted)' }}>¿En qué podemos ayudarte?</label>
                   <textarea 
                     required 
                     rows={4}
                     className="w-full px-5 py-4 rounded-xl outline-none font-medium transition-colors resize-none"
                     style={{ background: 'var(--bg-primary)', border: '1px solid var(--border)', color: 'var(--fg-primary)' }}
                     placeholder="Cuéntanos detalles sobre tu negocio o consulta..."
                   ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full mt-2 flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all hover:scale-[1.02]"
                  style={{ background: 'var(--fg-primary)', color: 'var(--bg-primary)' }}
                >
                  Enviar Mensaje <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
}
