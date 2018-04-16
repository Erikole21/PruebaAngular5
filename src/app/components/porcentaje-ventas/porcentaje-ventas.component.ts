import { Component, OnInit } from '@angular/core';
import { PruebaService } from '../../services/prueba.service';
import { Producto } from '../../interfaces/producto.interface';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Grafica } from '../../interfaces/grafica.interface';

@Component({
  selector: 'app-porcentaje-ventas',
  templateUrl: './porcentaje-ventas.component.html'
})
export class PorcentajeVentasComponent implements OnInit {

  constructor(private _servicio: PruebaService) { }

  productos: Producto[] = [];
  view: any[] = [700, 600];
  datosGrafica: Grafica[] = [];

  // Configuracion grafica
   gradient = false;
   showLegend = true;
   colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AADCAA', '#FFD700', '#9ACD32', '#7CFC00', '#4169E1', '#04B4AE', '#FF8000']
    };
   showLabels = true;
   explodeSlices = false;
   doughnut = false;

  ngOnInit() {
    this._servicio.getPorcentajeVentaProductos().subscribe(data => {
      this.productos = data;
      this.datosGrafica = [];
      this.productos.forEach(producto => {
        const grafica: Grafica = {
           value: producto.Precio,
           name: producto.Nombre
        };
        this.datosGrafica.push(grafica);
      });
    });
  }

}
