import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  name = '';
    email = '';
    password = '';
    confirmPassword = '';

    constructor(private router: Router) {}

    onSignup() {
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }

      // You can store in localStorage or send to API here
      console.log('Signup Successful:', this.name, this.email);
      alert('Account created!');
      this.router.navigate(['/login']);
    }

}
