import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogHomeRoutingModule } from './blog-home-routing.module';
import { BlogHomeComponent } from './blog-home.component';


@NgModule({
  declarations: [BlogHomeComponent],
  imports: [
    CommonModule,
    BlogHomeRoutingModule
  ]
})
export class BlogHomeModule { }
