import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class ValidationSessionService {

  user:any
  session:any

  constructor(private supaBase:SupabaseService) {}

  validateSession(){

    
    this.supaBase.authChanges((event, session) => {
      this.user = session?.user.email;
      console.log(this.user);
    });
    return this.user
    
    
  }
  
}
