import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from "../model/todo.model";
import {FormControl, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../../state/todo.state";
import {borrarTodoAction, editarTodoAction, toggleTodoAction} from "../../state/todo/actions/todo.actions";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo = new Todo("");  //Recivir informacion desde el padre

  @ViewChild('txtInputFisico') txtInputFisico!: ElementRef; //Recivir referencia local de un elemnto html

  checkField!: FormControl; //Formularios reactivos
  txtInput!: FormControl;

  editando: boolean = false;


  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {

    this.checkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    //optener valor de un checkbox
    this.checkField.valueChanges.subscribe(() => {
      this.store.dispatch(toggleTodoAction({id: this.todo.id}))
    });

    console.log(this.todo)
  }


  editar(): void {
    this.editando = true;
  }

  terminarEdicion() {
    this.editando = false;

    if(this.txtInput.invalid) return;

    if(this.txtInput.value === this.todo.texto) return;


    const editarTodo = editarTodoAction({
      id: this.todo.id,
      texto: this.txtInput.value
    })

    this.store.dispatch(editarTodo);
  }

  borrarTodo() {
    const action = borrarTodoAction({id: this.todo.id});
    this.store.dispatch(action);
  }
}
