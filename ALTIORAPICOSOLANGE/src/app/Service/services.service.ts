import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../Modelo/Cliente';
import { Articulo } from '../Modelo/Articulo';
import { Orden } from '../Modelo/Orden';
import { OrdenByCliente } from '../Modelo/OrdenByCliente';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  Url = "http://localhost:8080/clientes";
  UrlA = "http://localhost:8080/articulos";
  UrlO = "http://localhost:8080/ordenes";

  //Servicios de Cliente
  getListarClientes() {
    return this.http.get<Cliente[]>(this.Url);
  }

  crearCliente(cliente: Cliente) {
    return this.http.post<Cliente>(this.Url, cliente);
  }

  getClienteCode(code: number) {
    return this.http.get<Cliente>(this.Url + "/" + code);
  }

  actualizarCliente(cliente: Cliente) {
    return this.http.put<Cliente>(this.Url + "/" + cliente.codeCliente, cliente);
  }

  eliminarCliente(cliente: Cliente) {
    return this.http.delete<Cliente>(this.Url + "/" + cliente.codeCliente);
  }

  //Servicios de Articulo
  getListarArticulos() {
    return this.http.get<Articulo[]>(this.UrlA);
  }

  crearArticulo(articulo: Articulo) {
    return this.http.post<Articulo>(this.UrlA, articulo);
  }

  getArticuloCode(code: number) {
    return this.http.get<Articulo>(this.UrlA + "/" + code);
  }

  actualizarArticulo(articulo: Articulo) {
    return this.http.put<Articulo>(this.UrlA + "/" + articulo.codeArticulo, articulo);
  }

  eliminarArticulo(articulo: Articulo) {
    return this.http.delete<Articulo>(this.UrlA + "/" + articulo.codeArticulo);
  }

  //Servicios de Orden
  getClienteId(id: String) {
    return this.http.get<Cliente>(this.Url + "/code/" + id);
  }

  getArticuloCodeBarras(barCode: String) {
    return this.http.get<Articulo>(this.UrlA + "/code/" + barCode);
  }

  crearOrden(orden: Orden) {
    return this.http.post<Orden>(this.UrlO, orden);
  }

  getListarOrdenes(codeCli: number) {
    return this.http.get<OrdenByCliente[]>(this.UrlO + "/" + codeCli);
  }
}
