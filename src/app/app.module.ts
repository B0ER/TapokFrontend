import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppEnvironmentModule } from '../environments/environment.injector';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalComponentsModule } from './components/global-components.module';
import { CartPageModule } from './pages/cart/cart-page.module';
import { LoginPageModule } from './pages/login/login-page.module';
import { ProductsPageModule } from './pages/products/products-page.module';
import { RegistrationPageModule } from './pages/registration/registration-page.module';
import { ApiInterceptor } from './shared/interceptors/api.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
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
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
