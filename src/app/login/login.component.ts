import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private LoginService: LoginService,
    private router : Router 
  ) { }
  public errorMsg ;
  ngOnInit(): void {
  }

  SignUp(SignUpForm: NgForm): void {
    console.log(SignUpForm.value);
    this.LoginService.signUp(SignUpForm.value).subscribe(
      (response) => {
        const token = response.accessToken ;
        localStorage.setItem('pahrmavie_token' ,token) ;
        console.log(token);
        this.router.navigate(['home/productList']);
      },
      (error) => {
       this.errorMsg = error ;
       console.log(this.errorMsg);
      }
    )
   }

}
