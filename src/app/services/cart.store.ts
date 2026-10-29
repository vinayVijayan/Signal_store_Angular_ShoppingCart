import { computed } from '@angular/core';
import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';
import { Product } from './cart.services';

// Define the state shape
export interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: []
};

// Create and export the SignalStore
export const CartStore = signalStore(
  { providedIn: 'root' }, // Makes it globally available without providing in app.config
  
  // 1. State (Replaces Reducer's initialState)
  withState(initialState),
  
  // 2. Computed Signals (Replaces Selectors)
  withComputed(({ items }) => ({
    totalCount: computed(() => items().length),
    totalPrice: computed(() => items().reduce((sum, item) => sum + item.price, 0))
  })),
  
  // 3. Methods (Replaces Actions and Reducers)
  withMethods((store) => ({
    addToCart(product: Product) {
      // patchState updates the state immutably
      patchState(store, (state) => ({ items: [...state.items, product] }));
    },
    
    clearCart() {
      patchState(store, { items: [] });
    }
  }))
);