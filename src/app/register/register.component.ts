import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null,
    role: null
  }
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }
  onsubmit() {
    const { username, email, password ,role} = this.form;
    console.log(username,email,password)

    this.auth.register(username, email, password,role).subscribe({
      next: (data) => {
        console.log(data)
        this.isSignUpFailed = false
        this.isSuccessful=true
      }
      })
      

}
}
