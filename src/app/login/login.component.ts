import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Login} from '../model/login';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  error = '';
  username  = '';
  password = '';
  loginObject: Login;
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {this.router.navigateByUrl('/admin', {skipLocationChange: true}); }

    this.username  = '';
    this.password = '';
  }

  login(): void {
    this.loginObject = this.loginForm.value;
    if (!this.auth.isAuthenticated()) {
      this.auth.login(this.loginObject)
        .then(result => {
          const token = JSON.parse(JSON.stringify(result));
          this.auth.setToken(token.token);
          console.log(result);
          // alert(token.token);
          this.router.navigateByUrl('/admin', {skipLocationChange: true});
        })
        .catch(error => {
          console.log(error);
          this.router.navigateByUrl('/login', {skipLocationChange: true});
        });

      // alert(token);
      // console.log(token);
      // console.log(JSON.stringify(token));
    } else {
      this.router.navigateByUrl('/admin', {skipLocationChange: true});
    }
    // console.log(this.loginForm);
    // this.username = this.loginObject.username;
    // this.password = this.loginObject.password;
    // alert(this.username);
    // this.router.navigateByUrl('/admin', {skipLocationChange: true});
  }


  navigate(path) {
    this.router.navigate(['/', 'admin'],
      {relativeTo: this.route});
  }

}
