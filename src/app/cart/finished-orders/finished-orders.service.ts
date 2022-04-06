import { Injectable } from '@angular/core';
import { UserService } from 'src/app/auth/user.service';
import { products } from 'src/app/products';

export interface FinishedOrders {
  id: number;
  price: number;
  date?: Date;
  userId: number;
  status: 'shipped' | 'deliverd' | null;
  products: number[] | null;
}

@Injectable({
  providedIn: 'root'
})
export class FinishedOrdersService {

  constructor(public userService: UserService) { }

  public orders: FinishedOrders [] = [
    { id: 1, price: 330, date: new Date(), userId: 200, status: 'shipped', products: [1, 2] }, 
    { id: 2, price: 295, date: new Date(), userId: 200, status: 'shipped', products: [3, 4, 5] }, 
    { id: 3, price: 605, date: new Date(), userId: 200, status: 'deliverd', products: [6, 7, 8, 9] }, 
    { id: 4, price: 365, date: new Date(), userId: 200, status: 'deliverd', products: [13, 14, 15] }, 
    { id: 5, price: 300, date: new Date(), userId: 300, status: 'shipped', products: [5, 6] }, 
    { id: 6, price: 565, date: new Date(), userId: 300, status: 'shipped', products: [8, 9, 10] }, 
    { id: 7, price: 1005, date: new Date(), userId: 300, status: 'deliverd', products: [15, 16, 17] }, 
    { id: 8, price: 400, date: new Date(), userId: 300, status: 'deliverd', products: [12, 13] }, 
    { id: 9, price: 205, date: new Date(), userId: 100, status: 'shipped', products: [8, 9] }, 
    { id: 10, price: 400, date: new Date(), userId: 100, status: 'shipped', products: [6, 7] }, 
    { id: 11, price: 225, date: new Date(), userId: 100, status: 'deliverd', products: [2, 3, 4] }, 
    { id: 12, price: 110, date: new Date(), userId: 100, status: 'deliverd', products: [11] }
  ];

  orders1 = [];

  getData(){

    this.orders.forEach(element => {
      if (element.userId == this.userService.currentUser.id) {
        this.orders1.push(element);
      }
    });

    return this.orders1;
  }

  products = products;
  orders2 = [];

  view(id: number) {
    this.orders1.forEach(element0 => {      
      element0.products.forEach(element1 => {
        products.forEach(element => {
          if (element.id == element1 && element0.id == id) {
            this.orders2.push(element);
          }
        });
      });
    });
    return this.orders2;
  }
}
