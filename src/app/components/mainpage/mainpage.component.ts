import { CartItemsComponent } from './../cart-items/cart-items.component';
import { Component } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { IData,ImageSources } from '../../interfaces/InterfaceData';
import { CommonModule } from '@angular/common';


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
   
  

  constructor(public service: DataServiceService) {

   }


  ngOnInit() {
    this.service.queryData().subscribe(
      (data: IData[]) => {
        this.desserts = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  getSrcSet(image: ImageSources): string {
    return `
      ${image.mobile} 375w,
      ${image.tablet} 768w,
      ${image.desktop} 1440w
    `;
  }

  addToCart(dessert: IData): void {
    if (this.cartItems[dessert.name]) {
      this.cartItems[dessert.name].quantity++;
    } else {
      this.cartItems[dessert.name] = { quantity: 1, price: dessert.price };
    }
  }

  increaseQuantity(dessert: IData): void {
    if (this.cartItems[dessert.name]) {
      this.cartItems[dessert.name].quantity++;
    }
  }

  decreaseQuantity(dessert: IData): void {
    if (this.cartItems[dessert.name]) {
      if (this.cartItems[dessert.name].quantity > 1) {
        this.cartItems[dessert.name].quantity--;
      } else {
        this.removeFromCart(dessert.name);
      }
    }
  }

  removeFromCart(dessertName: string): void {
    delete this.cartItems[dessertName];
  }


 
}


