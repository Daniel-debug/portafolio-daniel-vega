import { Component, OnInit } from '@angular/core';
import { Meta, Title, MetaDefinition } from '@angular/platform-browser';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  titulo: string;
  constructor(private router: Router,private title: Title, private meta: Meta, private translate: TranslateService) {
     this.getDataRoute() .subscribe(data => {
      this.titulo = data.titulo;
      this.title.setTitle(this.titulo); // sirve para que se vea ensima el nombre de la pagina
      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.titulo
      };
      this.meta.updateTag( metaTag );
    });
   }

  ngOnInit(): void {
  }

  getDataRoute(){
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd ),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null ),
      map( (event: ActivationEnd ) => event.snapshot.data)
      );
  }
  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
