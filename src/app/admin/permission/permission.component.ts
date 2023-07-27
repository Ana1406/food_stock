import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PermissionService } from 'src/app/services/permission.service';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css'],
})
export class PermissionComponent implements OnInit {
  createPermission: FormGroup;
  toggleTabBtnPermission = false;
  isOpenCreatePermissionDialog = false;
  listPermission = [];
  mensage: any;
  option: any;
  isCreatedPermission = false;
  isLoading = true;
  totalData = 0;
  pageActual = 0;
  limit = 10;
  page: number;

  tableOptions = {
    columns: {
      name: {
        title: 'Nombre',
      },
      description: {
        title: 'Description',
      },
      created_at: {
        title: 'Fecha de registro',
      },
    },
  };

  constructor(
    private fb: FormBuilder,
    private permissionService: PermissionService
  ) {
    this.createPermission = fb.group({
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit() {
    this.getPermissions();
  }

  changePage(page: number) {
    this.pageActual = page;

    this.getPermissions();
  }

  getPermissions() {
    Promise.all([
      this.permissionService.getPermissions({
        page: this.pageActual,
        limit: this.limit,
      }),
      this.permissionService.getTotalPermissions(),
    ]).then((requests) => {
      this.listPermission = requests[0];
      this.totalData = requests[1];
      this.page = Math.ceil(this.totalData / this.limit);
      this.isLoading = false;
    });
  }
  async permission() {
    const permissionData = this.createPermission.getRawValue();
    try {
      await this.permissionService.create(
        permissionData.title,
        permissionData.description
      );
      this.mensage = 'Creacion de Permiso realizado con exito';
      this.option = 'success';
    } catch (error) {
      this.mensage = error;
      this.option = 'error';
    }
    this.isCreatedPermission = true;
    setTimeout(() => {
      this.isCreatedPermission = false;
    }, 5000);
    this.createPermission.reset();
    this.closeAdd();
    this.getPermissions();
  }

  closeAdd() {
    this.isOpenCreatePermissionDialog = false;
  }

  clickPermissionAdd() {
    this.isOpenCreatePermissionDialog = true;
  }
}
