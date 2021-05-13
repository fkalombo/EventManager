import { baseUrl } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {
  private url = `${baseUrl}register`
  constructor(private http: HttpClient) { }

  register(data: any): Observable<any>{
    data.UserName = data.Email
    return this.http.post("https://jstevents.herokuapp.com/api/users/insert/",JSON.parse(JSON.stringify(data)))
  }
}
