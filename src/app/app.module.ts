import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { AppEnvironmentModule } from '../environments/environment.injector';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalComponentsModule } from './components/global-components.module';
import { CartPageModule } from './pages/cart/cart-page.module';
import { LoginPageModule } from './pages/login/login-page.module';
import { ProductsPageModule } from './pages/products/products-page.module';
import { RegistrationPageModule } from './pages/registration/registration-page.module';
import { ApiInterceptor } from './shared/interceptors/api.interceptor';
import { AuthService } from './shared/services/auth.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    GlobalComponentsModule,
    AppEnvironmentModule,
    ProductsPageModule,
    CartPageModule,
    LoginPageModule,
    RegistrationPageModule
  ],
  exports: [],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptor,
    multi: true
  },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
