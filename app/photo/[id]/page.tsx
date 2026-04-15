import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { MOCK_PHOTOS } from '@/lib/data/mockPhotos';
import { PhotoDetail } from '@/components/photo/PhotoDetail';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return MOCK_PHOTOS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const photo = MOCK_PHOTOS.find((p) => p.id === id);
  if (!photo) return { title: 'Fotografía no encontrada' };

  return {
    title: `${photo.title} — ${photo.photographer}`,
    description: `Adquiere la fotografía "${photo.title}" de ${photo.photographer}. Desde ${photo.price}€ en formato digital o impreso.`,
    openGraph: {
      images: [`https://picsum.photos/seed/${photo.unsplashId}/800/600`],
    },
  };
}

export default async function PhotoPage({ params }: Props) {
  const { id } = await params;
  const photo = MOCK_PHOTOS.find((p) => p.id === id);
  if (!photo) notFound();

  return <PhotoDetail photo={photo} />;
}
