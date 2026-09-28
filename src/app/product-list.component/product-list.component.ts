import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class productListComponent implements OnInit {
  constructor(public productService: ProductService) {}
  products: Product[] = [];
  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProduct().subscribe((products) => {
      this.products = products;
    });
  }
}
