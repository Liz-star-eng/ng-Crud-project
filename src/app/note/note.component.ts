import { Component } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
body: any = ""
title: any = ""
noteList: Array<any> = []
index:number = +1
addedNote: boolean = false
searchValue:string = ""

addNote () {
  this.addedNote = true
  this.noteList.push({
    title: this.title,
    body: this.body
  })
}


deleteNote(index: number) {
  this.noteList.splice(index, 1)
}


}
