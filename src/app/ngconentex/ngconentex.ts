import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-ngconentex',
  styleUrl: './ngconentex.scss',
  templateUrl: './ngconentex.html',
})
export class Ngconentex {

productName =  input<string>("");
price = input<number>(0)
added = output<{ name: string; price: number }>();
buyItem(){
  this.added.emit({
    name:this.productName(),
    price:this.price()
  })
}
}
