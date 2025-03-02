import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export default [
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((c) => c.LoginComponent),
  },
] as Routes;
