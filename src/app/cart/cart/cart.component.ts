import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from 'src/app/projects/services/product.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Line } from 'src/app/projects/model/line.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  list: Line[] =[];

  constructor(
    public cartService: CartService
  ) { }

  ngOnInit() {
   this.list = this.cartService.getProductLines();
   console.log(this.list);
  }

}
