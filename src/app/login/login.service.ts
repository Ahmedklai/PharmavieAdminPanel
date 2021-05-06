import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable , throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
     return this.http.post(this.link+'/create' , credential).pipe(catchError(this.handleError));
     
   }

   handleError (error : HttpErrorResponse) {
    return  throwError(error.error.message );

   }

   public getToken(): string {
  return localStorage.getItem("pahrmavie_token");
  }

  

}
