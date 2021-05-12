import { Injectable } from '@angular/core';

import { Venue } from './../interfaces/venue';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VenueService {

  private eventsUrl = 'api/';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  constructor(
    private http: HttpClient
  ) { }


  addVenue(venue: Venue): void {
    console.log(venue);
  }
  /** POST: add a new hero to the server */
  // addVenue((venue: Venue): Observable<Venue> {
    // return this.http.post<Venue>(this.eventsUrl, venue, this.httpOptions);
  // }
}
