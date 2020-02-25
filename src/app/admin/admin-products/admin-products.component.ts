import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  product$;
  constructor(private productService: ProductService) {
    this.product$ = this.productService.getAll();
 
    

    

   }

  ngOnInit() {
  }

}
