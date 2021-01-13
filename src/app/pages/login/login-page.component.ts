import { Component, OnInit } from '@angular/core';
import { LoginPageService } from './login-page.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public email: string = '';
  public password: string = '';

  constructor(private readonly loginPageService: LoginPageService) { }

  ngOnInit() { }

  login($event: Event) {
    this.loginPageService.login(this.email, this.password);
  }
}
