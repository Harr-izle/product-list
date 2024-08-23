import { CartItemsComponent } from './../cart-items/cart-items.component';
import { Component, EventEmitter, Output } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { IData,ImageSources } from '../../interfaces/InterfaceData';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart-service.service';


@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [CommonModule,CartItemsComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {
  desserts: IData[] = [];
  cartItems: { [key: string]: { quantity: number, price: number } } = {};


  
  

  constructor(
    public service: DataServiceService,
    public cartService: CartService
  ) { }

  ngOnInit() {
    this.service.queryData().subscribe(
      (data: IData[]) => {
        this.desserts = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );

    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }
  getSrcSet(image: ImageSources): string {
    return `
      ${image.mobile} 580w,
      ${image.tablet} 768w,
      ${image.desktop} 1440w
    `;
  }

  getSizes(): string {
    return `
      (max-width: 767px) 580px,
      (min-width: 768px) and (max-width: 1439px) 768px,
      1440px
    `;
  }

  addToCart(dessert: IData): void {
    this.cartService.addToCart(dessert);
  }

  increaseQuantity(dessert: IData): void {
    this.cartService.increaseQuantity(dessert);
  }

  decreaseQuantity(dessert: IData): void {
    this.cartService.decreaseQuantity(dessert);
  }

  removeFromCart(dessertName: string): void {
    this.cartService.removeFromCart(dessertName);
  }


 
}








