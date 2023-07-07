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
import { Permission, TableOptions, User } from 'src/types';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  public createUser: FormGroup;
  isCreatedUser = false;
  toggleTabBtnUsers = false;
  toogleTabAddUsers = false;
  isOpenCreateUserDialog = false;
  mensage: any;
  option: any;
  listUsers: User[] = [];
  permissions: Permission[] = [];
  tableOptions: TableOptions = {
    columns: {
      name: {
        title: 'Nombre',
      },
      email: {
        title: 'Email',
      },
      permission: {
        title: 'Permisos',
        align: 'left',
        width: '250px',
      },
      created_at: {
        title: 'Fecha de registro',
        width: '200px',
      },
    },
    body: {
      permission: {
        align: 'left',
      },
    },
  };

  constructor(
    private permissionService: PermissionService,
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService
  ) {
    this.createUser = fb.group({
      name: new FormControl('', Validators.required),
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', Validators.required, Validators.email],
      permission: [''],
    });
  }

  ngOnInit() {
    this.userService.getUsers({ page: 0, limit: 40 }).then((data) => {
      this.listUsers = data;
      console.log(data);
    });

    this.permissionService
      .getPermissions({ page: 0, limit: 30 })
      .then((data) => {
        this.permissions = data;
      });
  }

  async register() {
    const registerData = this.createUser.getRawValue();
    console.log(this.createUser.get('permission').value);
    try {
      await this.authService.signUp({
        email: registerData.email,
        password: registerData.password,
        name: registerData.name,
        permissions: this.createUser.get('permission').value,
      });
      this.mensage = 'Creacion de Usuario realizado con exito';
      this.option = 'success';
    } catch (error) {
      this.mensage = error;
      this.option = 'error';
      console.log(this.mensage);
    }
    this.isCreatedUser = true;
    setTimeout(() => {
      this.isCreatedUser = false;
    }, 10000);
    this.createUser.reset();
    this.closeAdd();
  }

  closeAdd() {
    this.isOpenCreateUserDialog = false;
  }

  clickAdd() {
    this.isOpenCreateUserDialog = true;
  }

  permissionNames(permissions: Permission[]) {
    return permissions.map((i) => i.name).join(',');
  }
}
