import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'; 
@Component({
  selector: 'app-blog-post1',
  templateUrl: './blog-post1.component.html',
  styleUrls: ['./blog-post1.component.css']
})
export class BlogPost1Component implements OnInit {

  numeroDiasPost1:any;
  constructor() {

    var fecha1Post = moment('2020-05-13');
    var fechaActual = moment(moment().toDate())
    this.numeroDiasPost1 =  fechaActual.diff(fecha1Post, 'days')
   }

  ngOnInit(): void {
  
  }

}
