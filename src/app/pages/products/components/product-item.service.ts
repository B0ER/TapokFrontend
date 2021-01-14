import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { APP_ENV } from "../../../../environments/environment.injector";
import { EnvironmentType } from "../../../../environments/environment.type";


@Injectable()
export class ProductItemService {
  constructor(
    @Inject(APP_ENV) private readonly environment: EnvironmentType,
    private readonly httpClient: HttpClient
  ) {}

  addToCart(productId: string) {
    return this.httpClient.put(`${this.environment.apiUrl}/cart/${productId}`, {});
  }
}