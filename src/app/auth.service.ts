import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable , throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  
  link = 'http://localhost:3000/user' ;
  private isloggedIn: boolean = this.getToken() != null; 

   constructor(
 
    private http: HttpClient ,
    private router :Router,
 
   ) { }
      
   login (credential) : Observable<any> { 
      
    this.isloggedIn=true;
    console.log(credential);
   return this.http.post(this.link+'/login' , credential).pipe(catchError(this.handleError));
   
 }
    signUp (credential) : Observable<any> { 
      
      credential["role"] = "admin";
      console.log(credential);
      this.isloggedIn=true;

     return this.http.post(this.link+'/create' , credential).pipe(catchError(this.handleError));
     
   }

   handleError (error : HttpErrorResponse) {
    return  throwError(error.error.message );

   }

   public getToken(): string {
  return localStorage.getItem("pahrmavie_token");
  }
  isUserLoggedIn(): boolean {
    return this.isloggedIn;
}

  public Logout(): any {
    this.isloggedIn=false;

    var x =  localStorage.removeItem("pahrmavie_token");
    }

    GoToLogin () {
      this.router.navigate(['login']);
     }

  

}
