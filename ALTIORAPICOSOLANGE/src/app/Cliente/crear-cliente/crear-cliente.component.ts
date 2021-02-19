import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Modelo/Cliente';
import { ServicesService } from 'src/app/Service/services.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  constructor(private service: ServicesService, private router: Router) { }

  ngOnInit(): void {
  }

  cli: Cliente = new Cliente();

  crearCliente(){
    this.service.crearCliente(this.cli).subscribe(data=>{
      alert("Se agrego el cliente con éxito.");
      this.router.navigate(["listarCliente"]);
    });
  }

}
