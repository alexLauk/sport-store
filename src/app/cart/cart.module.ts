import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { TableModule, ButtonsModule, ModalModule, TooltipModule, PopoverModule, InputsModule, MDBModalService } from 'angular-bootstrap-md';
import { ChekoutModule } from '../chekout/chekout.module';
import { ChekoutComponent } from '../chekout/chekout/chekout.component';



@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    TableModule,
    ButtonsModule,
    PopoverModule,
    ModalModule,
    TooltipModule

  ],
  providers: [MDBModalService],
  entryComponents: [ ChekoutComponent ]
})
export class CartModule { }
