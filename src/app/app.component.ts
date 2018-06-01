import { Component, OnInit } from '@angular/core';
import { ParqueaderoService } from './servicios/parqueadero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  title = 'sdjvnwsdlvsl';
  vehiculos;

  constructor(private parqueadero: ParqueaderoService) {
  }

  ngOnInit(): void {
   this.parqueadero.consultarVehiculosEnParqueadero('1')
   .subscribe(
    (vehiculos) => {
      this.vehiculos = vehiculos;
    },
    (error) => { console.log(error); }
   );
  }

}
