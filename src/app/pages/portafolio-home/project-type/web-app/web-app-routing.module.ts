import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: `web-app-post1`, loadChildren: () =>
      import('./web-app-post1/web-app-post1.module').then(m => m.WebAppPost1Module)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebAppRoutingModule { }
