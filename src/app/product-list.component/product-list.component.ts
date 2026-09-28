import { OnInit } from "@angular/core";
import { ProductService } from "../product.service";
export class productList implements OnInit{
    constructor(public productService : ProductService){}
    ngOnInit(){
        this.getProducts();
    }
    getProducts(){
        this.productService.getProduct(){

        }
    }
}
