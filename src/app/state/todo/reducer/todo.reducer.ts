import {createReducer, on} from "@ngrx/store";
import {Todo} from "../../../todo/model/todo.model";
import {
  agregarTodoAction,
  borrarTodoAction,
  editarTodoAction, limpiarCompletadosTodoAction,
  toggleAllTodoAction,
  toggleTodoAction
} from "../actions/todo.actions";
import {state} from "@angular/animations";
// Se define el estado inicial en el reducer que contiene realmente las accioones que modificarn el esatdo

const todo1 = new Todo('Vencer a Spiderman');
const todo2 = new Todo('Vencer a Thanos');
todo2.completado = true;
export const initialState: Todo[] = [todo1, todo2];

//Reducers - cambia el estado inicial de nuestro estado por uno nuevo -> luego sate
//FUncion pura
export const todoReducer = createReducer(
  initialState,
  on(agregarTodoAction, (state, action) => {
    const todo = new Todo(action.texto);
    return [...state, todo]
  }),
  on(toggleTodoAction, (state, {id}) => {
    return state.map(todoEdit => {
      if (todoEdit.id === id) {
        return {
          ...todoEdit, //clonamos propiedades
          completado: !todoEdit.completado
        }
      } else {
        return todoEdit;
      }
    });
  }),
  on(editarTodoAction, (state, action) => {
    return state.map(todoEdit => {
      if (todoEdit.id === action.id) {
        return {
          ...todoEdit,
          texto: action.texto
        }
      } else {
        return todoEdit
      }
    });
  }),
  on(borrarTodoAction, (state, {id}) => {
    return state.filter(todoEdit => todoEdit.id !== id);
  }),
  on(toggleAllTodoAction, (state, {completado}) => {
      return state.map(todoEdit => {
        return {
          ...todoEdit,
          completado
        }
      });
  }),
  on(limpiarCompletadosTodoAction, (state )=> {
    return state.filter(todoEdit => todoEdit.completado === false)
  })
);
