import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
})
export class DirectivaComponent  {

  listaCurso:string[] = ['Java','Angular','Php','Node Js'];

  habilitar: boolean = true;

  constructor() { }

  setHabilitar(): void{
    this.habilitar=(this.habilitar==true)?false:true;
  }

}
