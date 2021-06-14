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
  goToUpdate(id:string){
    this.router.navigate(['home/update-pharmacy',id]);
  }
  goToForm(){
    this.router.navigate(['home/add-pharmacy']);
  }
  token = this.registerService.getToken();
  getPharmacies(): Observable<Pharmacie[]> {
    return this.http.get<Pharmacie[]>(this.link + '/getAll', {
      headers: { authorization: 'Bearer ' + this.registerService.getToken() },
    });
  }
  getPharmacyById(id:string):Observable<unknown> {
    return this.http.get(this.link + '/get/' + id, {
      headers: { authorization: 'Bearer ' + this.registerService.getToken() },
    });
  }
  addPharmacy(pharmacy:Pharmacie): Observable<unknown> {
  console.log("🚀 ~ file: pharmacies.service.ts ~ line 31 ~ PharmaciesService ~ addPharmacy ~ pharmacy", pharmacy)
    return this.http.post(this.link + '/add',pharmacy, {
      headers: { authorization: 'Bearer ' + this.registerService.getToken() },
    });
  }
  removePharmacy(id:string): Observable<unknown> {
      return this.http.delete(this.link + `/remove/${id}`, {
        headers: { authorization: 'Bearer ' + this.registerService.getToken() },
      });
    }
  updatePharmacy(pharmacy:Pharmacie):Observable<unknown> {
      return this.http.put(this.link + '/update',{
        ...pharmacy,
      }, {
        headers: { authorization: 'Bearer ' + this.registerService.getToken() },
      });
    }
}
