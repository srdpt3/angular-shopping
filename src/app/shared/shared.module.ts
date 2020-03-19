import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { OrderService } from './services/order.service';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent
  ],
  exports: [ProductCardComponent,
    ProductQuantityComponent],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    CategoryService,
    ProductService, ShoppingCartService,
    OrderService
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
