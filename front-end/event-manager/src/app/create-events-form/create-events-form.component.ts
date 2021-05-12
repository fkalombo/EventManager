import { TicketsService } from './../tickets.service';
import { VenueService } from './../venue.service';
import { EventService } from './../event.service';
import { Event } from './../../interfaces/event';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-events-form',
  templateUrl: './create-events-form.component.html',
  styleUrls: ['./create-events-form.component.css']
})
export class CreateEventsFormComponent implements OnInit {

  events = new FormGroup({
    Description: new FormControl("",[Validators.required]),
    MaxNumGuests: new FormControl("",[Validators.required]),
    EventDate: new FormControl("",[Validators.required]),
    StartTime: new FormControl("",[Validators.required, Validators.pattern('^(((([0-1][0-9])|(2[0-3])):?[0-5][0-9])|(24:?00))')]),
    EndTime: new FormControl("",[Validators.required, Validators.pattern('^(((([0-1][0-9])|(2[0-3])):?[0-5][0-9])|(24:?00))')]),
    EventCreatorId: new FormControl("",[Validators.required]),
    BannerId: new FormControl("",[Validators.required]),
    EventTitle: new FormControl("",[Validators.required]),
    EventSubtitle: new FormControl("",[Validators.required]),
  })

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.eventService.addEvent(this.events.value);
    // this.venueService.addVenue(this.eventForm.get('venue')?.value);
    // this.ticketService.addTicket(this.eventForm.get('tickets')?.value);

    //this.eventService.getEvent();
  }
}
