import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {
  isOpened: boolean = false;

  constructor() { }

  openModal() {
    this.isOpened = true;
  }
}
