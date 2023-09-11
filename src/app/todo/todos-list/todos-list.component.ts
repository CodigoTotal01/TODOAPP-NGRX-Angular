import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../state/todo.state";
import {Todo} from "../model/todo.model";
import {filtrosValidos} from "../../state/filter/actions/filtro.actions";

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: [
  ]
})
export class TodosListComponent implements OnInit{

  todos: Todo[] = [];

  filtro: filtrosValidos = 'todos';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe(state =>  {
      this.todos = state.todo;
      this.filtro = state.filter;
    });
  }





}
