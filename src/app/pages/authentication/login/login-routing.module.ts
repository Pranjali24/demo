import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { ScannerComponent } from './scanner/scanner.component';

const routes: Routes = [
  {
    path : "",
    component : LoginComponent,
    children : [
      { path : "scan",component : ScannerComponent },
      {path:'', redirectTo:'/scan', pathMatch:'full'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
