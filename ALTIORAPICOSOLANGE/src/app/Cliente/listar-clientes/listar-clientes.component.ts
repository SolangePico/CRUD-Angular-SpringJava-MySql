import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Modelo/Cliente';
import { ServicesService } from 'src/app/Service/services.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  clientes: Cliente[]
  constructor(private service: ServicesService, private router: Router) { }

  ngOnInit() {
    this.service.getListarClientes()
      .subscribe((data: Cliente[]) => {
        this.clientes = data;
      })
  }

  editarCliente(cliente: Cliente): void {
    localStorage.setItem("code", cliente.codeCliente.toString());
    this.router.navigate(["editarCliente"]);
  }

  eliminarCliente(cliente: Cliente) {
    this.service.eliminarCliente(cliente)
      .subscribe(data => {
        this.clientes = this.clientes.filter(p => p !== cliente);
        alert("Cliente Eliminado");
      })
  }
}
