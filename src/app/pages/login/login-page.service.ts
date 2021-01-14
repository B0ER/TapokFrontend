import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { APP_ENV } from "../../../environments/environment.injector";
import { EnvironmentType } from "../../../environments/environment.type";


@Injectable()
export class LoginPageService {
  constructor(
    @Inject(APP_ENV) private readonly environment: EnvironmentType,
    private readonly httpClient: HttpClient
  ) { }
}
