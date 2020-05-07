import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
 // schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
