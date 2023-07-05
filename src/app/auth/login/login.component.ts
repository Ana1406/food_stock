import { Component, OnInit } from '@angular/core';
import { SupabaseService } from 'src/app/supabase.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  loading = false;

  constructor(
    private fb: FormBuilder,
    private supabaseService: SupabaseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  async loginForm(): Promise<void> {
    try {
      this.loading = true;
      const userName = this.form.value.userName as string;
      const password = this.form.value.password as string;
      const { error } = await this.supabaseService.signInWithPassword({
        email: userName,
        password,
      });

      if (error) throw error;
      this.router.navigateByUrl('/admin/dashboard');
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      this.form.reset();
      this.loading = false;
    }
  }
}
