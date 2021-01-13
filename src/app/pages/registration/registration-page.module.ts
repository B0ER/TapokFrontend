
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RegistrationPageComponent } from './registration-page.component';
import { RegistrationPageService } from './registration-page.service';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  exports: [RegistrationPageComponent],
  declarations: [RegistrationPageComponent],
  providers: [RegistrationPageService],
})
export class RegistrationPageModule { }
