import { Component } from '@angular/core';

interface MenuItem{
  title:string;
  route:string;
}

@Component({
  selector: 'shared-sidemenu',
  templateUrl: './sidemenu.component.html',
})
export class SidemenuComponent {

  public reactiveMenu: MenuItem[]= [
    {title:'Básicos',route:'./reactive/basic'},
    {title:'Dinámicos',route:'./reactive/dynamic'},
    {title:'Switches',route:'./reactive/switches'},
  ];

  public authMenu: MenuItem[] = [
    {title:'Registro',route:'./auth'}
  ]

}
