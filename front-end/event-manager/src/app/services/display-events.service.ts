import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DisplayEventsService {

  private myUrl: string = "http://jstevents.herokuapp.com/api/events/getAll"
  constructor(private http: HttpClient ) { }

  getEvents(): Observable<any> {
    return this.http.get(this.myUrl)
  }
}
