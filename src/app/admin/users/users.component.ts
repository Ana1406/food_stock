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
  totalData = 0;
  pageActual = 0;
  limit = 10;
  page: number;

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

  changePage(page: number) {
    this.pageActual = page;

    this.getUsers();
  }

  ngOnInit() {
    this.getUsers();
    this.permissionService
      .getPermissions({ page: this.pageActual, limit: this.limit })
      .then((data) => {
        this.permissions = data;
      });
  }

  getUsers() {
    Promise.all([
      this.userService.getUsers({
        page: this.pageActual,
        limit: this.limit,
      }),
      this.userService.getTotalUsers(),
    ]).then((requests) => {
      this.listUsers = requests[0];
      this.totalData = requests[1];
      this.page = Math.ceil(this.totalData / this.limit);
    });
  }

  async register() {
    const registerData = this.createUser.getRawValue();
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
    }
    this.isCreatedUser = true;
    setTimeout(() => {
      this.isCreatedUser = false;
    }, 10000);
    this.createUser.reset();
    this.closeAdd();
    this.getUsers();
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
