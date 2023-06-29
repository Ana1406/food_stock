import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { PermissionService } from 'src/app/services/permission.service';
import { UserService } from 'src/app/services/user.service';
import { SupabaseService } from 'src/app/supabase.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  createUser: FormGroup | any;

  toggleTabBtnUsers = false;
  toogleTabAddUsers = false;
  isOpenCreateUserDialog = false;
  listUsers: any[] = [];

  constructor(
    private permissionService: PermissionService,
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService
  ) {
    this.createUser = fb.group({
      name: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', Validators.required, Validators.email],
      permission: new FormControl(null),
    });
  }

  ngOnInit() {
    this.userService.getUsers({ page: 0, limit: 20 }).then((data) => {
      console.log(data);
      data.data?.forEach((infoUser, index) => {
        const objectUser = {
          name: infoUser['user_name'],
          email: infoUser['email'],
          permissions: infoUser['permission'],
          register: infoUser['created_id'],
        };
        this.listUsers.push(objectUser);
      });
    });

    this.permissionService
      .getPermissions({ page: 0, limit: 10 })
      .then((data) => {
        data.data?.forEach((infoUserPermission) => {
          const infoPermission = infoUserPermission[''];
        });
      });
  }

  async register() {
    const registerData = this.createUser.getRawValue();

    await this.authService.signUp({
      email: registerData.email,
      password: registerData.password,
      name: registerData.name,
      permissions: [1],
      // permissions: registerData.permission,
    });
    this.createUser.reset();
    this.closeAdd();
  }

  closeAdd() {
    this.isOpenCreateUserDialog = false;
  }

  clickAdd() {
    this.isOpenCreateUserDialog = true;
  }
}
