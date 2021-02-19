import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/Modelo/Articulo';
import { ServicesService } from 'src/app/Service/services.service';

@Component({
  selector: 'app-crear-articulo',
  templateUrl: './crear-articulo.component.html',
  styleUrls: ['./crear-articulo.component.css']
})
export class CrearArticuloComponent implements OnInit {

  constructor(private service: ServicesService, private router: Router) { }

  ngOnInit(): void {
  }

  art: Articulo = new Articulo();
  crearArticulo(){
    this.service.crearArticulo(this.art).subscribe(data=>{
      alert("Se agrego el artículo con éxito.");
      this.router.navigate(["listarArticulo"]);
    });
  }
}
