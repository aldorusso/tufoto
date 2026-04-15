import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, Photo, PhotoFormat } from '@/types';

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

const initialState: CartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<{ photo: Photo; format: PhotoFormat }>) {
      const { photo, format } = action.payload;
      const existing = state.items.find(
        (i) => i.photo.id === photo.id && i.format.id === format.id
      );
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ photo, format, quantity: 1 });
      }
      state.isOpen = true;
    },
    removeItem(state, action: PayloadAction<{ photoId: string; formatId: string }>) {
      state.items = state.items.filter(
        (i) => !(i.photo.id === action.payload.photoId && i.format.id === action.payload.formatId)
      );
    },
    updateQuantity(
      state,
      action: PayloadAction<{ photoId: string; formatId: string; quantity: number }>
    ) {
      const item = state.items.find(
        (i) => i.photo.id === action.payload.photoId && i.format.id === action.payload.formatId
      );
      if (item) {
        if (action.payload.quantity <= 0) {
          state.items = state.items.filter(
            (i) => !(i.photo.id === action.payload.photoId && i.format.id === action.payload.formatId)
          );
        } else {
          item.quantity = action.payload.quantity;
        }
      }
    },
    clearCart(state) {
      state.items = [];
    },
    openCart(state) {
      state.isOpen = true;
    },
    closeCart(state) {
      state.isOpen = false;
    },
    toggleCart(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const {
  addItem, removeItem, updateQuantity,
  clearCart, openCart, closeCart, toggleCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// Selectors
export const selectCartItems = (state: { cart: CartState }) => state.cart.items;
export const selectCartCount = (state: { cart: CartState }) =>
  state.cart.items.reduce((acc, i) => acc + i.quantity, 0);
export const selectCartTotal = (state: { cart: CartState }) =>
  state.cart.items.reduce((acc, i) => acc + i.format.price * i.quantity, 0);
export const selectCartIsOpen = (state: { cart: CartState }) => state.cart.isOpen;
