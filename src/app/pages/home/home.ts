import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TaskAdd } from '../../components/task-add/task-add';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, RouterLink, TaskAdd],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
    constructor(private taskService: TaskService) {}
  
  protected get tasks() {
    return this.taskService.getTasks();
  }

  showAlert() { /*alert('h1 clicked')*/ };

  showLogOver() { console.log('h1 mouse over') }

  ngOnInit() {
    this.taskService.fetchTasks();
  }

}
