import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { ResumeCvComponent } from './resume-cv/resume-cv.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [   

  {
    path: `blog`, loadChildren: () =>
      import('./blog-home/blog-home.module').then(m => m.BlogHomeModule)
  },
  // {
  //   path: `contact`, loadChildren: () =>
  //     import('./contact/contact.module').then(m => m.ContactModule)
  // },
  {path: 'contact' , component: ContactComponent, data: {titulo: 'servicios'}},
  
  {
    path: `portafolio`, loadChildren: () =>
      import('./portafolio-home/portafolio-home.module').then(m => m.PortafolioHomeModule)
  },
  {path: 'resume-cv' , component: ResumeCvComponent, data: {titulo: 'curriculum-vitae'}},

  {path: 'service' , component: ServicesComponent, data: {titulo: 'servicios'}},

  {path: '' , redirectTo: '', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
