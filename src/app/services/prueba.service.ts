import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Orden } from '../interfaces/orden.interface';
import { Cliente } from '../interfaces/cliente.interface';
import { Producto } from '../interfaces/producto.interface';

const httpHeaders = new HttpHeaders()
                         .set('Content-Type', 'application/json');

@Injectable()
export class PruebaService {

  constructor(private http: HttpClient) { }

  // Ajustar la ruta del servicio expuesto
  urlServicio = 'http://localhost/Api/Api/ordenes/';

  getClientes(): Observable<Cliente[]> {
     return this.http.get<Cliente[]>(`${this.urlServicio}Clientes`, {responseType: 'json'});
  }

  getProductosCliente(idCLiente: number): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.urlServicio}ConsultarProductosPermitidosCliente/${idCLiente}`
    , {responseType: 'json'});
  }

  guardarOrden(orden: Orden): Observable<number> {
    const urlCrear = `${this.urlServicio}GuardarOrden`;
    return this.http.post<number>(urlCrear, orden, { headers: httpHeaders });
  }

  getOrdenesClienteRango(idCliente: string, fechaInicial: string, fechaFinal: string): Observable<Orden[]> {
    const httpParams = new HttpParams()
                        .set('idCLiente', idCliente)
                        .set('fechaInicial', fechaInicial)
                        .set('fechaFinal', fechaFinal);
    const urlGet = `${this.urlServicio}OrdenesClienteRango`;
    return this.http.get<Orden[]>(urlGet, { headers: httpHeaders, params: httpParams });
  }

  getCantidadProductosAdquiridosCliente(idCliente: number): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.urlServicio}CantidadProductosAdquiridosCliente/${idCliente}`);
  }

  getPorcentajeVentaProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.urlServicio}ConsultarPorcentajeProductosVendidos`);
  }
}

