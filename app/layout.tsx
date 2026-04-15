import type { Metadata } from 'next';
import './globals.css';
import { ReduxProvider } from '@/lib/store/provider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { PageTransition } from '@/components/ui/PageTransition';

export const metadata: Metadata = {
  title: {
    default: 'tufoto.net — Fotografías de Bodas, Festivales y Deportes',
    template: '%s | tufoto.net',
  },
  description:
    'Descubre y adquiere fotografías profesionales de bodas, festivales y eventos deportivos. Alta resolución, entrega digital inmediata e impresiones premium.',
  keywords: [
    'fotografía de bodas', 'fotografía de festivales', 'fotografía deportiva',
    'comprar fotos', 'fotografía premium', 'fotos de eventos',
  ],
  authors: [{ name: 'tufoto.net' }],
  creator: 'tufoto.net',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'tufoto.net',
    title: 'tufoto.net — Fotografías de Eventos Premium',
    description: 'La plataforma líder para comprar fotografías de arte editorial de bodas, festivales y deportes.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'tufoto.net',
    description: 'Fotografías de eventos premium',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ReduxProvider>
          {/* Sticky glass navbar */}
          <Navbar />

          {/* Cart sliding drawer */}
          <CartDrawer />

          {/* Page content with transition */}
          <main>
            <PageTransition>
              {children}
            </PageTransition>
          </main>

          {/* Footer */}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
