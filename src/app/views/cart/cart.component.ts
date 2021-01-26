import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public productsToShop = [
  ];

  constructor(private router: Router) { }


  ngOnInit() {
  }

  limpiarCarrito() {
    this.productsToShop = []
  }
  finalizarCompra() {
this.router.navigateByUrl("billing")

  }

  addProductToCart(producttoShop) {

    var contador = 0;

    for (let x = 0; x < this.productsToShop.length; x++) {
      if (this.productsToShop[x].codigo == producttoShop.codigo) {
        contador = contador + 1;
      }

    }

    if (contador == 0) {

      producttoShop.subtotal = Number(producttoShop.cantidad * producttoShop.precio)
      this.productsToShop.push(producttoShop)

    } else {
      console.log("ESTA REPETIDO");

    }
  }


  cambioCantidad( ) { 
    
  }

}
