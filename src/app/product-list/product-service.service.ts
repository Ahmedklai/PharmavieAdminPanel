import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { LoginService } from '../login/login.service';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 private  products : Product[] ;
 link = 'http://localhost:3000/products' ;

  constructor(
   private loginService : LoginService ,
   private http: HttpClient ,
   private router :Router,

  ) { }
    
   token = this.loginService.getToken()
   getProducts () : Observable<Product[]> { 
   
 
    return this.http.get<Product[]> (this.link+"/getAll" , {headers:{"authorization": "Bearer " +this.token}}) ;
   
  }
  getProductsById (id : String) : Observable<any > { 
     
    return this.http.get(this.link+"/get"+id , {headers:{"authorization": "Bearer " +this.token}}) ;
    
  }

  addProduct (product : Product) : Observable<any> { 
     console.log(product);
    return this.http.post(this.link+"/add", product , {headers:{"authorization": "Bearer " +this.token}}) ;
  
  }
  updateProduct (product : Product) : Observable<any> { 
   
   return this.http.post(this.link+"/update", product , {headers:{"authorization": "Bearer " +this.token}}) ;
 
 }
  removeProduct (id : String) : Observable<any> { 
    console.log(id);
   return this.http.delete(this.link+"/remove/"+id , {headers:{"authorization": "Bearer " +this.token}}) ;
 
 }

 goToForm () {
  this.router.navigate(['form']);
 }

}
