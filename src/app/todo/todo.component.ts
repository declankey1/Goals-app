import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})

export class TodoComponent {
todos: any[] = [];

constructor(private todoService: TodoService) {}

  onDelete(titleToDelete: any) {
    this.todoService.onDelete(titleToDelete);
    this.todos = this.todoService.getTodos();
  }
  onStatusChange(titleToChange: any) {
    this.todoService.onStatusChange(titleToChange);
    this.todos = this.todoService.getTodos();
  }
  onClick(titleInput: HTMLInputElement) {
    this.todoService.onClick(titleInput);
    this.todos = this.todoService.getTodos();
  }
}
