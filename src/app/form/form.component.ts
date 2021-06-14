import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { PharmaciesService } from '../pharmacies.service';
import { Pharmacie } from '../pharmacie';
import { ProductService } from '../product-list/product-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router , private pharmaciesService : PharmaciesService) {}
  isPromotion: boolean;
  pharmacies: Pharmacie[];
  dropDownlList = [];
  dropdownSettings : IDropdownSettings = {};
  chosenPharmacies :Pharmacie[] = [];
  AddFormulaire: NgForm ;
  ngOnInit(): void {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

     this.pharmaciesService.getPharmacies().subscribe((pharmacies) => {

      this.pharmacies = pharmacies;
      this.dropDownlList = this.pharmacies.map((pharmacy,index)=>{
        return {
          'item_id': index,
          'item_text':pharmacy.nomprenom
        }
      });

    });
  }
  onItemSelect(item) {
    this.chosenPharmacies.push(this.pharmacies[item['item_id']]);
    console.log("chosen pharmacies   ===== > ",this.chosenPharmacies);
  }
  onSelectAll(items: any) {
    this.chosenPharmacies = this.pharmacies;
  }
//   addPharmacie(pharmacie :Pharmacie , value : boolean ) {
//   value ?
//    this.chosenPharmacies.push(pharmacie)  :
//    this.chosenPharmacies = this.arrayRemove(this.chosenPharmacies , pharmacie );

//   }
//    arrayRemove(arr, value) {

//     return arr.filter(function(ele){
//         return ele != value;
//     });
// }

  isBestSelling: boolean = false;
  imageSrc: string = 'https://www.cyclooil.com/images/default_product.png';


  addProduct(AddFormulaire: NgForm): void {

    AddFormulaire.value['pharmacies'] = this.chosenPharmacies;
    console.log("🚀 ~ file: form.component.ts ~ line 71 ~ FormComponent ~ addProduct ~ AddFormulaire.value['pharmacies']", AddFormulaire.value['pharmacies'])


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
