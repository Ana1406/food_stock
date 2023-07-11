import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appValueSelected]',
})
export class ValueSelectDirective implements OnInit {
  @Input()
  value: any;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.setAttribute('data-value', this.value);
  }
}
