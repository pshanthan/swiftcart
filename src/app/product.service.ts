import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './models/product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  getProduct(): Observable<Product[]> {
    return of([{ id: 1, name: 'shirt', price: 200 }]);
  }
}
