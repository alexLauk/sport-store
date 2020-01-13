import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './core/main/main.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: '**', redirectTo: '/store'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
