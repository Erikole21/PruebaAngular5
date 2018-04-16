import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosClienteComponent } from './components/productos-cliente/productos-cliente.component';
import { PorcentajeVentasComponent } from './components/porcentaje-ventas/porcentaje-ventas.component';
import { OrdenComponent } from './components/orden/orden.component';
import { appRouting } from './app.route';
import { PruebaService } from './services/prueba.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductosClienteComponent,
    PorcentajeVentasComponent,
    OrdenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    appRouting
  ],
  providers: [PruebaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
