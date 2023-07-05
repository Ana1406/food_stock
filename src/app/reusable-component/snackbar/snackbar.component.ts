import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
})
export class SnackbarComponent implements OnInit {
  @Input()
  background = '';

  @Input()
  mensageOption = '';

  @Input()
  optionsMensage = {
    title: '',
    description: '',
  };

  ngOnInit() {
    if (this.background === 'error') {
      this.optionsMensage.title = 'Error';
    } else if (this.background === 'success') {
      this.optionsMensage.title = 'Proceso Correcto';
    }
  }
}
