import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginPageService } from './login-page.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public email: string = '';
  public password: string = '';

  constructor(
    private readonly loginPageService: LoginPageService,
    private readonly authService: AuthService,
    private readonly router: Router
    ) { }

  ngOnInit() { }

  login($event: Event) {
    this.authService.login(this.email, this.password).subscribe(() => {
      this.router.navigate(['products']);
    });
  }
}
