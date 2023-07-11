import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { Pagination, Permission } from 'src/types';
import { getQueryRange } from '../helpers/paginations';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  constructor(private supabaseService: SupabaseService) {}

  async getPermissions(pagination: Pagination) {
    const { start, end } = getQueryRange(pagination);
    const { data, error } = await this.supabaseService.supabase
      .from('permission')
      .select('*')
      .range(start, end)
      .limit(pagination.limit);

    if (error) throw new Error(error.message);

    return data as Permission[];
  }

  create(name: string, description: string) {
    return this.supabaseService.supabase.from('permission').insert({
      name,
      description,
    });
  }
}
