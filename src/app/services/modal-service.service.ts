import { Injectable } from '@angular/core';
import { CartService } from '../services/cart-service.service';
import { ImageSources } from '../interfaces/InterfaceData';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {
  closeModal() {
    throw new Error('Method not implemented.');
  }
  isOpened: boolean = false;
  cartItems: { [key: string]: { quantity: number, price: number, image: ImageSources } } = {};
  orderTotal: number = 0;

  constructor(public cartService: CartService) { }

  openModal() {
    this.isOpened = true;
    this.updateCartItems();
  }

  updateCartItems() {
    this.cartItems = this.cartService.getCurrentCartItems();
    this.orderTotal = this.cartService.getOrderTotal();
  }
}