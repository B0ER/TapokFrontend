import { Component, OnInit } from '@angular/core';
import { RegistrationPageService } from './registration-page.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['registration-page.component.css']

})

export class RegistrationPageComponent implements OnInit {
  public email: string = '';
  public password: string = '';

  constructor(
    private readonly registrationPageService: RegistrationPageService
  ) { }

  ngOnInit() { }

  registration($event) {
    this.registrationPageService.registration(this.email, this.password);
  }
}
