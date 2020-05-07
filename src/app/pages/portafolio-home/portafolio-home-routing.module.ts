import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioHomeComponent } from './portafolio-home.component';


const routes: Routes = [
  {path: '' , component: PortafolioHomeComponent, data: {titulo: 'portafolio'}},
  {
    path: `project`, loadChildren: () =>
      import('./project-type/backend/backend.module').then(m => m.BackendModule)
  },
  {
    path: `project`, loadChildren: () =>
      import('./project-type/frontend/frontend.module').then(m => m.FrontendModule)
  },
  {
    path: `project`, loadChildren: () =>
      import('./project-type/mobile-app/mobile-app.module').then(m => m.MobileAppModule)
  },
  {
    path: `project`, loadChildren: () =>
      import('./project-type/web-app/web-app.module').then(m => m.WebAppModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortafolioHomeRoutingModule { }
