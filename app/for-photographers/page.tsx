'use client';

import { motion } from 'framer-motion';
import { ForPhotographers as ForPhotographersComponent } from '@/components/home/ForPhotographers';
import { BrandMetrics } from '@/components/home/BrandMetrics';
import { Banknote, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ForPhotographersPage() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-[var(--bg-primary)]">
      
      {/* 1. Massive B2B Hero */}
      <section className="relative w-full pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start text-left">
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5 }}
               className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
               style={{ background: 'var(--fg-primary)', color: 'var(--bg-primary)' }}
            >
              Únete al equipo
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]"
              style={{ color: 'var(--fg-primary)' }}
            >
              Monetiza tu pasión. <br />
              <span style={{ color: 'var(--fg-secondary)' }}>Hazlo sin esfuerzo.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl font-medium mb-10 max-w-xl"
              style={{ color: 'var(--fg-secondary)' }}
            >
              Toma fotos en bodas o maratones y cárgalas con un clic. Nuestra IA indexa, etiqueta a los clientes y gestiona el cobro por ti.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex gap-4"
            >
              <Link href="/register">
                <button 
                  className="px-8 py-4 rounded-full font-bold transition-transform hover:scale-105"
                  style={{ background: 'var(--fg-primary)', color: 'var(--bg-primary)' }}
                >
                  Crear cuenta gratuita
                </button>
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/hero-photographer.png"
              alt="Fotógrafo Profesional tufoto.net"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
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

      {/* 3. Re-use existing B2B Component from Home */}
      <ForPhotographersComponent />

      {/* 4. Re-use Metrics */}
      <div className="my-10">
        <BrandMetrics />
      </div>

    </div>
  );
}
