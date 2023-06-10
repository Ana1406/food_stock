import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupabaseService } from 'src/app/supabase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  formRegister: FormGroup | any;
  errorMensage=''
  
  constructor( private router: Router,private fb: FormBuilder, private supabaseService: SupabaseService) {
    this.formRegister = fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    },{
      validator:this.matchPasswords
    });
  }

  ngOnInit() {}

  matchPasswords(control:AbstractControl){
    const password=control.get('password')?.value;
    const confirmPassword=control.get('confirmPassword')?.value;

    if (
      password !==
      confirmPassword
    ) {
      return {matchnotPasswords:true}
    } else {
      return null;
    }
  }

  async registerForm() {

    const formData = this.formRegister.getRawValue()
    

    await this.supabaseService.signUp({
      email: formData.email,
      password: formData.password,
      options: {
      data: {
        userName: formData.userName
      }
      }

    })
    
this.router.navigateByUrl('/auth/login')
    // console.log(this.formRegister.getRawValue())
  }
}
