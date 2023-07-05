import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent {
  @Input()
  control!: FormControl;

  optionsSelect = [
    {
      value: 'null',
      option: 'Seleccionar tipo de Permisos',
    },
    {
      value: 'admin',
      option: 'Administrador',
    },
    {
      value: 'visual',
      option: 'Usuario "Visualización"',
    },
    {
      value: 'editor',
      option: 'Usuario "Edición"',
    },
  ];
}
