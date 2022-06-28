import { Injectable } from '@angular/core';
import  { HttpClient} from '@angular/common/http'

import {Producto, Envio} from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  API_URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getProducto(){
    return this.http.get(`${this.API_URL}/productos`)
  }

  ProductoAntiguo(){
    return this.http.get(`${this.API_URL}/productosAntiguos`)
  }

  postProducto(producto: Producto){
    return this.http.post(`${this.API_URL}/productos`, producto)
  }
  
  ConstoInversion(){
    return this.http.get(`${this.API_URL}/ContoInversionBodega`)
  }

  EnvioProducto(envio: Envio){
    return this.http.put(`${this.API_URL}/EnvioProducto`, envio)
  }
  
}
