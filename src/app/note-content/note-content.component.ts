import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-content',
  templateUrl: './note-content.component.html',
  styleUrls: ['./note-content.component.scss']
})
export class NoteContentComponent {

  @Input()
  note:any = {}
  @Input()
  index = -1

  @Output()
  delete: EventEmitter<number> = new EventEmitter<number>();

  Delete(){
    this.delete.emit(this.index)
  }
}
