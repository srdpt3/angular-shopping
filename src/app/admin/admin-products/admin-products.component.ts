import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { ProductService } from './../../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  product: Product[];
  filteredProduct: any[];
  subscription: Subscription;
  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll().
      subscribe(product => this.filteredProduct = this.product = product);
  }


  filter(query: string) {
    this.filteredProduct = (query) ?
      this.product.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : this.product;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
