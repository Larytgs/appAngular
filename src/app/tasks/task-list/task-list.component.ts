import { TaskService } from './../shared/task.service';
import { Task } from './../shared/task';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [] //importar o array de tarefas

  constructor(private taskService: TaskService) {}
  //vou receber um construtor da classe taskService

  ngOnInit() { //tem que implementar o método ng ou init
    this.tasks = this.taskService.getAll();
  }//quando o componente iniciar, ele vai la no service que esta cadastrado
}
