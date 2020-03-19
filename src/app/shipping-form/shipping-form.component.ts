import { ShoppingCart } from 'shared/models/shopping-cart';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Order } from 'shared/models/order';
import { Router } from '@angular/router';
import { OrderService } from 'shared/services/order.service';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from 'shared/services/auth.service';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ShoppingCart;
  shipping = {};
  userSubscription: Subscription;

  userId: string;
  constructor(private router: Router, private orderService: OrderService, private autoService: AuthService) { }

  ngOnInit() {
    this.userSubscription = this.autoService.user$.subscribe(u => this.userId = u.uid);

  }



  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);
    console.log(this.shipping);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.key]);
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
