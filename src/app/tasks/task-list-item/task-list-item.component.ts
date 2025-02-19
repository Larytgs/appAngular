import { TaskService } from './../shared/task.service';
import { Task } from './../shared/task';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {
  @Input() //atritubo do meu componente, onde vou passar por parametro, para esse componente qual é a task, e vou conseguir reenderizar na tela
  task!: Task;

  constructor(private taskService: TaskService) {}
  //importar ele aqui

  ngOnInit(){

  }

  remove(task: Task) {
    this.taskService.delete(task.id); //ja tem o metodo de excluir, no 'task.service.ts'... importar no constructor em cima
  }

  onCompletedCheckChange(task: Task){
    this.taskService.save(task); //ja tem o metodo de salvar, no 'task.service.ts'
  }
}
