import { Component, OnInit } from '@angular/core';

import {ProductosService} from '../../service/productos.service';

@Component({
  selector: 'app-consto-inversion',
  templateUrl: './consto-inversion.component.html',
  styleUrls: ['./consto-inversion.component.css']
})
export class ConstoInversionComponent implements OnInit {

  product: any = []

  constructor(private productoS: ProductosService) { }

  ngOnInit(): void {
    this.productoS.ConstoInversion()
    .subscribe(
      res => {
        this.product = res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

}
