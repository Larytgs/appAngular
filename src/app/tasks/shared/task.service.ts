import { Task } from './task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  Tasks: Task[] = [ //importar o array de tarefas
    {id: 1, description: 'Tarefa 1', completed: false},
    {id: 2, description: 'Tarefa 2', completed: false},
    {id: 3, description: 'Tarefa 3', completed: false},
    {id: 4, description: 'Tarefa 4', completed: true},
    {id: 5, description: 'Tarefa 5', completed: false},
    {id: 6, description: 'Tarefa 6', completed: false},
    {id: 7, description: 'Tarefa 7', completed: false},
    {id: 8, description: 'Tarefa 8', completed: false},
    {id: 9, description: 'Tarefa 9', completed: false},
    {id: 10, description: 'Tarefa 10', completed: false}
  ]

  constructor() { }
}


getAll() { //para pegar todas as tarefas
  return this.tasks;
}

