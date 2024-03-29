import { Injectable } from '@angular/core';
import leaves from '../../assets/dummy/leave.json'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor() { }

  search():Observable<any[]> {
    return of(leaves)
  }
}
