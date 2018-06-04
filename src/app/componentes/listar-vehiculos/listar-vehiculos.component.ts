import { Component, OnInit } from '@angular/core';
import { ParqueaderoService } from '../../servicios/parqueadero.service';
import swal from 'sweetalert';
import { version } from 'punycode';


@Component({
  selector: 'app-listar-vehiculos',
  templateUrl: './listar-vehiculos.component.html',
  styleUrls: ['./listar-vehiculos.component.sass']
})
export class ListarVehiculosComponent implements OnInit {

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

   async retirarVehiculo(vehiculo) {
     let confirmar = await this.comfirmarSalida();
     if (confirmar) {
       this.servicioRetirarVehiculo(vehiculo);
     }
   }

   servicioRetirarVehiculo(vehiculoRetirar) {
     
    this.parqueadero.retirarVehiculo(vehiculoRetirar)
    .subscribe(
      res => {
        this.vehiculos = this.vehiculos.filter( (vehiculo) => vehiculoRetirar.placa !== vehiculo.placa);
        swal(`Valor a pagar: ${res.valor}
              Fecha salida: ${res.fechaSalida}`, {
          icon: 'success',
        });
      },
      (error) => { console.log(error); }
    )
   }

   async comfirmarSalida() {
    const res =  await swal("Are you sure you want to do this?", {
      buttons: ["Oh noez!", true],
    });

    return res;
   }
}
