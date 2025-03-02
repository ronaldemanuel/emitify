import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Database } from '../../../../db/supabase';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  protected supabase: SupabaseClient<Database>;

  constructor() {
    this.supabase = createClient<Database>(
      environment.apiUrl,
      environment.apiKey
    );
  }
}
