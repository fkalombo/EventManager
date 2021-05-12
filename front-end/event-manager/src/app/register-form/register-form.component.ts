import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateService } from '../validate.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  formGroup: FormGroup  = new FormGroup({
      Name: new FormControl("",[Validators.required]),
      Surname: new FormControl("",[Validators.required]),
      Email: new FormControl("",[Validators.required]),
      EmailConfirmed:  new FormControl(0,[Validators.required]),
      PasswordHash: new FormControl("",[Validators.required]),
      UserName: new FormControl("username",[Validators.required]),
      DateOfBirth: new FormControl("",[Validators.required]),
      GenderId: new FormControl("",[Validators.required]),
      
      
      
      
    })

  constructor(private validateService: ValidateService) { 
    
  }

  ngOnInit(): void {
  
  }

  postFormDetails(){
    if(this.formGroup.valid){
      console.log(this.formGroup.value);
      this.validateService.register(this.formGroup.value).subscribe(results=>{ 
      console.log(results)})
     
    } else {
      console.log("Incorrect data");
      
    }
    
  }
}
