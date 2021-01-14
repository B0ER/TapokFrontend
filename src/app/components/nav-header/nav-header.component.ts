import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})

export class NavHeaderComponent implements OnInit {
  public isLogged: boolean = false;

  constructor(
    private readonly authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.isLogged.subscribe((isLogged) => {
      this.isLogged = isLogged;
    });
  }
}