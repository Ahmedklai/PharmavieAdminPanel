import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private register: RegisterService,
    private router : Router 
  ) { }
  public errorMsg ;
  ngOnInit(): void {
  }

  SignUp(LoginForm: NgForm): void {
  
    this.register.login(LoginForm.value).subscribe(
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
