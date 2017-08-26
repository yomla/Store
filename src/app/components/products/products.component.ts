import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  
})
export class ProductsComponent implements OnInit {

  allProducts: any[];

  constructor(private product: ProductsService) { }

  ngOnInit() {
  	this.allProducts = this.product.getProducts();
  }

}
