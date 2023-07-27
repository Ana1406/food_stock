import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnChanges {
  @Input()
  pageActual: number;

  @Input()
  limit: number;

  @Input()
  total: number;

  @Output()
  pageChange: EventEmitter<number> = new EventEmitter();

  numberPages = [];
  pageShow = 1;

  ngOnChanges() {
    const page = this.totalPages();

    this.numberPages = Array(page)
      .fill(0)
      .map((_, index) => index + 1);
  }

  changePage(page: number) {
    this.pageChange.emit(page);
  }

  totalPages() {
    return Math.ceil(this.total / this.limit);
  }
}
