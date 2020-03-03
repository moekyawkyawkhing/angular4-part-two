import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-test',
  templateUrl: './event-test.component.html',
  styleUrls: ['./event-test.component.css']
})
export class EventTestComponent implements OnInit {
  @Input() event_bus_test;
  @Output() myclick = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  eventSend(){
    this.myclick.emit("Hello I am emit event clicked");
  }

}
