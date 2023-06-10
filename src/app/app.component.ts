import { Component } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { AuthChangeEvent } from '@supabase/supabase-js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodstock';
  sessionValidate = false

  constructor(private supabaseService: SupabaseService) {
    this.supabaseService.authChanges((event: AuthChangeEvent) => {
      if (event === 'SIGNED_IN') {
        this.sessionValidate = true
      } else if (event === 'SIGNED_OUT') {
        this.sessionValidate = false

        // nuevos cambios
      }
    })
  }
}
