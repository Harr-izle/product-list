import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart-service.service';
import { ModalServiceService } from '../../services/modal-service.service';
import { Router } from '@angular/router';
import { ImageSources } from '../../interfaces/InterfaceData';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  constructor(
    public modalService: ModalServiceService,
    private cartService: CartService,
    private router: Router
  ) {}
  
  startNewOrder(): void {
    this.cartService.clearCart();
    this.modalService.isOpened = false;
    this.router.navigate(['/']);
  }

  getCartItemsArray(): [string, { quantity: number, price: number, image: ImageSources }][] {
    return Object.entries(this.modalService.cartItems);
  }

  // handle keydown
  @HostListener('window:keydown.enter', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.startNewOrder();
      event.preventDefault();
    }
  }  // handle click
  @HostListener('document:click', ['$event'])
  handleclick(event: Event) {
    if (event.target === document.querySelector('.modal')) {
      this.modalService.closeModal();
    }
  }

}