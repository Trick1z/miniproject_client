import { Routes } from '@angular/router';
// import routes from '../../views/miniproject/chatroom/routes';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Icons',
    },
    children: [
      {
        path: '',
        redirectTo: 'to-do-list',
        pathMatch: 'full',
      },
      {
        path: 'to-do-list',
        loadComponent: () =>
          import('./to-do-list/to-do-list.component').then(
            (m) => m.ToDoListComponent
          ),
        data: {
          title: 'to-do-list',
        },
      },
      {
        path: 'task-history',
        loadComponent: () =>
          import('./task-history/task-history.component').then(
            (m) => m.TaskHistoryComponent
          ),
        data: {
          title: 'task-history',
        },
      },
      {
        path: 'calculator',
        loadComponent: () =>
          import('./calculator/calculator.component').then(
            (m) => m.CalculatorComponent
          ),
        data: {
          title: 'calculator',
        },
      },
      {
        path: 'weather',
        loadComponent: () =>
          import('./weather/weather.component').then((m) => m.WeatherComponent),
        data: {
          title: 'weather',
        },
      },
      {
        path: 'exchange',
        loadComponent: () =>
          import('./exchange/exchange.component').then(
            (m) => m.ExchangeComponent
          ),
        data: {
          title: 'exchange',
        },
      },
      {
        path: 'room',
        loadChildren: () =>
          import('../../views/miniproject/chatroom/routes').then(
            (m) => m.routes
          ),
      },
      {
        path: 'guest-number',
        loadComponent: () =>
          import('./guest-number/guest-number.component').then(
            (m) => m.GuestNumberComponent
          ),
        data: {
          title: 'guest number',
        },
      },
    ],
  },
];
