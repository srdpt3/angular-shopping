import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataTableResource } from 'angular5-data-table';
import { Subscription } from 'rxjs';
import { ProductService } from 'shared/services/product.service';
import { Product } from 'shared/models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  product: Product[];
  items: Product[] = [];
  subscription: Subscription;
  tableResource: DataTableResource<Product>;
  itemCount: number;
  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll().
      subscribe(product => {
        this.product = product;
        this.initializeTable(product);

      });
  }


  private initializeTable(products: Product[]) {
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({ offset: 0 }).then(items => this.items = items);
    this.tableResource.count().then(count => this.itemCount = count);
  }

  reloadItems(params) {
    if (!this.tableResource) return;

    this.tableResource.query(params).then(items => this.items = items);

  }

  filter(query: string) {
    let filteredProduct = (query) ?
      this.product.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : this.product;

      this.initializeTable(filteredProduct);

  }



  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
