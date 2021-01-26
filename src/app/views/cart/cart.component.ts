import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public dataSource = new MatTableDataSource<any>();
  public totalPrice = 0;


  public ELEMENT_DATA;

  displayedColumns: string[] = ["name", "quantity", "unitPrice", "totalPrice", "options"];


  constructor(protected snackBar: MatSnackBar) { }

  ngOnInit() {
    this.ELEMENT_DATA = [

    ];

    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  }

  quantityChange() {
    var totalPrice = 0
    for (let x = 0; x < this.dataSource.data.length; x++) {
      totalPrice = totalPrice + this.dataSource.data[x].price * this.dataSource.data[x].quantity;
      this.totalPrice = Number(totalPrice)
    }
  }

  deleteProduct(position) {
    this.ELEMENT_DATA.splice(position, 1);
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  }

  addToCart(product) {
    var contador = 0;

    for (let x = 0; x < this.ELEMENT_DATA.length; x++) {
      if (this.ELEMENT_DATA[x].id == product.id) {
        contador = contador + 1;
      }

    }

    if (contador == 0) {

      product.totalPrice = product.quantity * product.price
      this.ELEMENT_DATA.push(product);
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      console.log(this.ELEMENT_DATA);
      this.totalPrice = this.totalPrice + (product.quantity * product.price);
    } else {
      this.openSnackBar("El producto ya ha sido añadido al carrito", "Aceptar", 2500);
    }
  }

  openSnackBar(message: string, action: string, time: number) {
    this.snackBar.open(message, action, {
      duration: time,
    });
  }

  facturar() { 
    console.log("ESTA ES LA DATA A FACTURAR");
    console.log(this.dataSource.data);
    
    
  }
 
}

export interface CartData {
  id: number;
  quantity: number;
  unitPrice: number;
  totalQuantity: number;
}