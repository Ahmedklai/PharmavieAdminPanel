import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { RegisterService } from 'src/app/auth.service';
import { Pharmacie } from 'src/app/pharmacie';

 
 
  

@Injectable()
export class PharmaciesService {
    private products: Pharmacie[];
  link = 'http://localhost:3000/pharmacie';

  constructor(
    private registerService: RegisterService,
    private http: HttpClient,
    private router: Router
  ) {}

  token = this.registerService.getToken();
  getProducts(): Observable<Pharmacie[]> {
    return this.http.get<Pharmacie[]>(this.link + '/getAll', {
      headers: { authorization: 'Bearer ' + this.token },
    });
  }
}
