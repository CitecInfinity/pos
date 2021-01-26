
import { Component, OnInit, ViewChild } from '@angular/core';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public cantidadProducto = 1;

  @ViewChild(CartComponent, null) cartComponent: CartComponent;

  public productData = [

    {
      codigo: 1,
      nombre: "Cincho caballero",
      precio: 20.00,
      imagen: "https://www.lebolsha.com/wp-content/uploads/2019/03/Cincho-Caballero-510344836-Hebilla.jpg",
      cantidad: 0
    },

    {

      codigo: 2,
      nombre: "Billetera café",
      precio: 250.00,
      imagen: "https://images-na.ssl-images-amazon.com/images/I/61iiRD1qhQL._AC_UX385_.jpg",
      cantidad: 0
    },
    {
      codigo: 3,
      nombre: "Riñonera azul",
      precio: 250.00,
      imagen: "https://www.articulopublicitario.com/wp-content/uploads/2019/11/6219-019-P.jpg",
      cantidad: 0
    },
    {
      codigo: 4,
      nombre: "Playera gris con diseño",
      precio: 125.00,
      imagen: "https://novocolor.com.gt/wp-content/uploads/2020/11/Playera-Gris.jpg",
      cantidad: 0
    }


  ];

  constructor() { }

  ngOnInit() {
  }

  eventoClick(position) {

    this.productData[position].cantidad = this.cantidadProducto
    this.cartComponent.addProductToCart(this.productData[position]);
    this.cantidadProducto = 1
  }

  cambioCantidad(event) {
    this.cantidadProducto = event.target.value
  }

}
