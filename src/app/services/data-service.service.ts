
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IData } from '../interfaces/InterfaceData';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
 
  constructor(private http: HttpClient) { 
    
  }

  queryData(): Observable<IData[]> { 
    return this.http.get<IData[]>('../../assets/data/data.json'); 
  }


}
