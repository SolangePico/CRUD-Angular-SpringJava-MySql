import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarClientesComponent } from './Cliente/listar-clientes/listar-clientes.component';
import { CrearClienteComponent } from './Cliente/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './Cliente/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './Cliente/eliminar-cliente/eliminar-cliente.component';
import { ListarArticulosComponent } from './Articulo/listar-articulos/listar-articulos.component';
import { CrearArticuloComponent } from './Articulo/crear-articulo/crear-articulo.component';
import { EditarArticuloComponent } from './Articulo/editar-articulo/editar-articulo.component';
import { EliminarArticuloComponent } from './Articulo/eliminar-articulo/eliminar-articulo.component';
import { ListarOrdenesComponent } from './Orden/listar-ordenes/listar-ordenes.component';
import { CrearOrdenComponent } from './Orden/crear-orden/crear-orden.component';
import { FormsModule } from '@angular/forms';
import { ServicesService } from './Service/services.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListarClientesComponent,
    CrearClienteComponent,
    EditarClienteComponent,
    EliminarClienteComponent,
    ListarArticulosComponent,
    CrearArticuloComponent,
    EditarArticuloComponent,
    EliminarArticuloComponent,
    ListarOrdenesComponent,
    CrearOrdenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
