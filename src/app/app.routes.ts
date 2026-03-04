import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { TaskDetail } from './pages/task-detail/task-detail';
import { Tutorial } from './pages/tutorial/tutorial';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'tutorial', component: Tutorial},
    {path: 'task/:id', component: TaskDetail},
];