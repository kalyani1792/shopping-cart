import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from '../contacts/contacts.component';
import{ DashboardComponent} from './dashboard/dashboard.component'
import {ListComponent } from './list/list.component';

const routes: Routes = [
  {path:'dashbaord',component:DashboardComponent},
  {path:'list',component:ListComponent},
  {path:'contacts/:id',component:ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
