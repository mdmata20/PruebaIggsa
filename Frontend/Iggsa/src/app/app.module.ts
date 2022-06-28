import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './component/productos/productos.component';
import { NavegacionComponent } from './component/navegacion/navegacion.component';
import { AddProductoComponent } from './component/add-producto/add-producto.component';
import { ProductoAntiguoComponent } from './component/producto-antiguo/producto-antiguo.component';
import { ConstoInversionComponent } from './component/consto-inversion/consto-inversion.component';
import { EnvioProductoComponent } from './component/envio-producto/envio-producto.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    NavegacionComponent,
    AddProductoComponent,
    ProductoAntiguoComponent,
    ConstoInversionComponent,
    EnvioProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
