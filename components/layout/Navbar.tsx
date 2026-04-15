'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, ChevronDown, Camera } from 'lucide-react';
import { toggleCart, selectCartCount } from '@/lib/store/cartSlice';

const NAV_LINKS = [
  { label: 'Buscar eventos', href: '/search' },
  { label: 'Para fotógrafos', href: '/for-photographers' },
];

export function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const dispatch   = useDispatch();
  const cartCount  = useSelector(selectCartCount);
  const pathname   = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'var(--bg-glass)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'var(--accent)' }}
              >
                <Camera className="w-4 h-4" style={{ color: 'var(--bg-primary)' }} />
              </motion.div>
              <span
                className="text-xl font-bold tracking-tight"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'var(--fg-primary)' }}
              >
                tu<span style={{ color: 'var(--accent)' }}>foto</span>.net
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.submenu && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200"
                    style={{
                      color: pathname === link.href ? 'var(--accent)' : 'var(--fg-secondary)',
                    }}
                  >
                    {link.label}
                    {link.submenu && (
                      <motion.span
                        animate={{ rotate: activeDropdown === link.label ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </motion.span>
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.submenu && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="absolute top-full left-0 mt-2 w-44 rounded-xl p-2 shadow-lg"
                        style={{
                          background: 'var(--bg-card)',
                          border: '1px solid var(--border)',
                          boxShadow: 'var(--shadow-md)',
                        }}
                      >
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-3 py-2 text-sm rounded-lg transition-colors duration-150"
                            style={{ color: 'var(--fg-secondary)' }}
                            onMouseEnter={(e) => {
                              (e.target as HTMLElement).style.background = 'var(--bg-tertiary)';
                              (e.target as HTMLElement).style.color = 'var(--fg-primary)';
                            }}
                            onMouseLeave={(e) => {
                              (e.target as HTMLElement).style.background = 'transparent';
                              (e.target as HTMLElement).style.color = 'var(--fg-secondary)';
                            }}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-4">
              <Link
                href="/my-photos"
                className="hidden lg:flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[var(--accent)]"
                style={{ color: 'var(--fg-secondary)' }}
              >
                <Camera className="w-4 h-4" />
                Mis fotos
              </Link>
              <Link
                href="/login"
                className="hidden sm:block text-sm font-medium transition-colors hover:text-[var(--accent)]"
                style={{ color: 'var(--fg-secondary)' }}
              >
                Iniciar sesión
              </Link>
              <Link href="/register">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-sm font-bold rounded-full transition-colors"
                  style={{ background: 'var(--fg-primary)', color: 'var(--bg-primary)' }}
                >
                  Regístrate
                </motion.button>
              </Link>

              {/* Mobile burger */}
              <button
                className="md:hidden p-2 rounded-full"
                style={{ color: 'var(--fg-primary)' }}
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                <AnimatePresence mode="wait">
                  {mobileOpen ? (
                    <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <X className="w-5 h-5" />
                    </motion.span>
                  ) : (
                    <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <Menu className="w-5 h-5" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 md:hidden flex flex-col"
            style={{ background: 'var(--bg-primary)' }}
          >
            <div className="flex items-center justify-between px-4 h-16">
              <span className="text-xl font-bold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'var(--accent)' }}>
                tufoto.net
              </span>
              <button onClick={() => setMobileOpen(false)} style={{ color: 'var(--fg-primary)' }}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 p-4 pt-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-lg font-medium rounded-xl transition-colors"
                    style={{ color: 'var(--fg-primary)' }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.submenu && (
                    <div className="pl-4 mt-1 space-y-1">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-2 text-sm rounded-lg"
                          style={{ color: 'var(--fg-secondary)' }}
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
