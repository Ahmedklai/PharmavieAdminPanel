import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PharmaciesService } from 'src/pharmacies/pharmacies.service';
import { Pharmacie } from '../pharmacie';
import { ProductService } from '../product-list/product-service.service';

@Component({
  selector: 'app-add-pharmacy',
  templateUrl: './add-pharmacy.component.html',
  styleUrls: ['./add-pharmacy.component.scss'],
})
export class AddPharmacyComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router , private pharmaciesService : PharmaciesService) {}
  isPromotion: boolean;
  pharmacies: Pharmacie[];
  chosenPharmacies: Pharmacie[] = [];
  AddFormulaire: NgForm ;
  ngOnInit(): void {


     this.pharmaciesService.getProducts().subscribe((pharmacies) => {

      this.pharmacies = pharmacies;
      console.log(this.pharmacies);
    });
  }

  addPharmacie(pharmacie :Pharmacie , value : boolean ) {
  value ?
   this.chosenPharmacies.push(pharmacie)  :
   this.chosenPharmacies = this.arrayRemove(this.chosenPharmacies , pharmacie );

  }
   arrayRemove(arr, value) {

    return arr.filter(function(ele){
        return ele != value;
    });
}

  isBestSelling: boolean = false;
  imageSrc: string = 'https://www.cyclooil.com/images/default_product.png';


  addProduct(AddFormulaire: NgForm): void {
    console.log(AddFormulaire.value);
    AddFormulaire.value['pharmacies'] = this.chosenPharmacies;

    console.log(AddFormulaire.value);
    this.productService.addProduct(AddFormulaire.value).subscribe(
      (response) => {
        const link = ['home/productList'];
        this.router.navigate(link);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

