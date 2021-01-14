import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseComponent } from './purchase.component';
import { SidenavModule } from '../sidenav/sidenav.module';


@NgModule({
  declarations: [PurchaseComponent],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    SidenavModule
  ]
})
export class PurchaseModule { }
