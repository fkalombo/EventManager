
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {
  private url = `${baseUrl}register`
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }
  constructor(private http: HttpClient) { }

  register(data: any): Observable<any>{
    data.UserName = data.Email
    return this.http.post("https://jstevents.herokuapp.com/api/users/insert/",JSON.parse(JSON.stringify(data)),this.httpOptions)
  }
  loginUser(): Observable<any>{
    return this.http.get("http://jstevents.herokuapp.com/api/users/getAll")
  }
}
