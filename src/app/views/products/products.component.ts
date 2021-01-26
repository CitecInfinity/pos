import { Component, OnInit, ViewChild } from '@angular/core';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  @ViewChild(CartComponent, null) cartComponent: CartComponent;

  public products: any = [
    {
      id: 1,
      name: "Cincho café",
      price: 250,
      image: "../../../assets/cincho.jpg"
    },
    {
      id: 2,
      name: "Billetera de caballero",
      price: 125,
      image: "../../../assets/billeteracafe.jpg"
    },
    {
      id: 3,
      name: "Riñonera azul",
      price: 325,
      image: "../../../assets/riñoneraazul.jpg"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  addToCart(i) {
    this.products[i].quantity = 1
    this.cartComponent.addToCart(this.products[i]);
  }

}
