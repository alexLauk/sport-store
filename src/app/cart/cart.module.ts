import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { TableModule, ButtonsModule, ModalModule, TooltipModule, PopoverModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    TableModule,
    ButtonsModule,
    ModalModule,
    TooltipModule,
    PopoverModule,
  ]
})
export class CartModule { }
