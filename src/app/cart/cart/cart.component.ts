import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from 'src/app/projects/services/product.service';
import { CartService } from '../cart.service';
import { Line } from 'src/app/projects/model/line.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  list: Line[] =[];

  constructor(
    public cartService: CartService,
    private router: Router  
  ) { }

  ngOnInit() {
   this.list = this.cartService.getProductLines();
   console.log(this.list);
  }

  backToHome() {
    this.router.navigate(['/']);
  }

  deleteLine(id) {
    this.cartService.deleteLine(id);
    this.cartService.calculateTotal();
    this.list = this.cartService.getProductLines();

  }

}
