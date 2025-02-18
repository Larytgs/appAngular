import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../shared/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})

export class TaskFormComponent implements OnInit {
  task: Task = new Task(); //vou ter uma tarfa, o que vou usar na tela
  title: string = 'Nova tarefa';

  constructor(
    private activatedRoute: ActivatedRoute, //minha URL que ta ativa
    private router: Router, //responsavel por fazer a navegação
    private taskService: TaskService //onde fica as regras de negocio
  ){ }

  ngOnInit() { //ele tem que identificar se é uma edição ou uma inclusao
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) { //se tem id
      this.task = this.taskService.getById(parseInt(id)); //vai no servise recuperar a tarefa, passando pra int
      this.title = 'Alterando tarefa'
    }
  }

  onSubmit(){

  }
}
