import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { Pagination, User } from 'src/types';
import { getQueryRange } from '../helpers/paginations';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private supabaseService: SupabaseService) {}

  async getUsers(pagination: Pagination): Promise<User[]> {
    const { start, end } = getQueryRange(pagination);
    const { data, error } = await this.supabaseService.supabase
      .from('user')
      .select('*, permission(id, name)')
      .range(start, end)
      .limit(pagination.limit);

    if (error) throw new Error(error.message);
    return data as User[];
  }
}
