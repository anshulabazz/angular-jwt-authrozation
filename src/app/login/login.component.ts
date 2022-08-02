import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  roles! :string[]
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  constructor(public auth: AuthService, public token: TokenStorageService) { }

  ngOnInit(): void {
    if (this.token.gettoken()) {
      this.isLoggedIn = true;
      this.roles = this.token.getuser().roles;
    }
  }
  onSubmit() {
    const { username, password } = this.form
    this.auth.login(username, password).subscribe(data => {
      console.log(data)
      this.token.savetoken(data.token)
      this.token.saveuser(data)
      this.isLoggedIn = true
      this.roles = this.token.getuser().role
      
      this.reloadPage();

    })
  }
  reloadPage() {
    window.location.reload()
  }
  

}
