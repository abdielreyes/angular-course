import { Component, OnInit } from '@angular/core';
import { Todo } from './todo-list.module';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  description: string;
  constructor() {
    this.todos = [];
    var t = new Todo('test todo');
    this.todos.push(t);
  }
  ngOnInit(): void {}
  createTodo(): void {
    var t = new Todo(this.description);
    console.log(t);
    this.todos.push(t);
  }
  deleteTodo(id: string): void {
    this.todos = this.todos.filter((item) => {
      return item.id != id;
    });
  }
}
