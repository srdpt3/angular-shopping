import { Subscription } from 'rxjs';
import { ShoppingCartService } from './../shopping-cart.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: any = {};
  filteredProducts: Product[] = [];
  cart: any;
  subscription: Subscription;

  category: string;
  constructor(route: ActivatedRoute, productService: ProductService, private shoppingCartService: ShoppingCartService) {

   
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

  async ngOnInit() {
    this.subscription = (await this.shoppingCartService.getCart()).subscribe(
      cart => this.cart = cart

    );

    console.log("adsfasfdsdf" +  this.cart);
    

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
