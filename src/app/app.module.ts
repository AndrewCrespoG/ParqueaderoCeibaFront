import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HttpClientModule } from '@angular/common/http';
import { IngresarVehiculoComponent } from './componentes/ingresar-vehiculo/ingresar-vehiculo.component';
import { ListarVehiculosComponent } from './componentes/listar-vehiculos/listar-vehiculos.component';
import {DropdownModule} from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { FooterComponent } from './componentes/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    IngresarVehiculoComponent,
    ListarVehiculosComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    TabsModule.forRoot(),
    HttpClientModule,
    DropdownModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
