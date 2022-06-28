import { Component, OnInit } from '@angular/core';

import {ProductosService} from '../../service/productos.service';

@Component({
  selector: 'app-producto-antiguo',
  templateUrl: './producto-antiguo.component.html',
  styleUrls: ['./producto-antiguo.component.css']
})
export class ProductoAntiguoComponent implements OnInit {

  product: any = []

  constructor(private productoS: ProductosService) { }

  ngOnInit(): void {
    this.productoS.ProductoAntiguo()
    .subscribe(
      res => {
        this.product = res;
      },
      err => console.error(err)
    )
  }

  

}
