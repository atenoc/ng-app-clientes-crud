import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenido';
  curso:String = 'Curso de Spring con Angular';
  alumno:String = 'Car Ateneo Trd';
}
