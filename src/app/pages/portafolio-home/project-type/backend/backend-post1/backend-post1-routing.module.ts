import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackendPost1Component } from './backend-post1.component';

const routes: Routes = [
  {path: '' , component: BackendPost1Component, data: {titulo: 'backend - proyecto'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackendPost1RoutingModule { }
