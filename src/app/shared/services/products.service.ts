import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

	 private products = [
      {
        id :1,
        name: "TV",
        quantity: 45,
      },
      {
        id :2,
        name: "Cell Phone",
        quantity: 60,
      },
      {
        id :3,
        name: "MacBook",
        quantity: 20,
      },
      {
        id :4,
        name: "iPad",
        quantity: 88,
      },
    ]


  constructor() { }

  public getProducts(){
    return this.products;
  }

  public getQuantity(quantity){
    return this.products.find((product) => {
      return product['quantity'] == quantity;
    })
  }

  public addProducts(product) {
  	 let thing = this.getQuantity(product);
     return thing.quantity ++;
  }

  public subProducts(product) {
  	 let thing = this.getQuantity(product);
     return thing.quantity --;
  }

}
