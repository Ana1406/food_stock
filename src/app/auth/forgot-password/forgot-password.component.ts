import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  
  formPassword:FormGroup|any

  constructor(private fb:FormBuilder){
    this.formPassword=fb.group({
      email:['',Validators.required, Validators.email]
    })
  }

  ngOnInit(){

  }

  forgotPasswordForm(){
      console.log(this.formPassword.getRawValue())
      //console.log(this.form.password)
    

  }

}
