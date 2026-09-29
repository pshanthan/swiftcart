import { Injectable } from '@angular/core';
import { Order } from './models/order';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor() {}
  placeOrder(order: Order): Observable<{ orderId: number }> {
    return of({ orderId: Math.floor(Math.random() * 10000) });
  }
}
