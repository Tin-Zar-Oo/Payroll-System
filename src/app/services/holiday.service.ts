import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import holiday from '../../assets/dummy/holiday.json';
@Injectable({
  providedIn: 'root'
})
export class HolidayService {

 
  constructor() { }

  search(): Observable<any[]>{
   return of (holiday)
  }
}
