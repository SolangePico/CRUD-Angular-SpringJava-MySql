import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Modelo/Cliente';
import { ServicesService } from 'src/app/Service/services.service';
import { Orden } from 'src/app/Modelo/Orden';
import { OrdenByCliente } from 'src/app/Modelo/OrdenByCliente';

@Component({
  selector: 'app-listar-ordenes',
  templateUrl: './listar-ordenes.component.html',
  styleUrls: ['./listar-ordenes.component.css']
})
export class ListarOrdenesComponent implements OnInit {

  cli: Cliente = new Cliente();
  ordenes: OrdenByCliente[]

  constructor(private service: ServicesService, private router: Router) { }

  ngOnInit(): void {
  }

  buscarCliente(): void {
    this.service.getClienteId(this.cli.idCliente).subscribe(data => {
      this.cli = data;
    })
  }

  listarOrdenes(): void {
    this.service.getListarOrdenes(this.cli.codeCliente).subscribe((data: OrdenByCliente[]) => {
        this.ordenes = data;
      })
  }
}
