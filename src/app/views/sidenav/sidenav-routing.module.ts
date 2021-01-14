import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseComponent } from '../purchase/purchase.component';
import { SidenavComponent } from './sidenav.component';


const routes: Routes = [
  {
    path: "",
    component: SidenavComponent,
    children: [
      {
        path: "register", loadChildren: () => import("../../views/register/register.module").then(m => m.RegisterModule)
      },
      {
        path: "cart", loadChildren: () => import("../../views/cart/cart.module").then(m => m.CartModule)
      },
      {
        path: "purchase", loadChildren: () => import("../../views/purchase/purchase.module").then(m => m.PurchaseModule)
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidenavRoutingModule { }
