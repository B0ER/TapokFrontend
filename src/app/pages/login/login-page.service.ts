import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { APP_ENV } from "src/environments/environment.injector";
import { EnvironmentType } from "src/environments/environment.type";


@Injectable()
export class LoginPageService {
  constructor(
    @Inject(APP_ENV) private readonly environment: EnvironmentType,
    private readonly httpClient: HttpClient
  ) { }

  login(email: string, password: string) {
    return this.httpClient.post(`${this.environment.apiUrl}/auth/login`, { username: email, password: password }).subscribe(response => {
      console.log('LoginPageService: login response', response);
    });
  }
}
