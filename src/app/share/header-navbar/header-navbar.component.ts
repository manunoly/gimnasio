import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.scss'],
})
export class HeaderNavbarComponent implements OnInit {

  @Input() start = true;
  @Input() end = true;
  login = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.auth.currentUser$.subscribe(user => {
      if (user) {
        this.login = true;
      }
      else {
        this.start = this.start;
        this.login = false;
        this.end = false;
      }
    })
  }

  goTo() {
    const url = this.login ? 'home' : 'login';
    this.router.navigateByUrl(url);
  }
}
