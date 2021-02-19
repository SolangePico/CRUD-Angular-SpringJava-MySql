import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Modelo/Cliente';
import { ServicesService } from 'src/app/Service/services.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  cli: Cliente = new Cliente();
  constructor(private service: ServicesService, private router: Router) { }

  ngOnInit(): void {
    this.editarCliente();
  }

  editarCliente() {
    let code = localStorage.getItem("code");
    this.service.getClienteCode(+code).subscribe(data => {
      this.cli = data;
    })
  }

  actualizarCliente() {
    this.service.actualizarCliente(this.cli)
      .subscribe(data => {
        this.cli = data;
        alert("Se actualizo con éxito.");
        this.router.navigate(["listarCliente"]);
      })
  }
}
