import { Component, OnInit } from '@angular/core';
import { Itodos } from '../../modules/todo';

@Component({
  selector: 'app-todo-dash-boared',
  templateUrl: './todo-dash-boared.component.html',
  styleUrls: ['./todo-dash-boared.component.scss']
})
export class TodoDashBoaredComponent implements OnInit {

  todoArray:Array<Itodos>=[
    // {
    //   todoItem:"html 5",
    //   todoId:"1234"
    // }
  ]

  constructor() { }

  ngOnInit(): void {
  }


  sendObj(obj:Itodos){
    this.todoArray.push(obj);
  }
}
