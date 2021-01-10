import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { EnvironmentType } from "../../../environments/environment.type";
import { APP_ENV } from "../../../environments/environment.injector";
import { ProductType } from "./types/product.type";


@Injectable()
export class ProductsService {
  private baseUrl: string;

  constructor(
    private httpClient: HttpClient,
    @Inject(APP_ENV) env: EnvironmentType
  ) {
    this.baseUrl = env.apiUrl;
  }

  getProducts(): Observable<Array<ProductType>> {
    return this.httpClient.get<Array<ProductType>>(`${this.baseUrl}/products/`);
  }
}
