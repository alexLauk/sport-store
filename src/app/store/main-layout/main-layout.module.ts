import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { ProductService } from 'src/app/model/product.service';
import { ModelModule } from 'src/app/model/model/model.module';



@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    ModelModule
  ],
  providers: [ProductService]
})
export class MainLayoutModule { }
