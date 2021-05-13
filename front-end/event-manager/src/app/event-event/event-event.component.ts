import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-event',
  templateUrl: './event-event.component.html',
  styleUrls: ['./event-event.component.css']
})
export class EventEventComponent implements OnInit {
  @Input() event: any;
  constructor() { }

  ngOnInit(): void {
  }

}
