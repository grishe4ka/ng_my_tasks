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

  protected submitted = false;

  onCheckboxChange(taskId: number, event: any) {
    this.submitted = true;

    const checked = event.target.checked;
    console.log('checked = ' + checked);

    this.task = this.taskService
      .getTasks()()
      .find(n => n.id == this.taskId);

    if (this.task.isCompleted != checked) {
      console.log('if (this.task.isCompleted != checked)');
      this.task.set({
        isCompleted: checked
      });
    }

    console.log('chbx clicked');
    //alert('chbx clicked');
    this.submitted = false;
  }
}