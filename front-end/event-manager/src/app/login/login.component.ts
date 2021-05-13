import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateService } from '../services/validate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  loginData = {}

  onSubmit() {
    console.warn(this.login.value);
  }
  
  constructor(private _auth: ValidateService,
              private _router: Router) { }
  
  ngOnInit(): void {
  }

  loginUser(){
    let user;
    this._auth.loginUser().subscribe(
      users => {this.loginData = users}

    )
  }

  validateLogin(users:any, user:any){
    users.forEach((element:any) => {
      if (element.Email == this.login.get("email")?.value){
          user = element;
          return 
      }  
    });
    
  }

}
