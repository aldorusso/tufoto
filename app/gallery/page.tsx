import type { Metadata } from 'next';
import { EventGallery } from '@/components/home/EventGallery';
import { PageTransition } from '@/components/ui/PageTransition';

export const metadata: Metadata = {
  title: 'Galería de Fotografías',
  description: 'Explora nuestra colección completa de fotografías de bodas, festivales y eventos deportivos. Filtra por categoría, fotógrafo o fecha.',
};

export default function GalleryPage() {
  return (
    <PageTransition>
      <div className="pt-20" style={{ minHeight: '100vh' }}>
        {/* Page header */}
        <div
          className="py-16 text-center"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <p className="text-label mb-3">Colección completa</p>
          <h1
            className="text-display"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--fg-primary)' }}
          >
            Galería de fotografías
          </h1>
          <p className="text-base mt-4 max-w-lg mx-auto" style={{ color: 'var(--fg-secondary)' }}>
            Más de 12.000 imágenes de fotógrafos profesionales. Cada historia, una obra de arte.
          </p>
        </div>

        <EventGallery />
      </div>
    </PageTransition>
  );
}
