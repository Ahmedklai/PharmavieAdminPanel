import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterService } from './auth.service';
import { Order } from './order';
import { Pharmacie } from './pharmacie';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  link = 'http://localhost:3000/order';

constructor( private registerService: RegisterService,
  private http: HttpClient,
  private router: Router) { }
token = this.registerService.getToken();
getPharmacies(): Observable<Order[]> {
  return this.http.get<Order[]>(this.link + '/getAll', {
    headers: { authorization: 'Bearer ' + this.registerService.getToken() },
  });
}
}
