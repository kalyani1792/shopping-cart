import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification-board',
  templateUrl: './notification-board.component.html',
  styleUrls: ['./notification-board.component.css']
})
export class NotificationBoardComponent implements OnInit {
  notificationMsg:string;
  constructor(private notification:NotificationService) { }

  ngOnInit() {
    this.notification.notificationSubject.subscribe(d=>{
      this.notificationMsg=d;
    })
  }

 
}
