import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../state/todo.state";
import {toggleAllTodoAction} from "../state/todo/actions/todo.actions";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [
  ]
})
export class TodoComponent {

  completado = false;

  constructor(private store: Store<AppState>) {
  }

  toggleAll() {
    this.completado = !this.completado;

    const action = toggleAllTodoAction({completado: this.completado});
    this.store.dispatch(action);
  }
}
