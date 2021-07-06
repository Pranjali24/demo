import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ScannerComponent } from './scanner/scanner.component';


@NgModule({
  declarations: [LoginComponent, ScannerComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  bootstrap : [LoginComponent]
})

export class LoginModule { }
