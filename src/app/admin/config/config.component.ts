import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SupabaseService } from 'src/app/supabase.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css'],
})
export class ConfigComponent {
  createUser: FormGroup | any;

  toggleTabBtnPermission = false;
  toggleTabBtnUsers = false;
  toogleTabAddUsers = false;
  isOpenCreateUserDialog = false;

  constructor(
    private fb: FormBuilder,
    private supabaseService: SupabaseService
  ) {
    this.createUser = fb.group({
      name: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', Validators.required, Validators.email],
      permission: new FormControl(null),
    });
  }

  async register() {
    const registerData = this.createUser.getRawValue();
    console.log(registerData);

    await this.supabaseService.signUp({
      email: registerData.email,
      password: registerData.password,
      options: {
        data: {
          name: registerData.name,
          permission: registerData.permission,
        },
      },
    });
    this.createUser.reset();
    this.closeAdd();
  }

  clickPermission() {
    this.toggleTabBtnPermission = true;
    this.toggleTabBtnUsers = false;
  }

  clickUsers() {
    this.toggleTabBtnPermission = false;
    this.toggleTabBtnUsers = true;
  }

  closeAdd() {
    this.isOpenCreateUserDialog = false;
  }

  clickAdd() {
    this.isOpenCreateUserDialog = true;
  }
}
