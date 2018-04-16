import { Producto } from '../interfaces/producto.interface';
export interface DetalleOrden {
  Id: number;
  IdOrden: number;
  Producto: Producto;
  PrecioUnitario: number;
  Cantidad: number;
  ValorTotal: number;
}
