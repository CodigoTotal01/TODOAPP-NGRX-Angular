import {createAction, props} from '@ngrx/store';
import {filtrosValidos} from "../../filter/actions/filtro.actions";

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


export const borrarTodoAction = createAction(
  '[TODO] Borrar TODO',
  props<{id: number}>()
);


export const toggleAllTodoAction = createAction(
  '[TODO] TOGGLE ALL TODO',
  props<{completado: boolean}>()
);


export const limpiarCompletadosTodoAction = createAction(
  '[Filter] LIMPIAR FILTRO COMPLETADOS',
);
