import { Component,OnInit } from '@angular/core';
import { SupabaseService } from 'src/app/supabase.service';
import { ValidationSessionService } from 'src/app/validation-session.service';
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
        route: '/dashboard',
        text: 'Panel de Trabajo',
        
        icon: 'dashboard',
      },
      { 
        route: '/settings',
        text: 'Configuración',
        icon: 'settings' 
      },
      { 
        route: '/tables',
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
        route: '/history',
        text: 'Historia',
        icon: 'history',
      },
      { 
        route: 'home/products',
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
