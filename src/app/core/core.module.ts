import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NavbarModule,
  DropdownModule,
  CardsModule,
  ButtonsModule,
  IconsModule,
  CheckboxModule,
  BadgeModule
} from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    IconsModule,
    RouterModule,
    DropdownModule.forRoot(),
    CardsModule,
    ButtonsModule,
    CheckboxModule,
    BadgeModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainComponent
  ]
})
export class CoreModule {}
