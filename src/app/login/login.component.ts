import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private FormBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.FormBuilder.group({
      email: [''],
      password: [''],
    });
  }

  login() {
    console.log(this.loginForm.value);
    this.http.get<any>('http://localhost:3000/signin').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return (
            a.email === this.loginForm.value.email &&
            a.password === this.loginForm.value.password
          );
        });

        if (user) {
          alert('Login successfull');
          this.loginForm.reset();
          this.router.navigate(['list']);
        } else {
          alert('Login details not found😒');
        }
      },
      (err) => {
        alert('this error is from the server side');
      }
    );
  }
}
