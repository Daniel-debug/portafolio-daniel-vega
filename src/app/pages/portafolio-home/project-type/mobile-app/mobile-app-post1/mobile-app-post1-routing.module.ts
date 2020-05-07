import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobileAppPost1Component } from './mobile-app-post1.component';


const routes: Routes = [
  {path: '' , component: MobileAppPost1Component, data: {titulo: 'mobile-app - proyecto'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileAppPost1RoutingModule { }
