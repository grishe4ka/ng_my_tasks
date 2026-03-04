import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header,Footer,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

    handleSubscribe() {
    console.log('subscribe clicked');
    alert('subscribe clicked');
  }
    
  title = "Hello from my web site";

  // if local data
  /*
  protected dateStart_1 = new Date(2026, 4, 1);
  protected dateEnd_1 = new Date(2026, 4, 2);
  protected dateStart_2 = new Date(2026, 4, 5);
  protected dateEnd_2 = new Date(2026, 4, 10);

  protected readonly tasks = signal<Task[]>([
    {
      id: 1,
      title: "task 1",
      description: "task 1 description",
      createdAt: new Date(),
      taskStart: new Date(),// this.dateStart_1,
      taskEnd: new Date()// this.dateEnd_1 
    },
    {
      id: 2,
      title: "task 2",
      description: "task 2 description",
      createdAt: new Date(),
      taskStart: new Date(),// this.dateStart_2,
      taskEnd: new Date() // this.dateEnd_2 
    }
  ]);
  */
}
