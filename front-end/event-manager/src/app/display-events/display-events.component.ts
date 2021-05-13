import { DisplayEventsService } from './../display-events.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-events',
  templateUrl: './display-events.component.html',
  styleUrls: ['./display-events.component.css']
})
export class DisplayEventsComponent implements OnInit {
  events: Array<any> = []

  constructor(private displayService: DisplayEventsService) { }

  ngOnInit(): void {
    this.displayService.getEvents().subscribe((results)=>{this.events = results})
  }

}
