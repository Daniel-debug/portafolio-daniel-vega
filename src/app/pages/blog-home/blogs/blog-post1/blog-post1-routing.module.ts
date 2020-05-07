import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPost1Component } from './blog-post1.component';

const routes: Routes = [

  {path: 'post1' , component: BlogPost1Component, data: {titulo: 'mi primer blog'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogPost1RoutingModule { }
