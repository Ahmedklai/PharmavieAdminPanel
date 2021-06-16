import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PharmaciesService } from '../pharmacies.service';
import { Pharmacie } from '../pharmacie';
import { ProductService } from '../product-list/product-service.service';

@Component({
  selector: 'app-add-pharmacy',
  templateUrl: './add-pharmacy.component.html',
  styleUrls: ['./add-pharmacy.component.scss'],
})
export class AddPharmacyComponent {
  constructor( private router: Router , private pharmaciesService : PharmaciesService) {}
  chosenPharmacies: Pharmacie[] = [];
  AddFormulaire: NgForm ;
  imageSrc: string = 'https://www.cyclooil.com/images/default_product.png';
  addPharmacy(AddFormulaire: NgForm): void {
    AddFormulaire.value['image']= AddFormulaire.value['image'] == null ?
     this.imageSrc :
     AddFormulaire.value['image'];
    this.pharmaciesService.addPharmacy(AddFormulaire.value).subscribe(
      (response) => {
        const link = ['home/pharmacyList'];
        this.router.navigate(link);
        console.log(response);
      },
      (error) => {
      console.log("🚀 ~ file: add-pharmacy.component.ts ~ line 48 ~ AddPharmacyComponent ~ addPharmacy ~ error", error)

      }
    );
  }
}

