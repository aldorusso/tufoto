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

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 pb-8 border-b border-[var(--border)]"
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--accent)' }}>
            Última actualización: 15 de abril de 2025
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4" style={{ color: 'var(--fg-primary)' }}>
            Aviso Legal y Términos de Uso
          </h1>
          <p className="text-sm font-medium" style={{ color: 'var(--fg-secondary)' }}>
            En cumplimiento con el Art. 10 de la <strong>Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE)</strong>, se facilita la siguiente información legal.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>

          {/* ── AVISO LEGAL (LSSI-CE Art. 10) ── */}
          <Section title="I. Datos Identificativos del Titular (Aviso Legal LSSI-CE)">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  ['Razón Social', 'tufoto.net Systems S.L. (en constitución)'],
                  ['CIF', 'En trámite de registro mercantil'],
                  ['Domicilio Social', 'Paseo de la Castellana 100, 28046 Madrid, España'],
                  ['Correo Electrónico', 'hola@tufoto.net'],
                  ['Registro Mercantil', 'Registro Mercantil de Madrid (pendiente de inscripción)'],
                  ['Actividad', 'Marketplace digital de fotografía profesional'],
                ].map(([key, val]) => (
                  <tr key={key} className="border-b border-[var(--border)]">
                    <td className="py-2 pr-4 font-bold w-1/3" style={{ color: 'var(--fg-primary)' }}>{key}</td>
                    <td className="py-2" style={{ color: 'var(--fg-secondary)' }}>{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Section>

          {/* ── TÉRMINOS DE USO ── */}
          <Section title="II. Objeto y Ámbito de Aplicación">
            <p>Estos Términos regulan el acceso y uso de la plataforma digital <strong>tufoto.net</strong>, un marketplace en la nube que conecta fotógrafos profesionales con sus clientes para la publicación, búsqueda y venta de fotografías de eventos (bodas, carreras deportivas, festivales y similares).</p>
          </Section>

          <Section title="III. Condiciones de Registro">
            <p>El registro en la plataforma es voluntario pero necesario para acceder a ciertas funcionalidades. El usuario se compromete a proporcionar información veraz, actualizada y completa, siendo responsable de la confidencialidad de sus credenciales de acceso.</p>
            <p>El acceso de menores de 14 años está prohibido, conforme a la LOPD-GDD y el Reglamento Europeo de Protección de Datos.</p>
          </Section>

          <Section title="IV. Propiedad Intelectual y Licencias">
            <p>Los fotógrafos conservan en todo momento la <strong>titularidad y los derechos de autor</strong> sobre sus imágenes (Ley de Propiedad Intelectual, RD Legislativo 1/1996). Al subir contenido, el fotógrafo concede a tufoto.net una <strong>licencia limitada, no exclusiva, no transferible y revocable</strong> para mostrar, reproducir y distribuir las imágenes exclusivamente con el propósito de facilitar las ventas en el marketplace.</p>
            <p>Los compradores adquieren una <strong>licencia de uso personal y no comercial</strong> de las imágenes adquiridas, salvo pacto expreso en contrario fijado por el fotógrafo en la descripción del producto.</p>
          </Section>

          <Section title="V. Modelo Económico y Comisiones">
            <p>tufoto.net aplica una <strong>comisión del 15% sobre el precio de venta final</strong> de cada imagen vendida. Dicha comisión cubre los costes de procesamiento de pagos (Stripe), la infraestructura cloud y la indexación por Inteligencia Artificial.</p>
            <p>El almacenamiento base de <strong>5 GB es gratuito</strong>. Los planes de almacenamiento ampliado tienen el coste mensual especificado en la <Link href="/pricing" className="underline">página de precios</Link>. Los precios están expresados en euros e incluyen el IVA aplicable.</p>
          </Section>

          <Section title="VI. Derecho de Desistimiento (Compras Digitales)">
            <p>Conforme a la <strong>Ley General para la Defensa de los Consumidores y Usuarios (RDL 1/2007, Art. 102 y ss.)</strong>, el comprador dispone de un plazo de <strong>14 días naturales</strong> para ejercer el derecho de desistimiento desde la fecha de compra.</p>
            <p>No obstante, dado que las fotografías son <strong>contenidos digitales descargables</strong>, el derecho de desistimiento <strong>no será aplicable</strong> una vez que el comprador haya descargado el contenido, previa aceptación expresa de la pérdida de dicho derecho (Art. 103.m) RDL 1/2007).</p>
          </Section>

          <Section title="VII. Contenido Prohibido">
            <p>Queda estrictamente prohibido subir imágenes que contengan:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Contenido sexual explícito o pornografía.</li>
              <li>Material que infrinja derechos de autor de terceros.</li>
              <li>Imágenes de menores sin el consentimiento explícito de sus tutores legales.</li>
              <li>Contenido que promueva el odio, la violencia o la discriminación.</li>
              <li>Imágenes que revelen datos biométricos sin consentimiento del interesado.</li>
            </ul>
            <p>El incumplimiento podrá conllevar la eliminación del contenido y la suspensión inmediata de la cuenta, sin perjuicio de las acciones legales que correspondan.</p>
          </Section>

          <Section title="VIII. Limitación de Responsabilidad">
            <p>tufoto.net actúa como <strong>intermediario tecnológico</strong> en el sentido del Art. 16 LSSI-CE. No somos responsables de disputas sobre la calidad artística de las imágenes, el uso posterior por parte del comprador, ni de pérdidas de ingresos derivadas de fallos técnicos comunicados y resueltos en un plazo razonable. La responsabilidad máxima de tufoto.net ante el usuario nunca podrá superar el importe abonado en los últimos 12 meses por los servicios contratados.</p>
          </Section>

          <Section title="IX. Modificación de los Términos">
            <p>Nos reservamos el derecho de modificar estos términos en cualquier momento, notificando al usuario con <strong>30 días de antelación</strong> por correo electrónico. El uso continuado del servicio tras ese período constituye la aceptación de los nuevos términos.</p>
          </Section>

          <Section title="X. Ley Aplicable y Resolución de Conflictos">
            <p>Estos términos se rigen por la <strong>legislación española</strong>. Para cualquier controversia derivada del uso de la plataforma, las partes se someten, con renuncia a cualquier otro fuero, a los <strong>Juzgados y Tribunales de Madrid</strong>.</p>
            <p>Si usted tiene la condición de consumidor en la UE, también puede acceder a la plataforma de resolución de litigios en línea de la Comisión Europea: <a href="https://ec.europa.eu/consumers/odr" className="underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a></p>
          </Section>

        </motion.div>
      </div>
    </div>
  );
}
