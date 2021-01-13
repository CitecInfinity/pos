import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { CartModule } from './views/cart/cart.module';

const routes: Routes = [

  {
    path: "", redirectTo: "login", pathMatch: "full"
  },
  {
    path: "login", loadChildren: () => import("./views/login/login.module").then(m => m.LoginModule)
  },
  {
    path: "products", loadChildren: () => import("./views/products/products.module").then(m => m.ProductsModule)
  },
  {
    path: "cart", loadChildren: () => import("./views/cart/cart.module").then(m => m.CartModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }