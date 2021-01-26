import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CartModule } from '../cart/cart.module';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatButtonModule,
    MatIconModule,
    CartModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
