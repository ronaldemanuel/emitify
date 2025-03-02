import { Injectable } from '@angular/core';
import { DatabaseService } from '../database/database.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends DatabaseService {
  constructor() {
    super();
  }

  async getSession() {
    const session = (await this.supabase.auth.getSession()).data.session;
    return session;
  }

  async submitLogin(email: string, password: string) {
    const auth = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });

    return auth.data.user;
  }

  async logOut() {
    await this.supabase.auth.signOut();
  }
}
