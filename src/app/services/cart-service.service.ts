import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IData, ImageSources } from '../interfaces/InterfaceData';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<{ [key: string]: { quantity: number, price: number, image: ImageSources } }>({});
  cartItems$ = this.cartItemsSubject.asObservable();


  constructor() { }

  addToCart(dessert: IData): void {
    const currentCart = this.cartItemsSubject.value;
    if (currentCart[dessert.name]) {
      currentCart[dessert.name].quantity++;
    } else {
      currentCart[dessert.name] = { 
        quantity: 1, 
        price: dessert.price,
        image: dessert.image 
      };
    }
    this.cartItemsSubject.next(currentCart);
  }


  removeFromCart(dessertName: string): void {
    const currentCart = this.cartItemsSubject.value;
    delete currentCart[dessertName];
    this.cartItemsSubject.next(currentCart);
  }

  increaseQuantity(dessert: IData): void {
    const currentCart = this.cartItemsSubject.value;
    if (currentCart[dessert.name]) {
      currentCart[dessert.name].quantity++;
      this.cartItemsSubject.next(currentCart);
    }
  }

  decreaseQuantity(dessert: IData): void {
    const currentCart = this.cartItemsSubject.value;
    if (currentCart[dessert.name]) {
      if (currentCart[dessert.name].quantity > 1) {
        currentCart[dessert.name].quantity--;
      } else {
        this.removeFromCart(dessert.name);
      }
      this.cartItemsSubject.next(currentCart);
    }
  }

  clearCart(): void {
    this.cartItemsSubject.next({});
  }

  getCurrentCartItems(): { [key: string]: { quantity: number, price: number, image: ImageSources } } {
    return this.cartItemsSubject.value;
  }

  getOrderTotal(): number {
    return Object.values(this.cartItemsSubject.value).reduce((total, item) => total + (item.quantity * item.price), 0);
  }

}