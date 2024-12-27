import { Component, Input, OnInit } from '@angular/core';
import { Itodos } from '../../modules/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  @Input()  getTodoArray !:Array<Itodos>

  ngOnInit(): void {
  }

}
function Inpput(): (target: TodoListComponent, propertyKey: "ngOnInit", descriptor: TypedPropertyDescriptor<() => void>) => void | TypedPropertyDescriptor<() => void> {
  throw new Error('Function not implemented.');
}

