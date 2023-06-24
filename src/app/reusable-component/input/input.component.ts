import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

type Colors= 'bg-transparent'|'bg-slate-200/50'|'bg-lime-700/50'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Input()
  placeholder: string = ''

  @Input()
  type: string = ''

  @Input()
  required: boolean = true

  @Input()
  error: boolean = false

  @Input()
  control!: FormControl;

  @Input()
  color:Colors='bg-slate-200/50';

}
