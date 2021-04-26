import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products : Product[] ;
  constructor() { 
   this.products = [
    new Product ('panadol' , 'this is a good product' ,'Tboursgi lab' , 'conditionning' , '2 doses par jour ' , 'Hrebech' , 'bnakou' , 'therepcalss' , 'subclass' , 'spes' , 'df' ,2 , 'use kima theb' , 'https://www.jevaismieuxmerci.com/media/cache/d/a/dafalgan_-_douleurs_fievre_500_mg_-_16_gelules_450x450.png' ,'condittionning' , 'table'),
    new Product ('Infiralgon' , 'this is a good product' ,'Tboursgi lab' , 'conditionning' , '2 doses par jour ' , 'Hrebech' , 'bnakou' , 'therepcalss' , 'subclass' , 'spes' , 'df' ,2 , 'use kima theb' , 'https://www.jevaismieuxmerci.com/media/cache/d/a/dafalgan_-_douleurs_fievre_500_mg_-_16_gelules_450x450.png' ,'condittionning' , 'table'),
    new Product ('Face mask' , 'this is a good product' ,'Tboursgi lab' , 'conditionning' , '2 doses par jour ' , 'Hrebech' , 'bnakou' , 'therepcalss' , 'subclass' , 'spes' , 'df' ,2.750 , 'use kima theb' , 'https://pngimg.com/uploads/medical_mask/medical_mask_PNG41.png' ,'condittionning' , 'table')

   ];


  }

  ngOnInit(): void {
  }

}
