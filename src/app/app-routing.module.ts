import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
    {path: '' , component: AboutMeComponent, data: {titulo: 'Inicio'}},
    {
      path: ``, loadChildren: () =>
        import('./pages/pages.module').then(m => m.PagesModule)
    },
    {path: '' , redirectTo: '', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
