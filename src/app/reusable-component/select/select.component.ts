import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PermissionService } from 'src/app/services/permission.service';
import { Permission } from 'src/types';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  optionsSelect = [];
  isOpenSelect = false;

  @Input()
  control!: FormControl;

  @Input()
  options: Permission;

  @Input()
  optionsSelected = [];

  @Input()
  name = '';

  constructor(private permissionService: PermissionService) {}

  ngOnInit() {
    this.optionsSelect.push(this.options.name);
  }

  openSelect() {
    this.isOpenSelect = this.optionsSelected.length > 0 ? false : true;
  }
}
