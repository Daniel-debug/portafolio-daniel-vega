import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
declare var gtag
import { filter } from 'rxjs/operators';
import { Router ,NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent {
  title = 'portafolio-web-daniel';

  langs: string[] = [];

  constructor( private translate: TranslateService,private router: Router) {
    this.translate.setDefaultLang('en');
    this.translate.use('es');
    this.translate.addLangs(['en', 'es']);
    this.langs = this.translate.getLangs();

    const navEndEvent$ = router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    );
    navEndEvent$.subscribe((e: NavigationEnd) => {
      gtag('config', 'UA-166941283-1', {'page_path':e.urlAfterRedirects});
    });
  
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }
}

