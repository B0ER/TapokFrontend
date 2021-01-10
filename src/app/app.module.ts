import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ProductsPageModule } from './pages/products/products-page.module';
import { GlobalComponentsModule } from './components/global-components.module';
import { AppEnvironmentModule } from '../environments/environment.injector';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GlobalComponentsModule,
    NgbModule,
    AppEnvironmentModule,
    ProductsPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
