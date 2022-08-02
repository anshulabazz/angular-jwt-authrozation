import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  constructor(public token: TokenStorageService) { }
  ngOnInit() {
    this.isLoggedIn = !!this.token.gettoken();
    if (this.isLoggedIn) {
      const user = this.token.getuser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN,admin');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR,moderator');
      this.username = user.username;
    }
  }
  logout(): void {
    this.token.signout();
    window.location.reload();
  }
}
