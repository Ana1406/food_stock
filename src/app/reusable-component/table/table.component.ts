import { Component, Input, OnInit } from '@angular/core';
import { SupabaseService } from 'src/app/supabase.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input()
  typeOfTable: string = '';

  @Input()
  headersColumn: any[] = [];

  @Input()
  valueHeaders: any[] = [];

  @Input()
  bodyColumn: any[] = [];

  ngOnInit() {}
}
