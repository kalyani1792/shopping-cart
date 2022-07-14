import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { AddProductComponent } from "./add-product/add-product.component";
import { PageNotFoundComponent } from "./componenents/shared/page-not-found/page-not-found.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from './register/register.component';
 import { AuthGuard } from "./auth.guard";
import { RoleGuard } from "./role.guard";
const routes:Routes=[
    {path:'',redirectTo:'/login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'shop',component:ShoppingCartComponent, },
    {path:'addproduct',component:AddProductComponent,canActivate:[RoleGuard]
},
    {path:'**',component:PageNotFoundComponent}
]
@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}