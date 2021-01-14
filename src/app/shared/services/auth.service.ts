import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { APP_ENV } from "../../../environments/environment.injector";
import { EnvironmentType } from "../../../environments/environment.type";

import { UserType } from "../types/user.type";


@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly currentUserSubject: BehaviorSubject<UserType>;
  public readonly currentUser: Observable<UserType>;

  private readonly isLoggedSubject: BehaviorSubject<boolean>;
  public readonly isLogged: Observable<boolean>;

  constructor(
    @Inject(APP_ENV) private readonly environment: EnvironmentType,
    private readonly httpClient: HttpClient
  ) {
    this.currentUserSubject = new BehaviorSubject<UserType>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

    this.isLoggedSubject = new BehaviorSubject(localStorage.getItem('isLogged') === 'true');
    this.isLogged = this.isLoggedSubject.asObservable();
  }

  login(email: string, password: string): Observable<void> {
    return this.httpClient.post<{ token: string }>(`${this.environment.apiUrl}/auth/login`, { username: email, password: password }).pipe(map(response => {
      localStorage.setItem('currentUser', JSON.stringify({ token: response.token }));
      localStorage.setItem('isLogged', "true");
      this.currentUserSubject.next({ token: response.token });
      this.isLoggedSubject.next(true);
    }));
  }
}
