import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortafolioHomeRoutingModule } from './portafolio-home-routing.module';
import { PortafolioHomeComponent } from './portafolio-home.component';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [PortafolioHomeComponent],
  imports: [
    CommonModule,
    PortafolioHomeRoutingModule,
    TranslateModule
  ]
})
export class PortafolioHomeModule { }
