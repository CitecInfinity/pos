import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { CartModule } from '../cart/cart.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatGridListModule,
    MatCardModule,
    CartModule,
    FormsModule
  ]
})
export class ProductsModule { }
