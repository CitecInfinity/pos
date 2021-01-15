import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "", redirectTo: "login", pathMatch: "full"
  },
  {
    path: "login", loadChildren: () => import("./views/login/login.module").then(m => m.LoginModule)
  },
  {
    path: "register", loadChildren: () => import("./views/register/register.module").then(m => m.RegisterModule)
  },
  {
    path: "cart", loadChildren: () => import("./views/cart/cart.module").then(m => m.CartModule)
  },
  {
    path: "purchase", loadChildren: () => import("./views/purchase/purchase.module").then(m => m.PurchaseModule)
  },
  {
    path : "products", loadChildren: ()=> import("./views/products/products.module").then(m => m.ProductsModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
