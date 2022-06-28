import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ProductosComponent} from '../app/component/productos/productos.component';
import {NavegacionComponent} from '../app/component/navegacion/navegacion.component';
import {AddProductoComponent} from '../app/component/add-producto/add-producto.component';
import {ProductoAntiguoComponent} from '../app/component/producto-antiguo/producto-antiguo.component';
import {ConstoInversionComponent} from '../app/component/consto-inversion/consto-inversion.component';
import {EnvioProductoComponent} from '../app/component/envio-producto/envio-producto.component';

const routes: Routes = [
  {
    path: 'ListaProducto',
    component: ProductosComponent
  },
  {
    path: 'Navegacion',
    component: NavegacionComponent
  },
  {
    path: 'AddProducto',
    component: AddProductoComponent
  },
  {
    path: 'ProductoAntiguo',
    component: ProductoAntiguoComponent
  },
  {
    path: 'ConstoInversion',
    component: ConstoInversionComponent
  },
  {
    path: 'EnvioProducto',
    component: EnvioProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
