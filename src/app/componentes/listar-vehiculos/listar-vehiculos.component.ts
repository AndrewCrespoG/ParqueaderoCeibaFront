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
     const confirmar = await this.comfirmarSalida();
     if (confirmar) {
       this.servicioRetirarVehiculo(vehiculo);
     }
   }

   servicioRetirarVehiculo(vehiculoRetirar) {
    this.parqueadero.retirarVehiculo(vehiculoRetirar)
    .subscribe(
      res => {
        this.vehiculos = this.vehiculos.filter( (vehiculo) => vehiculoRetirar.placa !== vehiculo.placa);
        swal(`
          Fecha salida: ${res.fechaSalida}
          Fecha de entrada: ${res.fechaIngreso}
          Horas cobradas en parqueadero: ${res.horas}
          Valor a pagar: ${res.valor}`, {
          icon: 'success',
        });
      },
      (error) => { console.log(error); }
    );
   }

   async comfirmarSalida() {
    const res =  await swal(
      'Estas seguro de retirar el vehiculo seleccinado?', {
        buttons: ['No', 'Si'],
        icon: 'warning'
      });
    return res;
   }
}
