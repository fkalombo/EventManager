import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }
  constructor(private http: HttpClient) { }

  register(data: any): Observable<any>{
    data.UserName = data.Email
    return this.http.post("https://jstevents.herokuapp.com/api/users/register/",JSON.parse(JSON.stringify(data)),this.httpOptions)
  }
  loginUser(): Observable<any>{
    return this.http.get("http://jstevents.herokuapp.com/api/users/getAll")
  }
}
