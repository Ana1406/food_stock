import {
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';
import { TableRowDirective } from 'src/app/reusable-component/directives/table-row.directive';
import { TableOptions } from 'src/types';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent<TItem extends object> implements OnInit {
  @ContentChildren(TableRowDirective)
  tableRows?: QueryList<TableRowDirective>;

  @Input()
  options!: TableOptions;

  @Input()
  data: TItem[] = [];

  get headers() {
    return Object.keys(this.options.columns);
  }

  ngOnInit() {}

  findRow(columnName: string) {
    const column = this.tableRows?.find((i) => i.appTableRow === columnName);
    if (column) return column.element;
    return null;
  }

  rowKeys(row: any) {
    return new Set([...Object.keys(row), ...this.headers]);
  }
}
