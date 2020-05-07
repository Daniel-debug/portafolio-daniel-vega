import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: `mobile-app-post1`, loadChildren: () =>
      import('./mobile-app-post1/mobile-app-post1.module').then(m => m.MobileAppPost1Module)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileAppRoutingModule { }
