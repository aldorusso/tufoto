'use client';

import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, Minus, Plus, ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';
import {
  closeCart, removeItem, updateQuantity,
  clearCart, selectCartItems, selectCartTotal, selectCartIsOpen,
} from '@/lib/store/cartSlice';
import { formatPrice } from '@/lib/utils';

export function CartDrawer() {
  const dispatch = useDispatch();
  const items    = useSelector(selectCartItems);
  const total    = useSelector(selectCartTotal);
  const isOpen   = useSelector(selectCartIsOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => dispatch(closeCart())}
            className="fixed inset-0 z-50"
            style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
          />

          {/* Drawer */}
          <motion.aside
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 32 }}
            className="fixed right-0 top-0 bottom-0 z-50 flex flex-col w-full max-w-md"
            style={{ background: 'var(--bg-card)', borderLeft: '1px solid var(--border)' }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-6 py-5"
              style={{ borderBottom: '1px solid var(--border)' }}
            >
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                <h2
                  className="text-lg font-semibold"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'var(--fg-primary)' }}
                >
                  Tu carrito
                </h2>
                {items.length > 0 && (
                  <span
                    className="text-xs font-medium px-2 py-0.5 rounded-full"
                    style={{ background: 'var(--bg-tertiary)', color: 'var(--fg-secondary)' }}
                  >
                    {items.length} {items.length === 1 ? 'foto' : 'fotos'}
                  </span>
                )}
              </div>
              <button
                onClick={() => dispatch(closeCart())}
                className="p-2 rounded-lg transition-colors"
                style={{ color: 'var(--fg-muted)' }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto py-4 px-6 space-y-4">
              <AnimatePresence initial={false}>
                {items.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-64 text-center gap-4"
                  >
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{ background: 'var(--bg-tertiary)' }}
                    >
                      <ShoppingBag className="w-8 h-8" style={{ color: 'var(--fg-muted)' }} />
                    </div>
                    <div>
                      <p className="font-medium mb-1" style={{ color: 'var(--fg-primary)' }}>
                        Tu carrito está vacío
                      </p>
                      <p className="text-sm" style={{ color: 'var(--fg-muted)' }}>
                        Explora nuestra galería y añade fotos
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  items.map((item) => (
                    <motion.div
                      key={`${item.photo.id}-${item.format.id}`}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex gap-4 p-3 rounded-xl"
                      style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}
                    >
                      {/* Thumbnail */}
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={`https://picsum.photos/seed/${item.photo.unsplashId}/800/600`}
                          alt={item.photo.title}
                          fill
                          className="object-cover"
                          draggable={false}
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-sm font-medium truncate mb-0.5"
                          style={{ color: 'var(--fg-primary)' }}
                        >
                          {item.photo.title}
                        </p>
                        <p className="text-xs mb-2" style={{ color: 'var(--fg-muted)' }}>
                          {item.format.name}
                        </p>

                        <div className="flex items-center justify-between">
                          {/* Qty controls */}
                          <div
                            className="flex items-center gap-2 rounded-lg px-1"
                            style={{ background: 'var(--bg-tertiary)' }}
                          >
                            <button
                              onClick={() => dispatch(updateQuantity({
                                photoId: item.photo.id,
                                formatId: item.format.id,
                                quantity: item.quantity - 1,
                              }))}
                              className="p-1 rounded"
                              style={{ color: 'var(--fg-secondary)' }}
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-sm w-4 text-center" style={{ color: 'var(--fg-primary)' }}>
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => dispatch(updateQuantity({
                                photoId: item.photo.id,
                                formatId: item.format.id,
                                quantity: item.quantity + 1,
                              }))}
                              className="p-1 rounded"
                              style={{ color: 'var(--fg-secondary)' }}
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>
                              {formatPrice(item.format.price * item.quantity)}
                            </span>
                            <button
                              onClick={() => dispatch(removeItem({ photoId: item.photo.id, formatId: item.format.id }))}
                              className="p-1.5 rounded-lg transition-colors"
                              style={{ color: 'var(--fg-muted)' }}
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div
                className="px-6 py-5 space-y-4"
                style={{ borderTop: '1px solid var(--border)' }}
              >
                {/* Subtotal */}
                <div className="flex justify-between items-center">
                  <span className="text-sm" style={{ color: 'var(--fg-secondary)' }}>Subtotal</span>
                  <span className="font-semibold" style={{ color: 'var(--fg-primary)' }}>
                    {formatPrice(total)}
                  </span>
                </div>
                <p className="text-xs" style={{ color: 'var(--fg-muted)' }}>
                  Los archivos digitales se envían inmediatamente por email tras el pago.
                </p>

                {/* Checkout CTA */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
                  style={{ background: 'var(--accent)', color: 'var(--bg-primary)' }}
                >
                  Finalizar compra <ArrowRight className="w-4 h-4" />
                </motion.button>

                {/* Clear */}
                <button
                  onClick={() => dispatch(clearCart())}
                  className="w-full text-xs text-center transition-colors"
                  style={{ color: 'var(--fg-muted)' }}
                >
                  Vaciar carrito
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
