import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileAppRoutingModule } from './mobile-app-routing.module';
import { MobileAppPost1Component } from './mobile-app-post1/mobile-app-post1.component';


@NgModule({
  declarations: [MobileAppPost1Component],
  imports: [
    CommonModule,
    MobileAppRoutingModule
  ]
})
export class MobileAppModule { }
