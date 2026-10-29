import { Component, inject } from '@angular/core';
import { Ngconentex } from '../ngconentex/ngconentex';
import { Product } from '../services/cart.services';
import { CartStore } from '../services/cart.store'; // Import the new SignalStore

@Component({
  imports: [Ngconentex],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {
  // Inject the SignalStore
  private cartStore = inject(CartStore);

  // Map the store signals directly to your component properties 
  // so your HTML template doesn't need to change at all.
  cartItems = this.cartStore.items; 
  totalCount = this.cartStore.totalCount;
  totalPrice = this.cartStore.totalPrice;

  productList: Product[] = [
    { name: 'Wireless Mouse', price: 25 },
    { name: 'Mechanical Keyboard', price: 120 },
    { name: 'HD Monitor', price: 300 },
    { name: 'USB-C Cable', price: 15 }
  ];

  onProductAdded(product: Product) {
    // Call the store method directly instead of dispatching an action
    this.cartStore.addToCart(product);
  }

  clearAll() {
    // Call the store method directly
    this.cartStore.clearCart();
  }
}