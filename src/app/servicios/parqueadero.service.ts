import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParqueaderoService {

  urlConsultarVehiculos = 'http://localhost:5678/parqueadero/vehiculo/listar-vehiculos';
  urlAgregarVehiculos ='http://localhost:5678/parqueadero/vehiculo/ingresar-vehiculo';
  urlEliminarVehiculo = 'http://localhost:5678/parqueadero/vehiculo/retirar-vehiculo';

  constructor(private http: HttpClient) { }

  public consultarVehiculosEnParqueadero(idParquedro: string): Observable<any> {
   return this.http.get(this.urlConsultarVehiculos);
  }

  public ingresarVehiculosEnParqueadero(vehiculo: any): Observable<any> {
    return this.http.post(this.urlAgregarVehiculos, vehiculo);
   }

   public retirarVehiculo(vehiculo): Observable<any> {
    return this.http.post(this.urlEliminarVehiculo, vehiculo);
   }
}
