import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosClienteComponent } from './components/productos-cliente/productos-cliente.component';
import { PorcentajeVentasComponent } from './components/porcentaje-ventas/porcentaje-ventas.component';
import { OrdenComponent } from './components/orden/orden.component';
import { appRouting } from './app.route';


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
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
