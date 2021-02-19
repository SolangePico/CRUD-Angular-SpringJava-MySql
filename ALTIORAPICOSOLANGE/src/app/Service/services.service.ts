import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../Modelo/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  Url = "http://localhost:8080/clientes";

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
}
