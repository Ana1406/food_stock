import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent<T extends object> {
  optionsSelect = [];
  isOpenSelect = false;

  @Input()
  control: FormControl;

  @Input()
  options: T[];

  @Input()
  placeholder = '';

  @Input()
  optionsSelected = [];

  @Input()
  labelKey = '';

  @Input()
  multiple = false;

  get selectedLabels() {
    if (this.control.value?.length === 0 || this.control.value === '')
      return this.placeholder;

    if (this.multiple && typeof this.control.value === 'object')
      return this.control.value.map((i) => i[this.labelKey]).join(',');

    return this.control.value;
  }

  openSelect() {
    this.isOpenSelect = !this.isOpenSelect;
  }
}
