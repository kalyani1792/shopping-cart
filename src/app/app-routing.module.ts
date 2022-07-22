import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { AddProductComponent } from "./add-product/add-product.component";
import { PageNotFoundComponent } from "./componenents/shared/page-not-found/page-not-found.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from './register/register.component';
 import { AuthGuard } from "./auth.guard";
import { RoleGuard } from "./role.guard";
import { ContactsComponent } from "./contacts/contacts.component";
const routes:Routes=[
    {path:'',redirectTo:'/login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
   
    {path:'register',component:RegisterComponent},
    {path:'shop',component:ShoppingCartComponent},
    {path:'contacts',component:ContactsComponent},
    {path:'addproduct',component:AddProductComponent
},

    {path:'**',component:PageNotFoundComponent},
    {path:'admin',loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)},
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