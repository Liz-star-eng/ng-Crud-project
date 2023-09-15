import { Component, inject } from '@angular/core';
import { TestAppService } from '../services/test-app.service';

@Component({
  selector: 'app-to-do-forms',
  templateUrl: './to-do-forms.component.html',
  styleUrls: ['./to-do-forms.component.scss']
})

export class ToDoFormsComponent {
name: string = ""
tasks: Array<any> = [
  // {name: 'buy burgar'},
  // {name: 'buy coke'},
  // {name: 'buy egg pie'},
  // {name: 'buy water'}
]
isAdded: boolean = false
index = 0
  private service:  TestAppService = inject(TestAppService)

constructor(

){
  this.tasks = this.service.getAlltoDoList()
}

addTask(){
 this.isAdded = true
  this.service.insert (
    {name: this.name}
  )
}

onDelete(index: number): void {
  this.service.deleteToDo(index)
}
}
