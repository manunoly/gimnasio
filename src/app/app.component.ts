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
      console.log('AppComponent');
      if (user) {
        this.user = user;
        this.appPages = [
          { title: 'Team', url: '/team', icon: 'people' },
          { title: 'Players', url: '/players', icon: 'paper-plane' },
          { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
          { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
          { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
          { title: 'Profile', url: '/profile', icon: 'person' },
        ];
      } else {
        this.user = '';
        this.appPages = [];
      }
    });
  }
}
