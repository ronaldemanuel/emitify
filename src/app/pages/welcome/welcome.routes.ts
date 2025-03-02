import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

export default [
  {
    path: '',
    loadComponent: () =>
      import('./welcome.component').then((c) => c.WelcomeComponent),
  },
] as Routes;
