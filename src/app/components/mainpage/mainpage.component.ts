import { Component } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { IData,ImageSources } from '../../interfaces/InterfaceData';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {
   desserts: IData[] = [];
  

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
}


