import { Component, OnInit } from '@angular/core';
declare function init_pluginISOTOPE();
@Component({
  selector: 'app-portafolio-home',
  templateUrl: './portafolio-home.component.html',
  styleUrls: ['./portafolio-home.component.css']
})
export class PortafolioHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    init_pluginISOTOPE()
  }

}
