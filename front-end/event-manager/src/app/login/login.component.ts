
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateService } from '../services/validate.service';
export let loggedIn: boolean = false
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  logged = loggedIn
  login = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  loginData = []

  onSubmit() {
    this.loginUser()
    console.warn(this.login.value);
  }
  
  constructor(private _auth: ValidateService,
              private _router: Router) { }
  
  ngOnInit(): void {
  }

  loginUser(){

    this._auth.loginUser().subscribe(
      users => {
        let userDetails = this.validateLogin(users)
      if (userDetails.PasswordHash == this.login.get("password")?.value){
      console.log("llklk");
      loggedIn = true
      console.log(loggedIn);
      
      } else {
          alert("Incorrect Password or Email")
      }
      
      }
    )
    
    
    
  }
  validateLogin(users: string | any[]){

    for(let i = 0; i<users.length; i++){
      console.log(users[i].Email.toString());
      console.log(this.login.get("email")?.value);
      
      
        if(users[i].Email.toString() == this.login.get("email")?.value){
          return users[i]
        }
    };
    return {'PasswordHash':null}
  
  }

}
