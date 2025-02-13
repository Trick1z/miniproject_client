import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Icons'
    },
    children: [
      {
        path: '',
        redirectTo: 'to-do-list',
        pathMatch: 'full'
      },
      {
        path: 'to-do-list',
        loadComponent: () => import('./to-do-list/to-do-list.component').then(m => m.ToDoListComponent),
        data: {
          title: 'to-do-list'
        }
      },
      {
        path: 'task-history',
        loadComponent: () => import('./task-history/task-history.component').then(m => m.TaskHistoryComponent),
        data: {
          title: 'task-history'
        }
      },
      
    ]
  }
];
