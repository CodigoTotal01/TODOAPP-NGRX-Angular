import {Component, OnInit} from '@angular/core';
import * as fromFiltro from '../../state/filter/actions/filtro.actions'
import {Store} from "@ngrx/store";
import {AppState} from "../../state/todo.state";
import {Todo} from "../model/todo.model";
import {limpiarCompletadosTodoAction} from "../../state/todo/actions/todo.actions";
@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: [
  ]
})
export class TodoFooterComponent implements OnInit{

  pendientes: number = 0;

  filtrosValidos: fromFiltro.filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual: fromFiltro.filtrosValidos = 'todos';

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    //Que locaso literela puedo escuchar en todo momento cuando el estao cambia
    this.store.subscribe(state => {
      this.constarPendientes(state.todo)
      this.filtroActual = state.filter;
    })
  }


  cambiarFiltro(filtro: fromFiltro.filtrosValidos) {
      const action =  fromFiltro.setFiltroAction({filtro});
      this.store.dispatch(action);
  }

  constarPendientes(todos: Todo[]){
    this.pendientes = todos.filter(todo => !todo.completado).length;
  }


  limpiarListaCompletados() {
    const action  = limpiarCompletadosTodoAction();
    this.store.dispatch(action)
  }
}
