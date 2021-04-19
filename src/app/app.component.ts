import { Component } from '@angular/core';

import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Rukshan's Todos";

  todoValue: string;
  list: Todo[];

  ngOnInit() {
    this.todoValue = "";
    this.list = [];
  }

  addTodo() {
    if(this.todoValue != "") {
      const newTodo: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false
      };
      this.list.push(newTodo);
    }
    this.todoValue = "";
  }

  deleteTodo(id: number) {
    this.list = this.list.filter(todo => todo.id!==id);
  }
}
