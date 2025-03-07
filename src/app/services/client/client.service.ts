import { Injectable } from '@angular/core';
import { DatabaseService } from '../database/database.service';
import { Client } from '../../models/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService extends DatabaseService {
  constructor() {
    super();
  }

  async addClients(clients: Client[]) {
    console.log('clients', clients);

    const { data: createdClients } = await this.supabase
      .from('clients')
      .insert(clients);

    return createdClients;
  }

  async getClientsByUserId(userId: string): Promise<[] | Client[]> {
    const { data: clients } = await this.supabase
      .from('clients')
      .select('name')
      .eq('user_id', userId);

    return clients || [];
  }
}
