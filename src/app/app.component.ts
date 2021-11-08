import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from './state/state.interface';
import { completeToDos, incompleteToDos } from './state/todo';
import {
  AddToDo,
  CompleteToDo,
  IncompleteToDo,
} from './state/todo/todo.actions';
import { generateToDos, ToDo } from './state/todo/todo.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  toDos: ToDo[] = generateToDos();

  ngOnInit() {}

  completeToDos: ToDo[];

  incompleteToDos: ToDo[];

  todo: ToDo;

  private _toDo: string;

  constructor(private store: Store<State>) {}

  initialize() {}

  addToDo() {
    this.todo = {
      id: this.toDos.length + 1,
      complete: false,
      task: this._toDo,
    };
    this.toDos.push(this.todo);
  }

  onAddToDoChange($event) {
    this._toDo = $event;
  }

  onCompleteToDo($event) {
    this.toDos[$event].complete = true;
  }

  onIncompleteToDo($event) {
    this.toDos[$event].complete = false;
  }
}
