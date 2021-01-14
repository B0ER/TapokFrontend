import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegistrationPageService } from './registration-page.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['registration-page.component.css']

})

export class RegistrationPageComponent implements OnInit {
  public email: string = '';
  public password: string = '';
  public passwordRepeat: string = '';

  constructor(
    private readonly registrationPageService: RegistrationPageService,
    private readonly toastr: ToastrService,
    private readonly router: Router
  ) { }

  ngOnInit() { }

  registration($event) {
    this.registrationPageService.registration(this.email, this.password).subscribe(response => {
      this.toastr.show('Registration is success!');
      
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);
    });
  }
}
