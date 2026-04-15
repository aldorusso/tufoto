'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid3X3, Rows3, Loader2 } from 'lucide-react';
import { MOCK_PHOTOS } from '@/lib/data/mockPhotos';
import { Photo } from '@/types';
import { PhotoCard } from './PhotoCard';
import { FilterBar } from './FilterBar';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { MagneticButton } from '@/components/ui/MagneticButton';

function applyFilters(
  photos: Photo[],
  category: string,
  photographer: string,
  sort: string
): Photo[] {
  let result = [...photos];

  if (category !== 'all') {
    result = result.filter((p) => p.category === category);
  }
  if (photographer !== 'all') {
    result = result.filter((p) => p.photographer === photographer);
  }

  switch (sort) {
    case 'newest':     result.sort((a, b) => b.date.localeCompare(a.date)); break;
    case 'oldest':     result.sort((a, b) => a.date.localeCompare(b.date)); break;
    case 'price-asc':  result.sort((a, b) => a.price - b.price);            break;
    case 'price-desc': result.sort((a, b) => b.price - a.price);            break;
    case 'popular':    result.sort((a, b) => (b.sold ?? 0) - (a.sold ?? 0));break;
  }

  return result;
}

const PAGE_SIZE = 6;

export function EventGallery() {
  const [category,     setCategory]     = useState('all');
  const [sort,         setSort]         = useState('newest');
  const [photographer, setPhotographer] = useState('all');
  const [layout,       setLayout]       = useState<'grid' | 'masonry'>('grid');
  const [page,         setPage]         = useState(1);
  const [loading,      setLoading]      = useState(false);

  const filtered = useMemo(
    () => applyFilters(MOCK_PHOTOS, category, photographer, sort),
    [category, photographer, sort]
  );

  const visible = filtered.slice(0, page * PAGE_SIZE);
  const hasMore = visible.length < filtered.length;

  const handleCategoryChange = (v: string) => {
    setCategory(v);
    setPage(1);
  };

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setPage((p) => p + 1);
      setLoading(false);
    }, 600);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Section header */}
      <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
        <div>
          <p className="text-label mb-2">Colección</p>
          <h2
            className="text-display text-[var(--fg-primary)]"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            Galería de eventos
          </h2>
        </div>

        {/* Layout toggle */}
        <div
          className="flex items-center gap-1 p-1 rounded-xl self-start sm:self-auto"
          style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}
        >
          <button
            onClick={() => setLayout('grid')}
            className="p-2 rounded-lg transition-colors"
            style={layout === 'grid'
              ? { background: 'var(--bg-tertiary)', color: 'var(--fg-primary)' }
              : { color: 'var(--fg-muted)' }
            }
          >
            <Grid3X3 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setLayout('masonry')}
            className="p-2 rounded-lg transition-colors"
            style={layout === 'masonry'
              ? { background: 'var(--bg-tertiary)', color: 'var(--fg-primary)' }
              : { color: 'var(--fg-muted)' }
            }
          >
            <Rows3 className="w-4 h-4" />
          </button>
        </div>
      </ScrollReveal>

      {/* Filter bar */}
      <ScrollReveal delay={0.1} className="mb-10">
        <FilterBar
          activeCategory={category}
          activeSort={sort}
          activePhotographer={photographer}
          onCategoryChange={handleCategoryChange}
          onSortChange={setSort}
          onPhotographerChange={setPhotographer}
        />
      </ScrollReveal>

      {/* Results count */}
      <motion.p
        key={filtered.length}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-sm mb-6"
        style={{ color: 'var(--fg-muted)' }}
      >
        {filtered.length === 0
          ? 'No se encontraron resultados'
          : `${filtered.length} fotografías encontradas`}
      </motion.p>

      {/* Grid */}
      <AnimatePresence mode="wait">
        {filtered.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-24 text-center"
          >
            <p className="text-4xl mb-4">📷</p>
            <p className="font-medium mb-1" style={{ color: 'var(--fg-primary)' }}>
              Sin resultados
            </p>
            <p className="text-sm" style={{ color: 'var(--fg-muted)' }}>
              Intenta cambiar los filtros para ver más fotos
            </p>
          </motion.div>
        ) : (
          <motion.div
            key={`${layout}-${category}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={
              layout === 'masonry'
                ? 'masonry-grid'
                : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'
            }
          >
            {visible.map((photo, i) => (
              <PhotoCard key={photo.id} photo={photo} index={i} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Load more */}
      {hasMore && (
        <div className="flex justify-center mt-12">
          <MagneticButton
            variant="outline"
            size="md"
            onClick={handleLoadMore}
          >
            {loading ? (
              <><Loader2 className="w-4 h-4 animate-spin" /> Cargando...</>
            ) : (
              <>Ver más fotografías</>
            )}
          </MagneticButton>
        </div>
      )}
    </section>
  );
}
