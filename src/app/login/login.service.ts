import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  link = 'http://localhost:3000/user' ;
 
   constructor(
 
    private http: HttpClient ,
    private router :Router,
 
   ) { }
      
    signUp (credential) : Observable<any> { 
      
      credential["role"] = "admin";
      console.log(credential);
     return this.http.post(this.link+'/create' , credential) ;
     
   }

   public getToken(): string {
  return localStorage.getItem("pahrmavie_token");
  }

  

}
