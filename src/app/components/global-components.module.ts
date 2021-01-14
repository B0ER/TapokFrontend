import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { NavHeaderComponent } from './nav-header/nav-header.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [NavHeaderComponent],
  declarations: [NavHeaderComponent],
  providers: [],
})
export class GlobalComponentsModule { }
