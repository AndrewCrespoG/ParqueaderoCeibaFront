import { Component, OnInit } from '@angular/core';
import { ParqueaderoService } from './servicios/parqueadero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent  {

  title = 'Parqueadero Ceiba';
  vehiculos;

  constructor(private parqueadero: ParqueaderoService) {
  }

 

}
