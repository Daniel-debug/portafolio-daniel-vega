import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogHomeComponent } from './blog-home.component';

const routes: Routes = [
  {path: '' , component: BlogHomeComponent, data: {titulo: 'mi primer blog'}},
  {
    path: ``, loadChildren: () =>
      import('./blogs/blog-post1/blog-post1.module').then(m => m.BlogPost1Module)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogHomeRoutingModule { }
