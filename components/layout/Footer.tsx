'use client';

import Link from 'next/link';
import { Camera, Globe, MessageCircle, Share2, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { subscribeNewsletter } from '@/lib/actions/newsletter';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const FOOTER_LINKS = {
  plataforma: [
    { label: 'Para fotógrafos', href: '/for-photographers' },
    { label: 'Encontrar fotos',     href: '/search' },
    { label: 'Precios',           href: '/pricing'          },
  ],
  soporte: [
    { label: 'Centro de ayuda',      href: '/help'  },
    { label: 'Contáctanos', href: '/contact'    },
  ],
  legal: [
    { label: 'Política de privacidad',      href: '/privacy'  },
    { label: 'Términos de uso', href: '/terms'    },
    { label: 'Cookies',         href: '/cookies'  },
  ],
};

const SOCIALS = [
  { icon: Globe,         href: '#', label: 'Instagram' },
  { icon: MessageCircle, href: '#', label: 'Twitter'   },
  { icon: Share2,        href: '#', label: 'Facebook'  },
];

export function Footer() {
  return (
    <footer
      className="relative mt-32 pt-20 pb-8"
      style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-secondary)' }}
    >
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          {/* Brand + Newsletter */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <Link href="/" className="inline-flex items-center gap-2.5 mb-6">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent)' }}>
                  <Camera className="w-4 h-4" style={{ color: 'var(--bg-primary)' }} />
                </div>
                <span className="text-xl font-bold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'var(--fg-primary)' }}>
                  Photo<span style={{ color: 'var(--accent)' }}>Vault</span>
                </span>
              </Link>
              <p className="text-sm leading-relaxed mb-8 max-w-xs" style={{ color: 'var(--fg-secondary)' }}>
                La plataforma de referencia para adquirir fotografías profesionales de bodas, festivales y eventos deportivos.
              </p>

              {/* Newsletter */}
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--accent)' }}>
                  Newsletter
                </p>
                <form action={subscribeNewsletter} className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--fg-muted)' }} />
                    <input
                      type="email"
                      name="email"
                      placeholder="tu@email.com"
                      required
                      className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl outline-none transition-colors"
                      style={{
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border)',
                        color: 'var(--fg-primary)',
                      }}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-4 py-2.5 rounded-xl text-sm font-medium flex items-center gap-1.5 transition-colors"
                    style={{ background: 'var(--accent)', color: 'var(--bg-primary)' }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </form>
              </div>
            </ScrollReveal>
          </div>

          {/* Link columns */}
          {(Object.entries(FOOTER_LINKS) as [string, { label: string; href: string }[]][]).map(([key, links], i) => (
            <ScrollReveal key={key} delay={i * 0.1}>
              <div>
                <h4 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'var(--fg-muted)' }}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm transition-colors duration-200 hover:text-[var(--accent)]"
                        style={{ color: 'var(--fg-secondary)' }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs" style={{ color: 'var(--fg-muted)' }}>
            © 2024 tufoto.net. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                whileHover={{ y: -2, color: 'var(--accent)' }}
                transition={{ duration: 0.2 }}
                className="p-2 rounded-lg transition-colors"
                style={{ color: 'var(--fg-muted)', background: 'var(--bg-tertiary)' }}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
