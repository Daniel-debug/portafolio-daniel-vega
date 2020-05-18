import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogHomeRoutingModule } from './blog-home-routing.module';
import { BlogHomeComponent } from './blog-home.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [BlogHomeComponent],
  imports: [
    CommonModule,
    BlogHomeRoutingModule,
    TranslateModule
  ]
})
export class BlogHomeModule { }
