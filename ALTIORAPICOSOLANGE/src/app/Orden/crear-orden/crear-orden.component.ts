import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Modelo/Cliente';
import { Articulo } from 'src/app/Modelo/Articulo';
import { ServicesService } from 'src/app/Service/services.service';

@Component({
  selector: 'app-crear-orden',
  templateUrl: './crear-orden.component.html',
  styleUrls: ['./crear-orden.component.css']
})
export class CrearOrdenComponent implements OnInit {

  cli: Cliente = new Cliente();
  art: Articulo = new Articulo();
  constructor(private service: ServicesService, private router: Router) { }

  ngOnInit(): void {
  }

  buscarCliente(): void {
    this.service.getClienteId(this.cli.idCliente).subscribe(data => {
      this.cli = data;
    })
  }

  buscarArticulo(): void {
    this.service.getArticuloCodeBarras(this.art.barCodeArticulo).subscribe(data => {
      this.art = data;
    })
  }
}