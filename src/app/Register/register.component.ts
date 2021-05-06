import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private RegisterService: RegisterService,
    private router : Router 
  ) { }
  public errorMsg ;
  ngOnInit(): void {
  }

  SignUp(SignUpForm: NgForm): void {
    console.log(SignUpForm.value);
    this.RegisterService.signUp(SignUpForm.value).subscribe(
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
