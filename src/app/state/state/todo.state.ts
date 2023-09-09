import {Todo} from "../../todo/model/todo.model";
import {ActionReducerMap} from "@ngrx/store";
import {todoReducer} from "../reducer/todo.reducer";

export interface AppState {
  todo: Todo [];
}

export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
  todo: todoReducer
}
