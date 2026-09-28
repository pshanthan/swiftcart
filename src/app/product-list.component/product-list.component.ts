import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class productListComponent implements OnInit {
  constructor(
    public productService: ProductService,
    public cartService: CartService,
    public wishListService: WishlistService,
  ) {}
  products: Product[] = [];
  wishListCount: number = 0;
  ngOnInit() {
    this.getProducts();
    this.wishListService.currentWishList$.subscribe(
      (items) => (this.wishListCount = items.length),
    );
  }
  getProducts() {
    this.productService.getProduct().subscribe((products) => {
      this.products = products;
    });
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
  wishList(product: Product) {
    this.wishListService.addToWishList(product);
  }
}
