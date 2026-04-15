'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

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

export default function PrivacyPage() {
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
            Política de Privacidad
          </h1>
          <p className="text-sm font-medium mt-2" style={{ color: 'var(--fg-secondary)' }}>
            En cumplimiento con el <strong>Reglamento (UE) 2016/679 (RGPD)</strong> y la <strong>Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPD-GDD)</strong>, le informamos de la siguiente política de privacidad.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>

          <Section title="1. Responsable del Tratamiento">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  ['Razón Social', 'tufoto.net Systems S.L. (en constitución)'],
                  ['CIF', 'En trámite de registro mercantil'],
                  ['Domicilio Social', 'Paseo de la Castellana 100, 28046 Madrid, España'],
                  ['Correo de Contacto', 'legal@tufoto.net'],
                  ['DPO / Delegado de Protección de Datos', 'dpo@tufoto.net'],
                ].map(([key, val]) => (
                  <tr key={key} className="border-b border-[var(--border)]">
                    <td className="py-2 pr-4 font-bold w-1/3" style={{ color: 'var(--fg-primary)' }}>{key}</td>
                    <td className="py-2" style={{ color: 'var(--fg-secondary)' }}>{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Section>

          <Section title="2. Datos que Recopilamos">
            <p>Recopilamos los datos que usted facilita voluntariamente al registrarse, configurar su perfil de fotógrafo o realizar una compra:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Nombre completo y correo electrónico.</li>
              <li>Información de facturación procesada por Stripe (tufoto.net <strong>no almacena</strong> datos de tarjeta; estos son procesados íntegramente por Stripe Inc.).</li>
              <li>Imágenes y galerías fotográficas subidas a la plataforma.</li>
              <li>Datos de navegación y uso (cookies, IPs, sesiones) con finalidad analítica.</li>
              <li><strong>Datos biométricos (reconocimiento facial):</strong> Las imágenes subidas pueden ser procesadas por nuestra IA para identificar a personas en fotografías. Este tratamiento se realiza únicamente con el <strong>consentimiento explícito</strong> del interesado (Art. 9 RGPD), de acuerdo con la categorización especial de dichos datos.</li>
            </ul>
          </Section>

          <Section title="3. Finalidad y Base Legal del Tratamiento">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="py-2 text-left font-bold" style={{ color: 'var(--fg-primary)' }}>Finalidad</th>
                  <th className="py-2 text-left font-bold" style={{ color: 'var(--fg-primary)' }}>Base Legal (RGPD)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Prestar el servicio de marketplace', 'Art. 6.1.b — Ejecución de contrato'],
                  ['Gestionar pagos y comisiones', 'Art. 6.1.b — Ejecución de contrato'],
                  ['Comunicaciones transaccionales', 'Art. 6.1.b — Ejecución de contrato'],
                  ['Análisis y mejora del servicio', 'Art. 6.1.f — Interés legítimo'],
                  ['Reconocimiento facial por IA', 'Art. 9.2.a — Consentimiento explícito'],
                  ['Comunicaciones comerciales', 'Art. 6.1.a — Consentimiento'],
                ].map(([fin, base]) => (
                  <tr key={fin} className="border-b border-[var(--border)]">
                    <td className="py-2 pr-4">{fin}</td>
                    <td className="py-2 font-bold" style={{ color: 'var(--fg-primary)' }}>{base}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Section>

          <Section title="4. Conservación de Datos">
            <p>Conservamos sus datos mientras su cuenta esté activa. Tras la baja, los datos se eliminan en un plazo máximo de <strong>90 días naturales</strong>, salvo:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Obligación fiscal: los datos de facturación se conservan <strong>5 años</strong> según la Ley General Tributaria.</li>
              <li>Obligación mercantil: la documentación contable se conserva <strong>6 años</strong> según el Código de Comercio.</li>
            </ul>
          </Section>

          <Section title="5. Sus Derechos (ARCOPL)">
            <p>Puede ejercer en cualquier momento, de forma gratuita, los siguientes derechos escribiendo a <a href="mailto:legal@tufoto.net" className="underline">legal@tufoto.net</a> con copia de su DNI o documento identificativo:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Acceso:</strong> conocer qué datos tratamos sobre usted.</li>
              <li><strong>Rectificación:</strong> corregir datos inexactos.</li>
              <li><strong>Supresión ("derecho al olvido"):</strong> solicitar la eliminación de sus datos.</li>
              <li><strong>Oposición:</strong> oponerse al tratamiento por interés legítimo.</li>
              <li><strong>Portabilidad:</strong> recibir sus datos en formato estructurado y legible.</li>
              <li><strong>Limitación:</strong> restringir el tratamiento en ciertos supuestos.</li>
            </ul>
            <p className="mt-3">Si considera que sus derechos no han sido atendidos, tiene derecho a presentar una reclamación ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong>: <a href="https://www.aepd.es" className="underline" target="_blank" rel="noopener noreferrer">www.aepd.es</a></p>
          </Section>

          <Section title="6. Transferencias Internacionales">
            <p>Para el procesamiento de pagos utilizamos <strong>Stripe Inc.</strong> (EE. UU.), empresa adherida al marco UE-EE. UU. Data Privacy Framework, con las garantías adecuadas exigidas por el Art. 46 RGPD. No se realizan otras transferencias internacionales de datos personales.</p>
          </Section>

          <Section title="7. Medidas de Seguridad">
            <p>tufoto.net aplica medidas técnicas y organizativas apropiadas para garantizar la seguridad de sus datos: cifrado TLS en transmisión, almacenamiento cifrado en reposo, control de accesos por roles y auditorías de seguridad periódicas.</p>
          </Section>

        </motion.div>
      </div>
    </div>
  );
}
