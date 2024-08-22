import { Component, Input } from '@angular/core';
import { IData } from '../../interfaces/InterfaceData';

@Component({
  selector: 'app-cart-items',
  standalone: true,
  imports: [],
  templateUrl: './cart-items.component.html',
  styleUrl: './cart-items.component.css'
})
export class CartItemsComponent {
  @Input() cartItems: { [key: string]: { quantity: number, price: number } } = {};
  @Input() removeFromCart: (dessertName: string) => void = () => {};
   
   
  getCartItemsCount(): number {
    return Object.values(this.cartItems).reduce((total, item) => total + item.quantity, 0);
  }

  getOrderTotal(): number {
    return Object.values(this.cartItems).reduce((total, item) => total + (item.quantity * item.price), 0);
  }

  getCartItemsArray(): [string, { quantity: number, price: number }][] {
    return Object.entries(this.cartItems);
  }

}


