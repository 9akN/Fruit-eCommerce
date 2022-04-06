import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  products = products;
  pageProd = this.products;
  pageProd1 = this.products;

  ngOnInit(){
    for (var i = this.products.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.pageProd1[i];
      this.pageProd1[i] = this.pageProd1[j];
      this.pageProd1[j] = temp;
  }
    this.pageProd=[]
    for(var i=0; i<3;i++){
      this.pageProd.push(this.pageProd1[i]);
    }
  }
  constructor() { }

  
    images = ['../../assets/images/13.png', '../../assets/images5.png', '../../assets/images6.png', '../../assets/images14.png'];

}
