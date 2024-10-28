import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Dialog } from '@angular/cdk/dialog';
import { TodoDialogComponent } from '../../components/todo-dialog/todo-dialog.component';

import { ToDo, Column } from '../../models/todo.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
    /* Animate items as they're being sorted. */
    .cdk-drop-list-dragging .cdk-drag {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }

    /* Animate an item that has been dropped. */
    .cdk-drag-animating {
      transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
    }

    /* Agrega estilos personalizados para la barra de desplazamiento */
  ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: rgba(156, 163, 175, var(--tw-bg-opacity));
      border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
      background-color: rgba(229, 231, 235, var(--tw-bg-opacity));
      border-radius: 4px;
    }

    /* Agrega un efecto hover a la barra de desplazamiento */
    ::-webkit-scrollbar-thumb:hover {
      background-color: rgba(107, 114, 128, var(--tw-bg-opacity));
    }
    `
    ]
})
export class BoardComponent implements OnInit {

  columns: Column[] = [
    {
      title: 'To Do',
      todos: [
        { id: '1', title: 'Make Dishes' },
        { id: '2', title: 'Buy Clothes' }
      ]
    },
    {
      title: 'Doing',
      todos: [
        { id: '3', title: 'Watch Angular Path in Platzi' }
      ]
    },
    {
      title: 'Done',
      todos: [
        { id: '4', title: 'Go to the Gym' }
      ]
    }
  ];

  constructor(
    private dialog: Dialog
  ) { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<ToDo[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }else{
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addColumn(){
    this.columns.push({
      title: 'New Column',
      todos: []
    });
  }

  openDialog(todo: ToDo){
    const dialogRef = this.dialog.open(TodoDialogComponent,{
      minWidth: '300px',
      maxWidth: '50%',
      data: {
        todo: todo
      }
    });
    dialogRef.closed.subscribe(output => {
      console.log(output);
    });
  }

}
