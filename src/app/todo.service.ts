import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  todos: any[] = [];
  dones: string[] = [];
  
  private dataSubject = new BehaviorSubject<string[]>([]);
  public dones$: Observable<string[]> = this.dataSubject.asObservable();

onDelete(titleToDelete: any) {
  const indexToDelete = this.todos.findIndex(obj => obj.title === titleToDelete);

  if (indexToDelete !== -1) {
    // Create a new array without the element to delete
    this.todos = [...this.todos.slice(0, indexToDelete), ...this.todos.slice(indexToDelete + 1)];
  }

}
onStatusChange(titleToChange: any) {
  const indexToChange = this.todos.findIndex(obj => obj.title === titleToChange);
  if (indexToChange !== -1) {

    this.onDelete(titleToChange)
    this.updateDones(titleToChange)
  }
}
onClick(titleInput: HTMLInputElement) {
  if (titleInput.value)
  {
    this.todos.push(new TodoItem(titleInput.value, false))

    titleInput.value = ""
  }
}

getTodos()
{
  return this.todos;
}

getDones(): Observable<string[]> {
  return this.dataSubject;
}

updateDones(newData: string) {
  this.dones.push(newData)
  this.dataSubject.next(this.dones);
}

}
class TodoItem {
  title: string;
  isDone: boolean;
  constructor(theTitle: string, theIsDone: boolean) {
    this.title = theTitle;
    this.isDone = theIsDone;
  }
}