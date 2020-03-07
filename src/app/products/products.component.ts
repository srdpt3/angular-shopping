import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any ={};
  filteredProducts: Product[] = [];

  category: string;
  constructor(route: ActivatedRoute, productService: ProductService) {
    productService
      .getAll()
      .switchMap(products => {
        this.products = products;

        return route.queryParamMap;
      }).subscribe(param => {
        this.category = param.get('category');
        this.filteredProducts = (this.category) ?
          this.products.filter(p => p.category === this.category) :
          this.products;
      });
    


  }

  ngOnInit() {
  }

}
