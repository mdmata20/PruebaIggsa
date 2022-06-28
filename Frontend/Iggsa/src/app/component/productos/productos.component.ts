import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Producto} from '../../models/productos';
import {ProductosService} from '../../service/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  product: any = []

  producto: Producto[] = [
    {
    id_bodega: 0,
    nombre: '',
    caducado: 0,
    PrecioU: 0,
    CantidadProducto: 0,
    fechaIngreso: ''
   }
  ]

  constructor(private productoS: ProductosService,  private router: Router) { }

  ngOnInit(): void {
    this.productoS.getProducto().subscribe(
      res => {
        this.product = res;
        console.log(this.product);
      },
      err => console.error(err)
    );
    

  }


}
