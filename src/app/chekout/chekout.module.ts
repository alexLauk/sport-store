import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChekoutComponent } from './chekout/chekout.component';
import { ModalModule, TooltipModule, PopoverModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ChekoutComponent],
  imports: [
    CommonModule,
    ModalModule,
    TooltipModule,
    PopoverModule,
    ButtonsModule,
    FormsModule,
    ReactiveFormsModule,
    IconsModule
  ]
})
export class ChekoutModule { }
