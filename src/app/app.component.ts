import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { productListComponent } from './product-list.component/product-list.component';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, productListComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'swiftcart';
}
