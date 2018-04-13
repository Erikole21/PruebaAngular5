import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OrdenComponent  } from './components/orden/orden.component';
import { PorcentajeVentasComponent } from './components/porcentaje-ventas/porcentaje-ventas.component';
import { ProductosClienteComponent } from './components/productos-cliente/productos-cliente.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'orden', component: OrdenComponent },
  { path: 'ventas', component: PorcentajeVentasComponent },
  { path: 'productos', component: ProductosClienteComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);
