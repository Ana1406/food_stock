import { Component } from '@angular/core';
import { SupabaseService } from 'src/app/supabase.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationSessionService } from 'src/app/validation-session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form:FormGroup|any

  loading=false;

  constructor(
    private fb:FormBuilder,
    private supabaseService:SupabaseService,
    private router: Router,
  ){
    this.form=fb.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    })
  }


   async loginForm():Promise<void>{
    try{
      this.loading = true;
      const userName = this.form.value.userName as string
      const password = this.form.value.password as string
      const { error } = await this.supabaseService.signInWithPassword({email: userName, password})
      
      if(error) throw error
      this.router.navigateByUrl('/admin/dashboard')
    }catch(error){
      if (error instanceof Error){
        alert(error.message)
      }
    }finally{
      this.form.reset()
      this.loading=false
    }

    }

  }


