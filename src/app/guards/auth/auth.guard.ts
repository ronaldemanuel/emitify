import { AuthService } from '../../services/auth/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private authService: AuthService) {}

  async canActivate(): Promise<boolean> {
    const session = await this.authService.getSession();

    if (session !== null) {
      return true;
    }

    return false;
  }
}
