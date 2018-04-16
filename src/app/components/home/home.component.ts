import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../interfaces/cliente.interface';
import { Orden } from '../../interfaces/orden.interface';
import { PruebaService } from '../../services/prueba.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [DatePipe]
})
export class HomeComponent implements OnInit {

  constructor(private _servicio: PruebaService, private datePipe: DatePipe) { }

  fechaActual = new Date();
  ordenes: Orden[] = [];
  clientes: Cliente[] = [];
  cliente: Cliente = null;
  sinDatos: Boolean = false;

  ngOnInit() {
    this._servicio.getClientes().subscribe(data => { this.clientes = data; });
  }

  clienteSeleccionado() {
    this.fechaActual.setDate(this.fechaActual.getDate() + 1);
    const fechaInicial = new Date();
    fechaInicial.setDate(fechaInicial.getDate() - 30 );
    this._servicio.getOrdenesClienteRango(this.cliente.Id.toString(),
    this.datePipe.transform(fechaInicial, 'yyyy-MM-dd'),
    this.datePipe.transform(this.fechaActual , 'yyyy-MM-dd')).subscribe(data => {
      this.ordenes = data;
      if (this.ordenes.length === 0) {
        this.sinDatos = true;
      } else { this.sinDatos = false; }
    });
  }
}
