import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../shared/task';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {
  @Input() //atritubo do meu componente, onde vou passar por parametro, para esse componente qual é a task, e vou conseguir reenderizar na tela
  task!: Task;

  constructor() {}

  ngOnInit(){

  }
}
