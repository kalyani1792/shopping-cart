import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from '../contacts/contacts.component';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';
import { NotificationBoardComponent } from '../notification-board/notification-board.component';
 import{ReactiveFormsModule} from '@angular/forms';
 import { ArraypipePipe } from '../arraypipe.pipe';
console.warn('admin module loaded');

@NgModule({
  declarations: [DashboardComponent, ListComponent,ContactsComponent,NotificationBoardComponent,ArraypipePipe],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    
  ]
})
export class AdminModule { }
