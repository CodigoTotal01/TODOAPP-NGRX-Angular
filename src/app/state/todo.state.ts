import {Todo} from "../todo/model/todo.model";
import {ActionReducerMap} from "@ngrx/store";
import {todoReducer} from "./todo/reducer/todo.reducer";
import {filterReducer} from "./filter/reducer/filtro.reducer";
import {filtrosValidos} from "./filter/actions/filtro.actions";

export interface AppState {
  todo: Todo [];
  filter: filtrosValidos
}
//Permitira agregar muchos reducers - action reducerMap
export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
  todo: todoReducer,
  filter: filterReducer
}
