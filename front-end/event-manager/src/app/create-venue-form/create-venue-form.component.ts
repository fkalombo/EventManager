import { TicketsService } from './../services/tickets.service';
import { VenueService } from './../services/venue.service';
import { EventService } from './../services/event.service';
import { Event } from './../../interfaces/event';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-venue-form',
  templateUrl: './create-venue-form.component.html',
  styleUrls: ['./create-venue-form.component.css']
})
export class CreateVenueFormComponent implements OnInit {

  venue = new FormGroup({
    Country: new FormControl("",[Validators.required]),
    Province: new FormControl("",[Validators.required]),
    StreetAddress: new FormControl("",[Validators.required]),
    VenueName: new FormControl("",[Validators.required]),
    City: new FormControl("",[Validators.required]),
    ZipCode: new FormControl("",[Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')])
  })
  constructor(
    private venueService: VenueService

  ) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.venueService.addVenue(this.venue.value).subscribe((log) =>{
      console.log(log);


    })
  }

}
