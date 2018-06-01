import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParqueaderoService {

  urlConsultarVehiculos = 'http://localhost:5678/parqueadero/vehiculo/listar-vehiculos';

  constructor(private http: HttpClient) { }

  public consultarVehiculosEnParqueadero(idParquedro: string): Observable<any> {
   return this.http.get(this.urlConsultarVehiculos);
  }

}
