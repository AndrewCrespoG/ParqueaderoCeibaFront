import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HttpClientModule } from '@angular/common/http';
import { IngresarVehiculoComponent } from './componentes/ingresar-vehiculo/ingresar-vehiculo.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresarVehiculoComponent
  ],
  imports: [
    BrowserModule,
    TabsModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
