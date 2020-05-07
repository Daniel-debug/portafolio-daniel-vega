import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PortafolioHomeComponent } from './portafolio-home/portafolio-home.component';

import { ProjectTemplateComponent } from './portafolio-home/project-template/project-template.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [PortafolioHomeComponent,ProjectTemplateComponent, ServicesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
