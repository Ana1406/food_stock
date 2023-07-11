import { Component, Input } from '@angular/core';
import { SPINNER_OPTIONS } from 'src/app/constants/spinner';
import { SpinnerSize } from 'src/types';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent {
  @Input()
  size: SpinnerSize = 'medium';

  spinnerOptions = SPINNER_OPTIONS;
}
