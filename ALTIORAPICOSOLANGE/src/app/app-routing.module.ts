import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearArticuloComponent } from './Articulo/crear-articulo/crear-articulo.component';
import { EditarArticuloComponent } from './Articulo/editar-articulo/editar-articulo.component';
import { EliminarArticuloComponent } from './Articulo/eliminar-articulo/eliminar-articulo.component';
import { ListarArticulosComponent } from './Articulo/listar-articulos/listar-articulos.component';
import { CrearClienteComponent } from './Cliente/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './Cliente/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './Cliente/eliminar-cliente/eliminar-cliente.component';
import { ListarClientesComponent } from './Cliente/listar-clientes/listar-clientes.component';
import { CrearOrdenComponent } from './Orden/crear-orden/crear-orden.component';
import { ListarOrdenesComponent } from './Orden/listar-ordenes/listar-ordenes.component';

const routes: Routes = [
  //cliente
  {path:'listarCliente', component: ListarClientesComponent},
  {path:'crearCliente', component: CrearClienteComponent},
  {path:'editarCliente', component: EditarClienteComponent},
  {path:'eliminarCliente', component: EliminarClienteComponent},
  //articulo
  {path:'listarArticulo', component: ListarArticulosComponent},
  {path:'crearArticulo', component: CrearArticuloComponent},
  {path:'editarArticulo', component: EditarArticuloComponent},
  {path:'eliminarArticulo', component: EliminarArticuloComponent},
  //orden
  {path:'listarOrden', component: ListarOrdenesComponent},
  {path:'crearOrden', component: CrearOrdenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
