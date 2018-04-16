import { Cliente } from '../interfaces/cliente.interface';
import { DetalleOrden } from '../interfaces/detalleOrden.interface';

export interface Orden {
  Id: number;
  Cliente: Cliente;
  FechaRegistro: Date;
  DireccionEntrega: string;
  ValorTotal: number;
  Detalle: DetalleOrden[];
}
