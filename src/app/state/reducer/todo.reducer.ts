import {createReducer, on} from "@ngrx/store";
import {Todo} from "../../todo/model/todo.model";
import {agregarTodoAction} from "../actions/todo.actions";

export const initialState: Todo[] = [];

//Reducers - cambia el estado inicial de nuestro estado por uno nuevo -> luego sate

export const todoReducer = createReducer(
  initialState,
  on(agregarTodoAction, (state, action) => {
    const todo = new Todo(action.texto);
    return [...state, todo ]
  })

);
