import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ {
  path:'auth',
  loadChildren:()=> import ('../app/auth/auth.module').then(m =>
    m.AuthModule)
},
{path:'admin',
loadChildren:()=> import ('../app/admin/admin.module').then(m =>
  m.AdminModule)},
{path:'',redirectTo:"/auth/login",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
