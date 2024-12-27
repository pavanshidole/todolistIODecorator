import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Itodos } from '../../modules/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
  .replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0, 
          v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}

  @ViewChild('todoitem') todoitem!:ElementRef

  @Output() sendObjParent :EventEmitter<Itodos>= new EventEmitter<Itodos>()
  AddTodo(){

    if(this.validInput()){

      let newTodo:Itodos={
        todoItem:this.todoitem.nativeElement.value,
        todoId:this.uuid(),
      }
  
      this.todoitem.nativeElement.value='';
      this.sendObjParent.emit(newTodo);

    }
  }

  validInput():boolean{
    return this.todoitem.nativeElement.value.trim() !== '';
  }
}
