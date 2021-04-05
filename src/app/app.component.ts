import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public auth: AuthService) {}
  user;

  async ngOnInit() {
    this.auth.currentUser$.subscribe((user) => {
      if (user) {
        this.user = user;
        this.appPages = [
          { title: 'Sokker Login', url: '/sokker-login', icon: 'football' },
          { title: 'Team', url: '/team', icon: 'people' },
          { title: 'Players', url: '/players', icon: 'paper-plane' },
          { title: 'Profile', url: '/profile', icon: 'person' },
        ];
      } else {
        this.user = '';
        this.appPages = [];
      }
    });
  }
}
