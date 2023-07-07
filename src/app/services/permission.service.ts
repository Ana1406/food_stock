import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { Pagination } from 'src/types';
import { getQueryRange } from '../helpers/paginations';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  constructor(private supabaseService: SupabaseService) {}

  getPermissions(pagination: Pagination) {
    const { start, end } = getQueryRange(pagination);
    return this.supabaseService.supabase
      .from('permission')
      .select('*')
      .range(start, end)
      .limit(pagination.limit);
  }

  create(name: string, description: string) {
    return this.supabaseService.supabase.from('permission').insert({
      name,
      description,
    });
  }
}
