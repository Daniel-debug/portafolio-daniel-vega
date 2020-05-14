import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PortafolioHomeComponent } from './portafolio-home/portafolio-home.component';

import { ProjectTemplateComponent } from './portafolio-home/project-template/project-template.component';
import { ServicesComponent } from './services/services.component';
import { TranslateModule } from '@ngx-translate/core';
import { ContactComponent } from './contact/contact.component';
import { ResumeCvComponent } from './resume-cv/resume-cv.component';
@NgModule({
  declarations: [ProjectTemplateComponent, ServicesComponent,ContactComponent,ResumeCvComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    TranslateModule
  ],
  exports:[]
})
export class PagesModule { }
