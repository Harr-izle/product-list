import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../../services/cart-service.service';
import { ModalServiceService } from '../../services/modal-service.service';

@Component({
  selector: 'app-cart-items',
  standalone: true,
  imports: [],
  templateUrl: './cart-items.component.html',
  styleUrl: './cart-items.component.css'
})
export class CartItemsComponent {
  cartItems: { [key: string]: { quantity: number, price: number } } = {};
 @Output() modal:EventEmitter<boolean> = new EventEmitter();
  isModal:boolean=false;

  constructor(public cartService: CartService, public modalService: ModalServiceService) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }
openModal(){
  this.modalService.openModal();
  this.isModal=true;
  this.modal.emit(this.isModal);
}
  removeFromCart(dessertName: string): void {
    this.cartService.removeFromCart(dessertName);
  }

   
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


