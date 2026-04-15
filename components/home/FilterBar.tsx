'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { CATEGORIES, SORT_OPTIONS } from '@/lib/data/mockPhotos';
import { PHOTOGRAPHERS } from '@/lib/data/mockPhotos';
import { cn } from '@/lib/utils';

interface FilterBarProps {
  activeCategory: string;
  activeSort: string;
  activePhotographer: string;
  onCategoryChange: (v: string) => void;
  onSortChange: (v: string) => void;
  onPhotographerChange: (v: string) => void;
}

export function FilterBar({
  activeCategory,
  activeSort,
  activePhotographer,
  onCategoryChange,
  onSortChange,
  onPhotographerChange,
}: FilterBarProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const hasFilters = activeCategory !== 'all' || activePhotographer !== 'all' || activeSort !== 'newest';

  const resetFilters = () => {
    onCategoryChange('all');
    onSortChange('newest');
    onPhotographerChange('all');
  };

  return (
    <div className="space-y-4">
      {/* Category pills */}
      <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide">
        {CATEGORIES.map((cat) => (
          <motion.button
            key={cat.value}
            onClick={() => onCategoryChange(cat.value)}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            className={cn(
              'flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0'
            )}
            style={
              activeCategory === cat.value
                ? { background: 'var(--accent)', color: 'var(--bg-primary)' }
                : { background: 'var(--bg-secondary)', color: 'var(--fg-secondary)', border: '1px solid var(--border)' }
            }
          >
            <span>{cat.emoji}</span>
            {cat.label}
          </motion.button>
        ))}

        {/* Separator */}
        <div className="w-px h-6 flex-shrink-0" style={{ background: 'var(--border)' }} />

        {/* Advanced filters toggle */}
        <motion.button
          onClick={() => setShowAdvanced(!showAdvanced)}
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex-shrink-0 transition-colors"
          style={{
            background: showAdvanced ? 'var(--bg-tertiary)' : 'var(--bg-secondary)',
            color: showAdvanced ? 'var(--fg-primary)' : 'var(--fg-secondary)',
            border: '1px solid var(--border)',
          }}
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
          Filtros
          <motion.span animate={{ rotate: showAdvanced ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="w-3 h-3" />
          </motion.span>
        </motion.button>

        {/* Reset */}
        <AnimatePresence>
          {hasFilters && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={resetFilters}
              className="flex items-center gap-1 px-3 py-2 rounded-full text-xs font-medium flex-shrink-0"
              style={{ background: 'rgba(201,169,110,0.12)', color: 'var(--accent)', border: '1px solid rgba(201,169,110,0.3)' }}
            >
              <X className="w-3 h-3" />
              Limpiar
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Advanced filters panel */}
      <AnimatePresence>
        {showAdvanced && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div
              className="flex flex-wrap gap-4 p-4 rounded-2xl"
              style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}
            >
              {/* Sort */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--fg-muted)' }}>
                  Ordenar por
                </label>
                <select
                  value={activeSort}
                  onChange={(e) => onSortChange(e.target.value)}
                  className="px-3 py-2 rounded-xl text-sm outline-none cursor-pointer"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    color: 'var(--fg-primary)',
                  }}
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value} style={{ background: 'var(--bg-card)' }}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Photographer */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--fg-muted)' }}>
                  Fotógrafo
                </label>
                <select
                  value={activePhotographer}
                  onChange={(e) => onPhotographerChange(e.target.value)}
                  className="px-3 py-2 rounded-xl text-sm outline-none cursor-pointer"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    color: 'var(--fg-primary)',
                  }}
                >
                  <option value="all">Todos los fotógrafos</option>
                  {PHOTOGRAPHERS.map((p) => (
                    <option key={p.id} value={p.name} style={{ background: 'var(--bg-card)' }}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
