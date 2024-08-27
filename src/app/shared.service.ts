import { Injectable } from '@angular/core';
import { Product } from './Model/Product';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  specialProduct:Product[] = []
  getSharedVariable(): Product[] {
    return this.specialProduct;
  }

  setSharedVariable(product: Product): void {
    this.specialProduct.push(product)
  }
}
