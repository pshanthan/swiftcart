import { Injectable } from '@angular/core';
import { Order } from './models/order';
import { Observable, of } from 'rxjs';
import { CartService } from './cart.service';
import { Product } from './models/product';
@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(
    public cartService: CartService,
    public orderService: OrderService,
  ) {}
  cartItems: Product[] = [];
  ngOnInit() {
    this.cartService.items$.subscribe((items) => (this.cartItems = items));
  }
  placeOrder(order: Order): Observable<{ orderId: number }> {
    return of({ orderId: Math.floor(Math.random() * 10000) });
  }
}
