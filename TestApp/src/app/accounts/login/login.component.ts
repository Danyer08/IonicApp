import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {
    this.buildForm();
  }

  login() {
    console.log(this.loginForm.value);
    this.router.navigate(['app/tabs']);
  }

  buildForm() {
    const regExp = '^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])([A-z0-9]){7,}$';
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.compose([Validators.required, Validators.pattern(regExp)])]
    });
  }

}
