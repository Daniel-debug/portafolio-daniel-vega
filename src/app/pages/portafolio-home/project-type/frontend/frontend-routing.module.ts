import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: `frontend-post1`, loadChildren: () =>
      import('./frontend-post1/frontend-post1.module').then(m => m.FrontendPost1Module)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
