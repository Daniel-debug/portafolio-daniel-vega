import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebAppPost1Component } from './web-app-post1.component';


const routes: Routes = [
  {path: '' , component: WebAppPost1Component, data: {titulo: 'web-app - proyecto'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebAppPost1RoutingModule { }
