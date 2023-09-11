import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../../state/todo.state";
import {agregarTodoAction} from "../../state/todo/actions/todo.actions";

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent {
  // Formulario Reactivo
  txtInput: FormControl = new FormControl('', Validators.required);


  //! Para usar nuestro state
  constructor(private store: Store<AppState>) {
  }

  public agregarTodo(): void {
    if (this.txtInput.invalid) {
      return;
    }

    this.store.dispatch(agregarTodoAction({texto: this.txtInput.value}));

    this.txtInput.setValue("");

  }

}
