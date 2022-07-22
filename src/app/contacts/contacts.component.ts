import { Component, Input, OnInit ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
@Input() myInput:string;
@Output() myOutput:EventEmitter<string>=new EventEmitter();
outputstring="hi msg from child";
  constructor() {
   }
  ngOnInit() {
     console.log(this.myInput);
  }
sendData(){
  this.myOutput.emit(this.outputstring)
}
}
