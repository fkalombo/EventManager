import { TicketsService } from './../services/tickets.service';
import { VenueService } from './../services/venue.service';
import { EventService } from './../services/event.service';
import { Event } from './../../interfaces/event';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-create-ticket-form',
  templateUrl: './create-ticket-form.component.html',
  styleUrls: ['./create-ticket-form.component.css']
})
export class CreateTicketFormComponent implements OnInit {
  tickets = new FormGroup({
    generalAvail: new FormControl("",[Validators.required, Validators.pattern('[0-9.]*')]),
    generalPrice: new FormControl("",[Validators.required, Validators.pattern('^[0-9]{1,4}([,.][0-9]{1,2})?$')]),
    vipAvail: new FormControl("",[Validators.required, Validators.pattern('[0-9]*')]),
    vipPrice: new FormControl("",[Validators.required, Validators.pattern('^[0-9]{1,4}([,.][0-9]{1,2})?$')]),
  })
  constructor(
    private ticketService: TicketsService
  ) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.ticketService.addTicket(this.tickets.value).subscribe((log) =>{
      console.log(log);})
  }
}
