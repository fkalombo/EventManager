import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Event } from './../interfaces/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventsUrlInsert = 'https://jstevents.herokuapp.com/api/events/insert';  // URL to web api
  private eventsUrlGet = 'https://jstevents.herokuapp.com/api/events/get';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  constructor(
    private http: HttpClient
  ) { }


  /** POST: add a new hero to the server */
  addEvent(event: any): Observable<any> {
    let bodyString = [
      {
        'EventId': 1,
        'Description': event.Description,
        'MaxNumGuests': event.MaxNumGuests,
        'EventDate': event.EventDate,
        'StartTime': event.StartTime,
        'EndTime': event.EndTime,
        'EventCreatorId': event.EventCreatorId,
        'BannerId': event.BannerId,
        'EventTitle': event.EventTitle,
        'EventSubTitle': event.EventSubtitle,
        'VenueId': null
      }
    ]
    let body = JSON.parse(JSON.stringify(bodyString[0]));
    console.log(body);

    return this.http.post<any>(this.eventsUrlInsert,body, this.httpOptions)
  }

  async getEvent(): Promise<Observable<any>> {
    let eventsList = await this.http.get(this.eventsUrlGet);
    console.log(eventsList);

    return eventsList;
  }




}
