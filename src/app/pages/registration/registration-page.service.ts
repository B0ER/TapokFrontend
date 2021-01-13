import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { APP_ENV } from "../../../environments/environment.injector";
import { EnvironmentType } from "../../../environments/environment.type";


@Injectable()
export class RegistrationPageService {
  constructor(
    @Inject(APP_ENV) private readonly environment: EnvironmentType,
    private readonly httpClient: HttpClient
  ) { }

  registration(email: string, password: string) {
    return this.httpClient.post(`${this.environment.apiUrl}/auth/register`, { username: email, password: password }).subscribe(response => {
      console.log('RegistrationPageService: register response', response);
    });
  }
}
