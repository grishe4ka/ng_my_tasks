import { Component, signal } from '@angular/core';
import { TaskService } from '../../services/task-service';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-add',
  imports: [FormsModule, CommonModule],
  templateUrl: './task-add.html',
  styleUrl: './task-add.css',
})

export class TaskAdd {

  constructor(private taskService: TaskService) {}

  protected get tasks() {
    return this.taskService.getTasks();
  }

  protected newTask = signal<Partial<Task>>({
    title: ``,
    description: ``
  });

  protected submitted = false;

  protected addTask(form: any){
    this.submitted = true;

    if(form.invalid){
      console.log('Form invalid.');
      return;
    }

    const taskData = this.newTask();

    if(!taskData.title || !taskData.description) return;

    this.taskService.addTask(taskData.title,taskData.description);

    this.newTask.set({
      title: '',
      description: ''
    });
    form.resetForm();
    this.submitted = false;
  }
}
