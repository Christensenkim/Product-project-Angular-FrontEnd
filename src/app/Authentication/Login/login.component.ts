import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../Shared/Service/authentication.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errormessage = '';
  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });



  constructor(private formbuilder: FormBuilder,
              private router: Router,
              private authenticationService: AuthenticationService) { }

  ngOnInit(): void { }

  get userName(): string {return this.loginForm.value.userName; }
  get password(): string {return this.loginForm.value.password; }


  Login(): void {
    this.authenticationService.login(this.userName, this.password).subscribe(
      succes => {this.router.navigateByUrl('');
      },
      error => {this.errormessage = error.message; }
    );
  }
}
