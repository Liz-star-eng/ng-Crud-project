import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestAppService {
    toDoList: Array<any> = []

  constructor() {
    this.init()
   }
init():void {
  this.insert({name: 'buy burgar'})
  this.insert({name: 'buy coke'})
  this.insert( {name: 'buy egg pie'})
  this.insert(  {name: 'buy water'})
}

insert (toDo:{name: string}): void {
  this.toDoList.push(toDo)
}

getAlltoDoList(): any {
return this.toDoList
}

deleteToDo(index:number):void {
  this.toDoList.splice(index, 1)
}

}
