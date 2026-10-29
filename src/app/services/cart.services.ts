import { computed, Injectable, signal } from "@angular/core";
export interface Product {
  name: string;
  price: number;
}
@Injectable({
  providedIn: 'root',
})
export class CartService {
cartitems = signal<Product[]>([])

totalCount = computed(()=> this.cartitems().length)
totalPrice = computed(() => this.cartitems().reduce((sum,item)=>sum + item.price,0))

addToCart(product:Product){
    this.cartitems.update(items=>[...items,product])
}
clearCart(){
    this.cartitems.set([]);
}
}