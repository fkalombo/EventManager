import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Event } from './../interfaces/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventsUrl = 'api/';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  constructor(
    private http: HttpClient
  ) { }

  addEvent(event: Event): void {
    console.log(event);

  }
  /** POST: add a new hero to the server */
  // addEvent(event: Event): Observable<Event> {
    // return this.http.post<Event>(this.eventsUrl, event, this.httpOptions);
  // }


}
