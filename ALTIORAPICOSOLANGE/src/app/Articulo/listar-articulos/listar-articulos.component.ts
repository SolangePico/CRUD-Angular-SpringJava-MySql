import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from 'src/app//Modelo/Articulo';
import { ServicesService } from 'src/app/Service/services.service';

@Component({
  selector: 'app-listar-articulos',
  templateUrl: './listar-articulos.component.html',
  styleUrls: ['./listar-articulos.component.css']
})
export class ListarArticulosComponent implements OnInit {

  articulos: Articulo[]
  constructor(private service: ServicesService, private router: Router) { }

  ngOnInit(): void {
    this.service.getListarArticulos()
      .subscribe((data: Articulo[]) => {
        this.articulos = data;
      })
  }

}
