import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  formPassword: FormGroup | any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.formPassword = fb.group({
      email: ['', Validators.required, Validators.email],
    });
  }

  ngOnInit() {}

  async forgotPasswordForm() {
    const email = this.formPassword.getRawValue().email;
    console.log(email);
    const { error } = await this.authService.forgotPassword(email);
    if (error) {
      console.error('Error al enviar correo', error.message);
    } else {
      console.log('Correo Enviado');
    }
    this.formPassword.reset();
    this.router.navigateByUrl('/auth/login');
    //console.log(this.form.password)
  }
}
