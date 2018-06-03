import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { ParqueaderoService } from '../../servicios/parqueadero.service';

@Component({
  selector: 'app-ingresar-vehiculo',
  templateUrl: './ingresar-vehiculo.component.html',
  styleUrls: ['./ingresar-vehiculo.component.sass']
})
export class IngresarVehiculoComponent implements OnInit {

  tiposVehiculo = [{
    nombre: 'Motocicleta',
    id: 1
  },
  {
    nombre: 'Automovil',
    id: 0
  }]

  formIngresarVehiculo: FormGroup;

  constructor(private fb: FormBuilder, private parqueaderoService: ParqueaderoService) { }

  ngOnInit() {
    this.formIngresarVehiculo = this.fb.group(
      {
        placa: new FormControl('', [Validators.required]),
        propietario: new FormControl('', [Validators.required]),
        cilindraje: new FormControl('', [Validators.required]),
        tipoVehiculo: new FormControl( null, [Validators.required])
      }
    )
  }

  enviarFormulario () {
    if(this.formIngresarVehiculo.valid) {
          this.parqueaderoService.ingresarVehiculosEnParqueadero(this.formIngresarVehiculo.value)
          .subscribe(res => {
            console.log(res)
          }, error => {
            console.log(error)
          });
    } 
  }
 }
