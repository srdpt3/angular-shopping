import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../category.service';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] =[];
  filteredProducts: Product[]= [];

  categories$;
  category: string;
  constructor(route: ActivatedRoute, productService: ProductService, categoryService: CategoryService) {
    productService.getAll().subscribe(products => this.products = products);
    this.categories$ = categoryService.getAll();

    route.queryParamMap.subscribe(param => {
      this.category = param.get('category');
      this.filteredProducts = (this.category) ?   
        this.products.filter(p => p.category === this.category) :
        this.products;
    });
  }

  ngOnInit() {
  }

}
