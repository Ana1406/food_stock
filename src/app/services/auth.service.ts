import { Injectable } from '@angular/core';
import {
  AuthChangeEvent,
  Session,
  SignInWithPasswordCredentials,
} from '@supabase/supabase-js';
import { SupabaseService } from './supabase.service';
import { UserSignUpDto } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private supabaseService: SupabaseService) {}

  authChanges(
    callback: (event: AuthChangeEvent, session: Session | null) => void
  ) {
    return this.supabaseService.supabase.auth.onAuthStateChange(callback);
  }

  signInWithPassword(credentials: SignInWithPasswordCredentials) {
    return this.supabaseService.supabase.auth.signInWithPassword(credentials);
  }

  async signUp(userDto: UserSignUpDto) {
    const { data: signUpResponse, error: signUpError } =
      await this.supabaseService.supabase.auth.signUp({
        email: userDto.email,
        password: userDto.password,
      });

    if (signUpError) throw signUpError;

    const { data: user, error: userError } = await this.supabaseService.supabase
      .from('user')
      .insert({
        user_id: signUpResponse?.user?.id,
        user_name: userDto.name,
        email: userDto.email,
        name: userDto.name,
      })
      .select();

    if (userError) throw userError;
    if (user) {
      userDto.permissions.forEach(async (permission_id) => {
        console.log(permission_id);
        await this.supabaseService.supabase.from('user_permission').insert({
          user_id: user[0]['id'],
          permission_id,
        });
      });
    }
  }

  signOut() {
    return this.supabaseService.supabase.auth.signOut();
  }

  forgotPassword(email: string) {
    return this.supabaseService.supabase.auth.resetPasswordForEmail(email);
  }
}
