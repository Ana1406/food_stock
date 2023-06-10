import { Injectable } from '@angular/core'
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  Session,
  SignInWithPasswordCredentials,
  SignUpWithPasswordCredentials,
  SupabaseClient,
  User,
} from '@supabase/supabase-js'
import { environment } from 'src/environments/environment'

export interface Profile {
  id?: string
  username: string
  website: string
  avatar_url: string
}

@Injectable({
  providedIn: 'root',
})

export class SupabaseService {
  private supabase: SupabaseClient
  _session: AuthSession | null = null

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
  }

  get session() {
    return this.supabase.auth.getUser()
    // this.supabase.auth.getSession().then(({ data }) => {
    //   this._session = data.session
    //   console.log(data)
    // })
    // return this._session
  }

  profile(user: User) {
    return this.supabase
      .from('profiles')
      .select(`username, website, avatar_url`)
      .eq('id', user.id)
      .single()
  }

  authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
    return this.supabase.auth.onAuthStateChange(callback)
  }

  signInWithPassword(credentials: SignInWithPasswordCredentials) {
    return this.supabase.auth.signInWithPassword(credentials)
  }

  signUp(credentials: SignUpWithPasswordCredentials) {
    return this.supabase.auth.signUp(credentials)
  }

  signOut() {
    return this.supabase.auth.signOut()
  }

  // updateProfile() {
  //   this.supabase.auth.updateUser()
  // }

}