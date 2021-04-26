import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 private  products : Product[] ;
 link = 'http://localhost:3000/products/getAll' ;
 link2 = 'http://localhost:3000/products/add' ;
 link3 = 'http://localhost:3000/products/remove' ;
  constructor(

   private http: HttpClient ,
   private router :Router,

  ) { }
     
   getProducts () : Observable<Product[]> { 
     
    return this.http.get<Product[]> (this.link) ;
  
  }

  addProduct (product : Product) : Observable<any> { 
     console.log(product);
    return this.http.post(this.link2 , product) ;
  
  }
  removeProduct (id : String) : Observable<any> { 
    console.log(id);
   return this.http.post(this.link3 , {"_id":id}) ;
 
 }

 goToForm () {
  this.router.navigate(['form']);
 }

}
