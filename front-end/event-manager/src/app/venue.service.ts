import { Injectable } from '@angular/core';

import { Venue } from './../interfaces/venue';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VenueService {

  private eventsUrl = 'https://jstevents.herokuapp.com/api/venues/insert';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  constructor(
    private http: HttpClient
  ) { }


  /** POST: add a new hero to the server */
  addVenue(venue: Venue): Observable<Venue> {
    //console.log(venue);
    let body = JSON.parse(JSON.stringify(venue));
    console.log(body);

    return this.http.post<Venue>(this.eventsUrl,body, this.httpOptions);
  }
}
