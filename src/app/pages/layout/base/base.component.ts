import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { AuthService } from '../../../services/auth/auth.service';
import { User } from '@supabase/supabase-js';

@Component({
  selector: 'app-base',
  imports: [
    NzLayoutModule,
    NzIconModule,
    RouterOutlet,
    NzMenuModule,
    NzAvatarModule,
    NzDrawerModule,
    NzButtonModule,
  ],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css',
})
export class BaseComponent {
  isCollapsed = true;
  drawerVisible = false;
  loggedUser: User | undefined = undefined;

  constructor(private authService: AuthService, private router: Router) {}

  async ngOnInit() {
    const session = await this.authService.getSession();
    this.loggedUser = session?.user;
  }

  openDrawer(): void {
    this.drawerVisible = true;
  }

  closeDrawer(): void {
    this.drawerVisible = false;
  }

  logOut(): void {
    this.authService.logOut();
    this.router.navigateByUrl('/auth/login');
  }
}
