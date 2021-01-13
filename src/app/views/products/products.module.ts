import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductsComponent } from './products.component';
import { MatCardModule } from '@angular/material/card';
import { CartModule } from '../cart/cart.module';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatGridListModule,
    MatCardModule,
    CartModule
  ]
})
export class ProductsModule { }
