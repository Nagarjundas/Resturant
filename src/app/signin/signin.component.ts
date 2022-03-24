import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private FormBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.signupForm = this.FormBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      password: [''],
    });
  }

  //method for signup
  signup() {
    console.log(this.signupForm.value);
    this.http
      .post('http://localhost:3000/signin', this.signupForm.value)
      .subscribe(
        (res) => {
          console.log(res);
          alert("done!!!!")
        },
        (err) => {
          const newLocal = 'error found';
          alert(newLocal);
        }
      );
  }
}
