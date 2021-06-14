import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { PharmaciesService } from 'src/pharmacies/pharmacies.service';
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

     this.pharmaciesService.getProducts().subscribe((pharmacies) => {

      this.pharmacies = pharmacies;
      this.dropDownlList = this.pharmacies.map((pharmacy,index)=>{
        return {
          'item_id': index,
          'item_text':pharmacy.nomprenom
        }
      });
      console.log(this.pharmacies);
    });
  }
  onItemSelect(item: Pharmacie) {
    this.chosenPharmacies.push(item);
  }
  onSelectAll(items: any) {
    console.log(items);
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
