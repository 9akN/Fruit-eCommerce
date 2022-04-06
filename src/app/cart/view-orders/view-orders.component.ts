import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/products';
import { FinishedOrdersService } from '../finished-orders/finished-orders.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  orders = [];

  constructor(public viewOrders: FinishedOrdersService) { }

  ngOnInit(): void {
    this.orders = this.viewOrders.view(undefined);
  }

  upvote(id: number) {
    products.forEach(element => {
      if (element.id == id) {
        element.positive++;
        window.alert("Your vote has been registered.");
      }
    });
   } 

   downvote(id: number) {
    products.forEach(element => {
      if (element.id == id) {
        element.negative++;
        window.alert("Your vote has been registered.");
      }
    });
  }
}
