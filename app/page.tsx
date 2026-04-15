import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { PopularCategories } from '@/components/home/PopularCategories';
import { RecentEvents } from '@/components/home/RecentEvents';
import { BrandMetrics } from '@/components/home/BrandMetrics';
import { HowItWorks } from '@/components/home/HowItWorks';
import { ForPhotographers } from '@/components/home/ForPhotographers';
import { HomeFAQ } from '@/components/home/HomeFAQ';

export const metadata: Metadata = {
  title: 'tufoto.net — Encuentra tus fotos de carrera',
  description:
    'Busca tu evento deportivo y descarga las mejores fotos y vídeos de tu participación. Alta resolución y descarga digital inmediata.',
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <PopularCategories />
      <RecentEvents />
      <BrandMetrics />
      <HowItWorks />
      <ForPhotographers />
      <HomeFAQ />
    </div>
  );
}
