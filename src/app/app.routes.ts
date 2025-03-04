import { Routes } from '@angular/router';
import { BaseComponent } from './pages/layout/base/base.component';
import { AuthGuard } from './guards/auth/auth.guard';

export const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.routes') },
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/welcome/welcome.routes'),
      },
      {
        path: 'client',
        loadChildren: () => import('./pages/client/client.routes'),
      },
    ],
  },
];
