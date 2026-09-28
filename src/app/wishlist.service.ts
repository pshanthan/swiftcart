import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  public wishList = new BehaviorSubject<Product[]>([]);
  currentWishList$ = this.wishList.asObservable();
  addToWishList(product: Product) {
    const current = this.wishList.value;
    this.wishList.next([...current, product]);
  }
  constructor() {}
}
