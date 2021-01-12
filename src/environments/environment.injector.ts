import { NgModule, InjectionToken } from '@angular/core';
import { environment } from "./environment";
import { EnvironmentType } from './environment.type';

export const APP_ENV = new InjectionToken<EnvironmentType>('app.env');


@NgModule({
  providers: [{
    provide: APP_ENV,
    useValue: environment
  }],
})
export class AppEnvironmentModule { }
