import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateService } from '../validate.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  formGroup: FormGroup 

  constructor(private validateService: ValidateService) { 
    this.formGroup = new FormGroup({
      firstName: new FormControl("",[Validators.required]),
      lastName: new FormControl("",[Validators.required]),
      dateOfBirth: new FormControl("",[Validators.required]),
      gender: new FormControl("",[Validators.required]),
      telephone: new FormControl("",[Validators.required]),
      email: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required])
      
    })
  }

  ngOnInit(): void {
  
  }

  
}
