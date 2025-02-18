import { Task } from './task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  tasks: Task[] = [ //importar o array de tarefas
    {id: 1, description: 'Tarefa 1', completed: true},
    {id: 2, description: 'Tarefa 2', completed: false},
    {id: 3, description: 'Tarefa 3', completed: false},
    {id: 4, description: 'Tarefa 4', completed: true},
    {id: 5, description: 'Tarefa 5', completed: false},
    {id: 6, description: 'Tarefa 6', completed: false},
    {id: 7, description: 'Tarefa 7', completed: false},
    {id: 8, description: 'Tarefa 8', completed: false},
    {id: 9, description: 'Tarefa 9', completed: false},
    {id: 10, description: 'Tarefa 10', completed: false},
  ];

  constructor() { }


  getAll() {
    return this.tasks;
  }

  getByID(id: number) { //ele vai no array de tarefas
    const task = this.tasks.find((value) => value.id == id);
    return task; //procurar(metodo find) a primeria tarefa q ele achar que tem esse id, é oq ele vai devolver para tela
  }

  save(task: Task) {
    if (task.id) { //verifar se tem id, se tiver entao ele entende q é uma edição
      const taskArr = this.getByID(task.id); //recupera a tarefa pelo ID
      if (taskArr) { //verifica se a tarefa foi encontrada
        taskArr.description = task.description; //vai atualizar a descrição
        taskArr.completed = task.completed; //se ele ta completa ou nao
      }
    }
     else { //caso nao tenha id, ele entende q é uma conclusao
      const lastId = this.tasks[this.tasks.length-1].id; //ele vai gerar um id, indo na ultima tarefa cadastrada
      task.id = lastId + 1; //gera um novo ID
      task.completed = false; //marca como não completada
      this.tasks.push(task); //adiciona a nova tarefa ao array
    }
  }

  delete(id: number) {
    const taskIndex = this.tasks.findIndex((value) => value.id == id); //recuperando o index da tarefa
    this.tasks.splice(taskIndex, 1); //chamando o metodo splice, para remover
  }


}



