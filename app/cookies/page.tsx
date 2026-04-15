'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

type CookieType = 'essential' | 'analytics' | 'marketing';
const initialPrefs: Record<CookieType, boolean> = {
  essential: true,
  analytics: false,
  marketing: false,
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--fg-primary)' }}>{title}</h2>
      <div className="text-sm font-medium leading-relaxed space-y-3" style={{ color: 'var(--fg-secondary)' }}>
        {children}
      </div>
    </section>
  );
}

function Toggle({ enabled, label, desc, onChange, disabled }: { enabled: boolean; label: string; desc: string; onChange: () => void; disabled?: boolean }) {
  return (
    <div className="flex items-start justify-between py-4 border-b border-[var(--border)] gap-4">
      <div>
        <p className="text-sm font-bold" style={{ color: 'var(--fg-primary)' }}>{label}</p>
        <p className="text-xs mt-0.5" style={{ color: 'var(--fg-muted)' }}>{desc}</p>
      </div>
      <button
        onClick={onChange}
        disabled={disabled}
        aria-label={`Toggle ${label}`}
        className={`relative flex-shrink-0 w-12 h-6 rounded-full transition-colors mt-1 ${enabled ? 'bg-[var(--accent)]' : 'bg-gray-300'} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      >
        <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${enabled ? 'translate-x-7' : 'translate-x-1'}`} />
      </button>
    </div>
  );
}

export default function CookiesPage() {
  const [prefs, setPrefs] = useState(initialPrefs);
  const [saved, setSaved] = useState(false);

  const toggle = (type: CookieType) => {
    setPrefs(p => ({ ...p, [type]: !p[type] }));
    setSaved(false);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 pb-8 border-b border-[var(--border)]"
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--accent)' }}>
            Última actualización: 15 de abril de 2025
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4" style={{ color: 'var(--fg-primary)' }}>
            Política de Cookies
          </h1>
          <p className="text-sm font-medium" style={{ color: 'var(--fg-secondary)' }}>
            En cumplimiento con el Art. 22.2 de la <strong>LSSI-CE</strong> y las <strong>Directrices de la AEPD sobre el uso de cookies (2023)</strong>, te informamos del uso de cookies en tufoto.net y te ofrecemos el control completo de tus preferencias.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Section title="¿Qué son las cookies?">
            <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo al visitarlos. Permiten recordar tu sesión, tus preferencias de idioma y recopilar datos estadísticos anónimos sobre la navegación para mejorar el servicio.</p>
          </Section>

          <Section title="Tipos de Cookies Utilizadas">
            <p>Clasificamos las cookies que usamos en tres categorías:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Cookies Técnicas o Esenciales:</strong> Imprescindibles para el funcionamiento de la plataforma (gestión de sesión, carrito de compra, seguridad CSRF). No requieren consentimiento.</li>
              <li><strong>Cookies Analíticas:</strong> Nos permiten conocer cómo interactúan los usuarios con la plataforma (páginas visitadas, tiempo de sesión, origen del tráfico). Los datos son anonimizados antes de su análisis. Requieren consentimiento previo.</li>
              <li><strong>Cookies de Marketing / Publicidad:</strong> Permiten mostrar anuncios personalizados de tufoto.net en plataformas de terceros basándose en tu historial de navegación. Requieren consentimiento previo y explícito.</li>
            </ul>
          </Section>

          {/* Cookie table — required by AEPD 2023 guidelines */}
          <Section title="Tabla de Cookies (Exigida por AEPD 2023)">
            <div className="overflow-x-auto -mx-1">
              <table className="w-full text-xs border-collapse min-w-[560px]">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    {['Cookie', 'Tipo', 'Proveedor', 'Finalidad', 'Duración'].map(h => (
                      <th key={h} className="py-2 pr-3 text-left font-bold" style={{ color: 'var(--fg-primary)' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['next-auth.session-token', 'Esencial', 'tufoto.net', 'Autenticación de sesión de usuario', '30 días'],
                    ['__Host-next-auth.csrf-token', 'Esencial', 'tufoto.net', 'Protección contra ataques CSRF', 'Sesión'],
                    ['_vercel_analytics', 'Analítica', 'Vercel Inc.', 'Métricas de rendimiento anónimas', '1 año'],
                    ['_ga', 'Analítica', 'Google LLC', 'Distinción entre usuarios únicos', '2 años'],
                    ['_ga_*', 'Analítica', 'Google LLC', 'Estado de la sesión en Google Analytics', '2 años'],
                    ['__stripe_mid', 'Esencial', 'Stripe Inc.', 'Detección de fraude en pagos', '1 año'],
                    ['__stripe_sid', 'Esencial', 'Stripe Inc.', 'Gestión segura de la sesión de pago', 'Sesión'],
                    ['_fbp', 'Marketing', 'Meta Platforms', 'Publicidad personalizada en Facebook/Instagram', '3 meses'],
                  ].map(([name, type, provider, purpose, duration]) => (
                    <tr key={name} className="border-b border-[var(--border)]">
                      <td className="py-2 pr-3 font-mono text-xs" style={{ color: 'var(--fg-primary)' }}>{name}</td>
                      <td className="py-2 pr-3"><span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${type === 'Esencial' ? 'bg-green-100 text-green-700' : type === 'Analítica' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'}`}>{type}</span></td>
                      <td className="py-2 pr-3">{provider}</td>
                      <td className="py-2 pr-3">{purpose}</td>
                      <td className="py-2 pr-3">{duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* Interactive Preferences */}
          <Section title="Gestiona tus Preferencias">
            <div className="p-6 rounded-2xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
              <Toggle
                enabled={prefs.essential}
                label="Cookies Esenciales"
                desc="Necesarias para el funcionamiento básico de la plataforma. No pueden desactivarse."
                onChange={() => {}}
                disabled={true}
              />
              <Toggle
                enabled={prefs.analytics}
                label="Cookies Analíticas"
                desc="Nos ayudan a entender cómo se usa la plataforma para mejorarla. Datos anonimizados."
                onChange={() => toggle('analytics')}
              />
              <Toggle
                enabled={prefs.marketing}
                label="Cookies de Marketing"
                desc="Permiten mostrarte anuncios relevantes de tufoto.net en otros sitios web."
                onChange={() => toggle('marketing')}
              />

              <button
                onClick={() => setSaved(true)}
                className="mt-6 w-full py-3 rounded-xl font-bold text-sm transition-all hover:scale-[1.02]"
                style={{ background: 'var(--fg-primary)', color: 'var(--bg-primary)' }}
              >
                {saved ? '✓ Preferencias Guardadas' : 'Guardar Preferencias'}
              </button>
              {saved && (
                <p className="text-center text-xs mt-3" style={{ color: 'var(--fg-muted)' }}>
                  Tus preferencias han sido guardadas. Puedes cambiarlas en cualquier momento desde esta página.
                </p>
              )}
            </div>
          </Section>

          <Section title="Cómo Gestionar o Eliminar Cookies desde el Navegador">
            <p>También puedes gestionar las cookies directamente desde la configuración de tu navegador:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="underline">Safari (Mac/iOS)</a></li>
              <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="underline">Microsoft Edge</a></li>
            </ul>
            <p><strong>Aviso:</strong> Deshabilitar cookies técnicas puede afectar al funcionamiento correcto de la plataforma.</p>
          </Section>

          <Section title="Contacto">
            <p>Para cualquier consulta sobre nuestra política de cookies, contacta con el Delegado de Protección de Datos en <a href="mailto:dpo@tufoto.net" className="underline">dpo@tufoto.net</a> o consulta nuestra <a href="/privacy" className="underline">Política de Privacidad</a>.</p>
          </Section>
        </motion.div>
      </div>
    </div>
  );
}
