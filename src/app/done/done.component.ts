import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css'],
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

export class DoneComponent implements OnInit {
  dones: any;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.dones$.subscribe((data) => {
      console.log(data);
      this.dones = data;
    });
  }
}