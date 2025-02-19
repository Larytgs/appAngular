import { Task } from './../shared/task';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})

export class TaskFormComponent implements OnInit {
  task: Task = new Task(); //vou ter uma tarefa, o que vou usar na tela
  title: string = 'Nova tarefa';

  constructor(
    private activatedRoute: ActivatedRoute, //minha URL que ta ativa
    private router: Router, //responsavel por fazer a navegação
    private taskService: TaskService //onde fica as regras de negocio
  ){ }

  ngOnInit() { //ele tem que identificar se é uma edição ou uma inclusao
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) { //se tem id
      this.task = this.taskService.getByID(parseInt(id)) ?? new Task(); //vai no servise recuperar a tarefa, passando pra int
      // ?? new Task(); se getByID retornar undefined, será atribuído um novo objeto Task(), evitando o erro.
      this.title = 'Alterando tarefa'
    }
  }

  onSubmit(){
    this.taskService.save(this.task); //para salvar
    this.router.navigate(['']); //redirecionar para listagem
  }
}
