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
      title: new FormControl("",[Validators.required]),
      subtitle: new FormControl("",[Validators.required]),
      date: new FormControl("",[Validators.required]),
      startTime: new FormControl("",[Validators.required, Validators.pattern('^(((([0-1][0-9])|(2[0-3])):?[0-5][0-9])|(24:?00))')]),
      endTime: new FormControl("",[Validators.required, Validators.pattern('^(((([0-1][0-9])|(2[0-3])):?[0-5][0-9])|(24:?00))')]),
      capacity: new FormControl("",[Validators.required])
    }),
    venue: new FormGroup({
      name: new FormControl("",[Validators.required]),
      streetAddress: new FormControl("",[Validators.required]),
      city: new FormControl("",[Validators.required]),
      province: new FormControl("",[Validators.required]),
      country: new FormControl("",[Validators.required]),
      zipCode: new FormControl("",[Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')])
    }),
    tickets: new FormGroup({
      generalAvail: new FormControl("",[Validators.required, Validators.pattern('[0-9.]*')]),
      generalPrice: new FormControl("",[Validators.required, Validators.pattern('^[0-9]{1,4}([,.][0-9]{1,2})?$')]),
      vipAvail: new FormControl("",[Validators.required, Validators.pattern('[0-9]*')]),
      vipPrice: new FormControl("",[Validators.required, Validators.pattern('^[0-9]{1,4}([,.][0-9]{1,2})?$')]),
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
