import { Component } from '@angular/core';
import { TaskService } from '../../services/task-service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaskShortenerPipe } from '../../pipes/task-shortener-pipe';

@Component({
  selector: 'app-task-detail',
  imports: [CommonModule, TaskShortenerPipe],
  templateUrl: './task-detail.html',
  styleUrl: './task-detail.css',
})
export class TaskDetail {
  taskId!: number;
  task: any;
  amount: number = 45.6; //pipe currency example

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {
    this.route.params.subscribe(params => {
      this.taskId = +params['id'];
      this.task = taskService
        .getTasks()()
        .find(n => n.id == this.taskId);
    })
  }
}