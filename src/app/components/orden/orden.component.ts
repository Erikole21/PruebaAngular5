import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../interfaces/cliente.interface';
import { PruebaService } from '../../services/prueba.service';
import { Producto } from '../../interfaces/producto.interface';
import { Orden } from '../../interfaces/orden.interface';
import { DetalleOrden } from '../../interfaces/detalleOrden.interface';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html'
})
export class OrdenComponent implements OnInit {

  constructor(private _servicio: PruebaService) { this.inicializarOrden(); }

  clientes: Cliente[] = [];
  sinDatos: Boolean = false;
  producto: Producto = null;
  productos: Producto[] = [];
  cantidad = 1;
  orden: Orden = null;
  mensaje: string;

  ngOnInit() {
    this._servicio.getClientes().subscribe(data => { this.clientes = data; });
  }

  clienteSeleccionado() {
    this._servicio.getProductosCliente(this.orden.Cliente.Id).subscribe(data => {
       this.productos = data;
      if (this.productos.length === 0) {
        this.mensaje = 'El cliente no tiene relacionado ningun producto';
      } else { this.mensaje = null; }
    });
  }

  agregarProducto() {
    if (this.producto != null) {
      if (this.orden.Detalle.length <= 4) {
        const existe = this.orden.Detalle.find(p => p.Producto.Id === this.producto.Id);
        if (existe === undefined) {
          const detalleOrden: DetalleOrden = {
            Id: 0,
            IdOrden: 0,
            Producto: this.producto,
            PrecioUnitario: this.producto.Precio,
            Cantidad: this.cantidad,
            ValorTotal: this.cantidad * this.producto.Precio
          };
          this.orden.Detalle.push(detalleOrden);
          this.orden.ValorTotal = this.orden.ValorTotal +  detalleOrden.ValorTotal;
          this.cantidad = 1;
          this.producto = null;
          this.mensaje = null;
        } else { this.mensaje = 'El producto seleccionado ya se agrego, a esta orden'; }
      } else { this.mensaje = 'Solo se permiten maximo 5 productos por orden'; }
    }
  }

  quitar(indice: number, idProducto: number) {
    const existe = this.orden.Detalle.find(p => p.Producto.Id === idProducto);
    this.orden.ValorTotal = this.orden.ValorTotal - existe.ValorTotal;
    this.orden.Detalle.splice(indice, 1);
  }

  private inicializarOrden() {
    this.orden = {
      Id: 0,
      Cliente: { Id: 0, Nombre: null, Email: null },
      FechaRegistro: null,
      DireccionEntrega: null,
      ValorTotal: 0,
      Detalle: []
    };
  }

  guardar() {
    if (this.orden.Detalle.length > 0) {
      this._servicio.guardarOrden(this.orden).subscribe(data => {
        if (data > 0) {
            this.inicializarOrden();
            this.mensaje = 'Orden guardada correctamente, Numero orden: ' + data;
          } else { this.mensaje = 'No fue posible guardar la orden, verifique su conexión o contactese con el administrador del sistema'; }
      });
    } else { this.mensaje = 'Seleccione minimo un producto para la orden'; }
  }
}
