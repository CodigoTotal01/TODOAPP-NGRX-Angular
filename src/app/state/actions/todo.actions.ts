import {createAction, props} from '@ngrx/store';

// Representan eventos unicos que modificaran nuestro stado
export const agregarTodoAction = createAction(
  '[TODO] Agregar todo',
  props<{texto: string}>()
);

