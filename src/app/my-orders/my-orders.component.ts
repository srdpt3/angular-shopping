import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'shared/services/order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  order$;
  constructor(private authSerice: AuthService, private orderService: OrderService) {
    this.order$ = this.authSerice.user$.switchMap(u => orderService.getOrdersByUser(u.uid));


  }



}
