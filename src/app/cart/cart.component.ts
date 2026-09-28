import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  constructor(public cartService: CartService) {}
  cartItems: Product[] = [];
  ngOnInit(): void {
    this.cartService.items$.subscribe((items) => (this.cartItems = items));
  }
  getTotal(): number {
    return this.cartItems.reduce((sum, p) => sum + p.price, 0);
  }
}
