import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { productListComponent } from './product-list.component/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    productListComponent,
    CartComponent,
    ShippingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'swiftcart';
}
