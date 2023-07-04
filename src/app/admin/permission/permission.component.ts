import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PermissionService } from 'src/app/services/permission.service';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css'],
})
export class PermissionComponent implements OnInit {
  createPermission: FormGroup | any;
  toggleTabBtnPermission = false;
  isOpenCreatePermissionDialog = false;
  listPermission: any[] = [];

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
    this.permissionService
      .getPermissions({ page: 0, limit: 10 })
      .then((data) => {
        data.data?.forEach((infoPermission, index) => {
          const objectPermission = {
            name: infoPermission['name'],
            description: infoPermission['description'],
            created_at: infoPermission['created_at'],
          };
          this.listPermission.push(objectPermission);
        });
      });
  }

  async permission() {
    const permissionData = this.createPermission.getRawValue();
    await this.permissionService.create(
      permissionData.title,
      permissionData.description
    );

    this.createPermission.reset();
    this.closeAdd();
  }

  closeAdd() {
    this.isOpenCreatePermissionDialog = false;
  }

  clickPermissionAdd() {
    this.isOpenCreatePermissionDialog = true;
  }
}
