import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseComponent } from './purchase.component';
import { SidenavModule } from '../sidenav/sidenav.module';
import { CartModule } from '../cart/cart.module';

import { ProductsModule } from '../products/products.module';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [PurchaseComponent],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    SidenavModule,
    CartModule,
    ProductsModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class PurchaseModule { }
