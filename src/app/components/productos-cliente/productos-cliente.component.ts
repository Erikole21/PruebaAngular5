import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Cliente } from '../../interfaces/cliente.interface';
import { PruebaService } from '../../services/prueba.service';
import { Producto } from '../../interfaces/producto.interface';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Grafica } from '../../interfaces/grafica.interface';

@Component({
  selector: 'app-productos-cliente',
  templateUrl: './productos-cliente.component.html'
})
export class ProductosClienteComponent implements OnInit {

  constructor(private _servicio: PruebaService) { }

  clientes: Cliente[] = [];
  cliente: Cliente = null;
  productos: Producto[] = [];
  view: any[] = [700, 600];
  datosGrafica: Grafica[] = [];

  // Configuracion grafica
   showXAxis = true;
   showYAxis = true;
   gradient = false;
   showLegend = true;
   showXAxisLabel = true;
   xAxisLabel = 'Producto';
   showYAxisLabel = true;
   yAxisLabel = 'Cantidad';
   colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#FFD700', '#9ACD32', '#7CFC00', '#4169E1']
    };

  ngOnInit() {
    this._servicio.getClientes().subscribe(data => { this.clientes = data; });
  }

  clienteSeleccionado() {
    this._servicio.getCantidadProductosAdquiridosCliente(this.cliente.Id).subscribe(data => {
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
