import { Injectable } from '@angular/core';
import { Tickets } from './../interfaces/tickets';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  private eventsUrl = 'https://jstevents.herokuapp.com/api/tickets/insert';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }
  constructor(
    private http: HttpClient,
  ) { }

  addTicket(ticket: Tickets): Observable<Tickets> {
    let body = JSON.parse(JSON.stringify(ticket));
    console.log(body);

    return this.http.post<Tickets>(this.eventsUrl,body, this.httpOptions);
  }
}
