
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginPageComponent } from './login-page.component';
import { LoginPageService } from './login-page.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [LoginPageComponent],
  declarations: [LoginPageComponent],
  providers: [LoginPageService],
})
export class LoginPageModule { }
