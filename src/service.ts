import { Inject, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { product } from "./models/product";

@Injectable({providedIn : "root"})

class Service{
    getProduct() : Observable<product[]>{
        return new product [
            id : 1,
            name : 'shirt',
            price: 200

        ]
    }
}
