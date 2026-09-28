import { OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Product } from "../models/product";
import { CommonModule } from "@angular/common";


export class productList implements OnInit{
    constructor(public productService : ProductService){}
    products : Product[] = [];
    ngOnInit(){
        this.getProducts();
    }
    getProducts(){
        this.productService.getProduct(){

        }
    }
}
