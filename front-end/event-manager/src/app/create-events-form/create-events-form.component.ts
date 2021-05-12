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

  eventForm = new FormGroup({
    events: new FormGroup({
      title: new FormControl(),
      subtitle: new FormControl(),
      date: new FormControl(),
      startTime: new FormControl(),
      endTime: new FormControl(),
      capacity: new FormControl()
    }),
    venue: new FormGroup({
      name: new FormControl(),
      streetAddress: new FormControl(),
      city: new FormControl(),
      province: new FormControl(),
      country: new FormControl(),
      zipCode: new FormControl()
    }),
    tickets: new FormGroup({
      generalPrice: new FormControl(),
      generalAvail: new FormControl(),
      vipPrice: new FormControl(),
      vipAvail: new FormControl()
    })
  })

  constructor(
    private eventService: EventService,
    private venueService: VenueService,
    private ticketService: TicketsService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.eventService.addEvent(this.eventForm.get('events')?.value);
    this.venueService.addVenue(this.eventForm.get('venue')?.value);
    this.ticketService.addTicket(this.eventForm.get('tickets')?.value);
  }

}
