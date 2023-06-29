import { Injectable } from '@angular/core';
import { SupabaseService } from '../supabase.service';
import { Pagination } from 'src/types';
import { getQueryRange } from '../helpers/paginations';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private supabaseService: SupabaseService) {}

  getUsers(pagination: Pagination) {
    const { start, end } = getQueryRange(pagination);
    return this.supabaseService.supabase
      .from('user')
      .select('*, permission(id, name)')
      .range(start, end)
      .limit(pagination.limit);
  }
}
