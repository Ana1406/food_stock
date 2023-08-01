import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TagColor, TagBackgroundColor } from 'src/types';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css'],
})
export class TagComponent {
  @Input()
  color: TagColor = 'slate';

  @Input()
  close = false;

  @Output()
  closeClick = new EventEmitter();

  TagBackgroundColor = TagBackgroundColor;

  onCloseClick() {
    this.closeClick.emit();
  }
}
