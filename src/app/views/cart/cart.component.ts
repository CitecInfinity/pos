import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {



  public ELEMENT_DATA: PeriodicElement[] = [
    { name: 'Cincho caballero', quantity: 1., unitPrice: 50, totalQuantity: 2 },
    { name: 'Cincho dama', quantity: 4., unitPrice: 50, totalQuantity: 2 },
    { name: 'Billetera cafe', quantity: 6, unitPrice: 50, totalQuantity: 2 },
    { name: 'Riñonera azul', quantity: 9., unitPrice: 50, totalQuantity: 2 },
    { name: 'Reloj negro', quantity: 10, unitPrice: 50, totalQuantity: 2 },
    { name: 'Corbata roja', quantity: 12, unitPrice: 50, totalQuantity: 2 },
    { name: 'Playera blanca ', quantity: 14, unitPrice: 50, totalQuantity: 2 },
    { name: 'Billetera negra', quantity: 15, unitPrice: 50, totalQuantity: 2 },
    { name: 'Reloj naranja', quantity: 18, unitPrice: 50, totalQuantity: 2 },
    { name: 'Riñonera verde', quantity: 20, unitPrice: 50, totalQuantity: 2 },
  ];

  displayedColumns: string[] = ["name", "quantity", "unitPrice", "totalQuantity", "options"];
  dataSource = this.ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}

export interface PeriodicElement {
  name: string;
  quantity: number;
  unitPrice: number;
  totalQuantity: number;
}