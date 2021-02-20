import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Modelo/Cliente';
import { Articulo } from 'src/app/Modelo/Articulo';
import { ServicesService } from 'src/app/Service/services.service';
import { Orden } from 'src/app/Modelo/Orden';

@Component({
  selector: 'app-crear-orden',
  templateUrl: './crear-orden.component.html',
  styleUrls: ['./crear-orden.component.css']
})
export class CrearOrdenComponent implements OnInit {

  cli: Cliente = new Cliente();
  art: Articulo = new Articulo();
  ord: Orden = new Orden();
  ordenArticulos: Articulo[] =[];
  numeroOrden: String = Math.floor((Math.random() * 100) + 1).toString();

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

  agregarArticulo(){
    this.ordenArticulos.push({...this.art}); //creo un nuevo espacio en memoria 
  }

  crearOrden(){
    let orden: Orden = new Orden();
    orden = {
      numeroOrden: this.numeroOrden,
      codeClienteOrden: this.cli.codeCliente,
      detalles: this.ordenArticulos
    }
    console.log("se creo orden", orden);
    this.service.crearOrden(orden).subscribe(data=>{
      alert("Se creo la orden con éxito.");
      this.router.navigate(["listarOrden"]);
    });
  }
}