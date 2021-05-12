import { Injectable } from '@angular/core';
import { Tickets } from './../interfaces/tickets';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  private eventsUrl = 'api/';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }
  constructor(
    private http: HttpClient,
  ) { }

  addTicket(ticket: Tickets): void {
    console.log(ticket);
  }
  /** POST: add a new hero to the server */
  // addTicket((ticket: Tickets): Observable<Tickets> {
    // return this.http.post<Tickets>(this.eventsUrl, ticket, this.httpOptions);
  // }

}
