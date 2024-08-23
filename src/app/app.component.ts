import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { MainpageComponent } from "./components/mainpage/mainpage.component";
import { ModalServiceService } from './services/modal-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModalComponent, MainpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-product';

  

 

  constructor(
    public modalService: ModalServiceService){}

    
}
