import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product-list/product-service.service';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { Pharmacie } from '../pharmacie';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { PharmaciesService } from '../pharmacies.service';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.scss']
})
export class FormUpdateComponent implements OnInit {

  constructor(
    private pharmaciesService: PharmaciesService ,
    private productService: ProductService ,
    private router: Router ,
    private activatedroute:ActivatedRoute,
  ) { }
  id : String;
  product : Product  ;
  isPromotion: boolean;
  pharmacies: Pharmacie[];
  dropDownlList = [];
  dropdownSettings : IDropdownSettings = {};
  chosenPharmacies :Pharmacie[] = [];
  AddFormulaire: NgForm ;
  initialPharmacies:[];
  onItemSelect(item) {
    this.chosenPharmacies.push(this.pharmacies[item['item_id']]);
    console.log("chosen pharmacies  item select  ===== > ",this.chosenPharmacies);
  }
  onSelectAll(items: any) {
    this.chosenPharmacies = this.pharmacies;
  }
  onDeselect(item) {
    this.chosenPharmacies.splice(this.chosenPharmacies.indexOf(this.pharmacies[item['item_id']]),1);
    console.log("chosen pharmacies after deselect  ===== > ",this.chosenPharmacies);
  }
  onDeselectAll(items: any) {
    this.chosenPharmacies = [];
  }
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
    this.id=this.activatedroute.snapshot.paramMap.get("id");
    console.log(this.id);
    this.getProduct(this.id);
  }

  getProduct(id :String): void {
    console.log(id);
    this.productService.getProductsById(id).subscribe(
      (response) => {
        console.log(response);
        this.product = response ;
        console.log(this.product);
        this.chosenPharmacies = response.pharmacies;
        this.initialPharmacies = response.pharmacies.map((pharmacy,index)=>({
           'item_id':index,
           'item_text':pharmacy.nomprenom
        }));
        console.log(this.initialPharmacies);
      },
      (error) => {
        console.log(error);
      }
    )
   }
  updateProduct(updateFormulaire: NgForm): void {

     let product  = { ...updateFormulaire.value,pharmacies:this.chosenPharmacies, id: this.id};

    this.productService.updateProduct(product).subscribe(
      (response) => {

        const link = ['home/productList'];
        this.router.navigate(link);
      },
      (error) => {
        console.log(error);
      }
    )
   }

}
