import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { product } from './models/product';

@Injectable({ providedIn: 'root' })
class Service {
  getProduct(): Observable<product[]> {
    return of([{ id: 1, name: 'shirt', price: 200 }]);
  }
}
