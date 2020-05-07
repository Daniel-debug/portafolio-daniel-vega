import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontendPost1Component } from './frontend-post1.component';


const routes: Routes = [
  {path: '' , component: FrontendPost1Component, data: {titulo: 'frontend - proyecto'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendPost1RoutingModule { }
