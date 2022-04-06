import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FinishedOrders, FinishedOrdersService } from './finished-orders.service';

@Component({
  selector: 'app-finished-orders',
  templateUrl: './finished-orders.component.html',
  styleUrls: ['./finished-orders.component.css']
})
export class FinishedOrdersComponent implements OnInit {

  ordersSource = new MatTableDataSource<FinishedOrders>();
  displayedColumns = ["date", "price", "status", "view"];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private serviceOrders: FinishedOrdersService) { }

  ngOnInit(): void {
    this.ordersSource.data = this.serviceOrders.getData();
  }

  ngAfterViewInit(){
    this.ordersSource.sort = this.sort;
    this.ordersSource.paginator = this.paginator;
  }

  doFilter(filterValue: string){
    this.ordersSource.filter = filterValue.trim().toLowerCase();
  }

  viewButton(id: number) {
    this.serviceOrders.view(id);
  }
}
