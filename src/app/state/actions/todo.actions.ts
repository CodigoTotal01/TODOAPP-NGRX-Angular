import {createAction, props} from '@ngrx/store';

// Representan eventos unicos que modificaran nuestro stado
export const agregarTodoAction = createAction(
  '[TODO] Agregar todo',
  props<{texto: string}>()
);

export const toggleTodoAction = createAction(
  '[TODO] TOGGLE TODO',
  props<{id: number}>()
);


export const editarTodoAction = createAction(
  '[TODO] EDITAR TODO',
  props<{id: number, texto: string}>()
);
