import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebAppRoutingModule } from './web-app-routing.module';
import { WebAppPost1Component } from './web-app-post1/web-app-post1.component';


@NgModule({
  declarations: [WebAppPost1Component],
  imports: [
    CommonModule,
    WebAppRoutingModule
  ]
})
export class WebAppModule { }
