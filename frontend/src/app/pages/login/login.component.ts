import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    if (this.email && this.password) {
      // 🔒 This is where you’ll call your backend later
      console.log('Logging in with', this.email, this.password, this.rememberMe);
      
      // Navigate to dashboard after successful login
      this.router.navigate(['/dashboard']);
    }
  }
}
