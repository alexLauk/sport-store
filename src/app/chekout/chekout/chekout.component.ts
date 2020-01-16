import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OrderService } from '../order.service';
import { Order } from 'src/app/projects/model/order.model';
import { CartService } from 'src/app/cart/cart.service';
import { Client } from 'src/app/projects/model/client.model';
import { Router } from '@angular/router';
import { MDBModalRef } from 'angular-bootstrap-md';

@Component({
  selector: 'app-chekout',
  templateUrl: './chekout.component.html',
  styleUrls: ['./chekout.component.scss']
})
export class ChekoutComponent implements OnInit {

  form: FormGroup;


  constructor(
    private orderService: OrderService,
    private cartService: CartService,
    private router: Router,
    public modalRef: MDBModalRef
    ) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      adress: new FormControl('', Validators.required)
    })
  }

  get name() {
    return this.form.get('name');
  }

  get adress() {
    return this.form.get('adress');
  }

  send() {
    if (this.form.valid) {
      const lines = this.cartService.getProductLines();
      const total = this.cartService.getTotal();
      const client = new Client(this.form.get('name').value, this.form.get('adress').value)
      const order = new Order(lines, total, client);

      this.orderService.addOrder(order).subscribe(() => {
          this.cartService.clear();
          this.router.navigate(['/home'])
      });
    }
  }

}
