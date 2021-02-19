import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/Modelo/Articulo';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Service/services.service';

@Component({
  selector: 'app-editar-articulo',
  templateUrl: './editar-articulo.component.html',
  styleUrls: ['./editar-articulo.component.css']
})
export class EditarArticuloComponent implements OnInit {

  art: Articulo = new Articulo();
  constructor(private service: ServicesService, private router: Router) { }

  ngOnInit(): void {
    this.editarArticulo();
  }

  editarArticulo() {
    let code = localStorage.getItem("code");
    this.service.getArticuloCode(+code).subscribe(data => {
      this.art = data;
    })
  }

  actualizarArticulo() {
    this.service.actualizarArticulo(this.art)
      .subscribe(data => {
        this.art = data;
        alert("Se actualizo con éxito.");
        this.router.navigate(["listarArticulo"]);
      })
  }
}
