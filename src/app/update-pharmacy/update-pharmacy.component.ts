import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product-list/product-service.service';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { PharmaciesService } from '../pharmacies.service';
import { Pharmacie } from '../pharmacie';

@Component({
  selector: 'app-update-pharmacy',
  templateUrl: './update-pharmacy.component.html',
  styleUrls: ['./update-pharmacy.component.scss']
})
export class UpdatePharmacyComponent implements OnInit {

  constructor(

    private pharmacyService: PharmaciesService ,
    private router: Router ,
    private activatedroute:ActivatedRoute,
  ) { }
  id : string;
  pharmacy : Pharmacie ;
   ngOnInit()  {

    this.id=this.activatedroute.snapshot.paramMap.get("id");
    console.log(this.id);
     this.getProduct(this.id);
  }
  imageSrc: string = 'https://www.cyclooil.com/images/default_product.png';

   getProduct(id :string) {
    console.log(id);
     this.pharmacyService.getPharmacyById(id).subscribe(
      (response) => {
        console.log(response);
        this.pharmacy = response['pharmacie'] as Pharmacie ;

      },
      (error) => {
        console.log(error);
      }
    )
   }
  updatePharmacy(updateFormulaire: NgForm): void {
     let product  = { ...updateFormulaire.value, id: this.id};

    this.pharmacyService.updatePharmacy(product).subscribe(
      (response) => {

        const link = ['home/pharmacyList'];
        this.router.navigate(link);
      },
      (error) => {
        console.log(error);
      }
    )
   }

}
