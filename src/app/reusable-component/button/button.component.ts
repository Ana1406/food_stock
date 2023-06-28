import { Component, Input } from '@angular/core';

type BackgroundColor =
  | 'bg-lime-700/50'
  | 'bg-red-500'
  | 'bg-blue-200'
  | 'bg-transparent'
  | 'bg-stone-200/50';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input()
  disabled: boolean = false;

  @Input()
  color: BackgroundColor = 'bg-lime-700/50';

  @Input()
  border: String = '';

  @Input()
  font: String = '';

  @Input()
  hover: string = '';

  get currentColor() {
    if (this.disabled) return 'bg-slate-200/50';
    return this.color;
  }
}
