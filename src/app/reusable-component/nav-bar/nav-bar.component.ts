import { Component,OnInit } from '@angular/core';
import { SupabaseService } from 'src/app/supabase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})


export class NavBarComponent{

  isNavBarExpanded=false;
  sessionValidate=false;
  user:any

  constructor(private supabase: SupabaseService, private route:Router) {}

  listRoutes:any=[
    {
    section:'Administración',
    icon:'manage_accounts',
    textShort:'Admin',
    routes:[ 
      {
        route: '/admin/dashboard',
        text: 'Panel de Trabajo',
        
        icon: 'dashboard',
      },
      { 
        route: '/admin/settings',
        text: 'Configuración',
        icon: 'settings' 
      },
      { 
        route: '/admin/tables',
        text: 'Tablas', 
        icon: 'table_chart' 
      }
    ], 
    },
    {
    section:'Inventario',
    icon:'inventory',
    textShort:'Inventario',
    routes:[ 
      {
        route: 'inventory/history',
        text: 'Historia',
        icon: 'history',
      },
      { 
        route: 'inventory/products',
        text: 'Productos',
        icon: 'inventory_2' 
      }
   ]}
  ]

   async signOut(){
     await this.supabase.signOut()
     this.route.navigateByUrl('/auth/login')
  }
  


  toggleNavBar(){
    this.isNavBarExpanded=!this.isNavBarExpanded;
    console.log('holi')
  }
}
