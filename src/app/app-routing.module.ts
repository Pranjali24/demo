import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  // {path:'', redirectTo:'/index', pathMatch:'full'},

  {
    path : "login",
    loadChildren: () => import('./pages/authentication/login/login.module')
    .then(m => m.LoginModule)
  },
  {
    path : "",
    loadChildren: () => import('./pages/main/main.module')
    .then(m => m.MainModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
