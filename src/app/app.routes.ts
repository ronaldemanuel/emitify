import { Routes } from '@angular/router';
import { BaseComponent } from './pages/layout/base/base.component';

export const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.routes') },
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/welcome/welcome.routes'),
      },
    ],
  },
];
