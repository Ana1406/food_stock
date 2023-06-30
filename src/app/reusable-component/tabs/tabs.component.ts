import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  @Input()
  tabs: any = [];

  @Input()
  functionTab: string[] = [];

  @Input()
  valueToggle: string[] = [];

  tabOptions = [];

  constructor() {}

  ngOnInit(): void {
    this.tabOptions = this.tabs.map((i: any) => ({ ...i, isActive: false }));
  }
}
