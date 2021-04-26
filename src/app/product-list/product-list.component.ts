import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from './product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products : Product[] ;
  constructor( private productservice:  ProductService) { 
   


  }

  ngOnInit(): void {
    this.productservice.getProducts().subscribe(
      (products) => this.products = products 
    ) ;
  }
  goToForm () {
    this.productservice.goToForm();
   }

}
