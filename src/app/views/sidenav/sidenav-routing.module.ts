import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseComponent } from '../purchase/purchase.component';
import { SidenavComponent } from './sidenav.component';


const routes: Routes = [
  {
    path: "",
    component: SidenavComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidenavRoutingModule { }
