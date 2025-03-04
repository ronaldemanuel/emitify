import { Routes } from '@angular/router';

export default [
  {
    path: 'add',
    loadComponent: () =>
      import('./client.component').then((c) => c.ClientComponent),
  },
] as Routes;
