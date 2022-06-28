import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/productos';

import {ProductosService} from '../../service/productos.service';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {

  producto: Producto =  {
    id_bodega: 0,
    nombre: '',
    caducado: 0,
    PrecioU: 0,
    CantidadProducto: 0,
    fechaIngreso: ''
   }
  

  constructor(private productoS: ProductosService) { }

  ngOnInit(): void {
  }

  addProducto(){
    this.productoS.postProducto(this.producto)
    .subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

}
