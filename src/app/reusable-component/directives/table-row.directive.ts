import { Directive, Input, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[appTableRow]',
})
export class TableRowDirective {
  @Input() appTableRow = '';
  element = inject(TemplateRef);
}
