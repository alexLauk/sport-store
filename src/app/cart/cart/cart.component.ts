import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from 'src/app/projects/services/product.service';
import { CartService } from '../cart.service';
import { Line } from 'src/app/projects/model/line.model';
import { Router } from '@angular/router';
import { MDBModalService, MDBModalRef } from 'angular-bootstrap-md';
import { ChekoutComponent } from 'src/app/chekout/chekout/chekout.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  list: Line[] =[];
  modalRef: MDBModalRef;

  constructor(
    public cartService: CartService,
    private router: Router,
    private modalService: MDBModalService
  ) { }

  ngOnInit() {
   this.list = this.cartService.getProductLines();
   console.log(this.list);
  }

  backToHome() {
    this.router.navigate(['/']);
  }

  openModal() {
    this.modalRef = this.modalService.show(ChekoutComponent)
  }

  deleteLine(id) {
    this.cartService.deleteLine(id);
    this.cartService.calculateTotal();
    this.list = this.cartService.getProductLines();

  }

}
