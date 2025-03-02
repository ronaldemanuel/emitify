import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  async canActivate(): Promise<boolean> {
    const session = await this.authService.getSession();

    if (session !== null) {
      return true;
    }

    this.router.navigateByUrl('/auth/login');
    return false;
  }
}
