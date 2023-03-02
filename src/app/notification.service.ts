import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
public notificationSubject=new Subject<string>();
  constructor() { }
  sendNotificationData(data){
    this.notificationSubject.next(data);
  }
}
