import { Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  //from json file data.json
  private tasks = signal<Task[]>([]);

  //run commands below
  //npm i -g json-server
  //json-server --watch data.json
  private readonly apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) { }

  fetchTasks() {
    this.http.get<Task[]>(this.apiUrl)
      .subscribe((data) => {
        this.tasks.set(data);
      });
    console.log(this.tasks);
  }

  getTasks() {
    return this.tasks;
  }

  addTask(title: string, description: string) {
    const newTask: Task = {
      id: Date.now(),
      title: title,
      description: description,
      createdAt: new Date(),
      taskStart: new Date(),
      taskEnd: new Date(),
      isCompleted: false
    };

    this.http.post<Task>(this.apiUrl, newTask)
      .subscribe((task) => {
        this.tasks.update(tasks => [...tasks, newTask]);
      });
  }
}
