import { Component, OnInit,  ViewChild, AfterViewInit } from '@angular/core';
import { Product, products } from '../products';
import { MatPaginator } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  products = products;
  pageSlice = this.products.slice(0,9);
  selected = '';

  showAll(){
    this.pageSlice=[]
    this.pageSlice=products;
  }
  showLess(){
    this.pageSlice=[]
    for(var i=0; i< this.products.length;i++){
      if (this.products[i].quantity<=0){
      this.pageSlice.push(products[i]);}
    }
  };
  showMore(){
    this.pageSlice=[]
    for(var i=0; i< this.products.length;i++){
      if (this.products[i].quantity>0){
      this.pageSlice.push(products[i]);}
    }
  };

  selectCategory() {
    this.pageSlice=[]
    for(var i=0; i< this.products.length; i++) {
      if (this.products[i].category == this.selected) {
        this.pageSlice.push(products[i]);
      } 
      if (this.selected == undefined) {
        this.pageSlice = products;
      }
    }
  }

  onPageChange(event: PageEvent){
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if ( endIndex > this.products.length){
      endIndex = this.products.length;
    }
    this.pageSlice = this.products.slice(startIndex, endIndex);
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  addToCart(product: Product) {
    if (product.quantity <= 0) {
      window.alert('This product is currently unvailable!');
    } else {
      this.cartService.addToCart(product);
      window.alert('Your product has been added to the cart!');
    }
  }

  ngOnInit(): void {
    // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  // Find the product that correspond with the id provided in route.
  this.product = products.find(product => product.id === productIdFromRoute);
  }

  product: Product|undefined;

}
