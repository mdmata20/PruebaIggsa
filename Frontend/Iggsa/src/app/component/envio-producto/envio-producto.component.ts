import { Component, OnInit } from '@angular/core';

import {ProductosService} from '../../service/productos.service';

import {Envio} from '../../models/productos';

@Component({
  selector: 'app-envio-producto',
  templateUrl: './envio-producto.component.html',
  styleUrls: ['./envio-producto.component.css']
})
export class EnvioProductoComponent implements OnInit {

  envio: Envio = {
    bodega1: 0,
    bodega2: 0
  }

  constructor(private productoS: ProductosService) { }

  ngOnInit(): void {
  }

  EnvioProducto(){
    this.productoS.EnvioProducto(this.envio)
    .subscribe(
      res =>{
        console.log(res)
      },
      err => console.error(err)
    )
  }

}
