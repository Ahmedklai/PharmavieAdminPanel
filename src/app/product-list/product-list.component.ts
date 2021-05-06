import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from './product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products : Product[] ;
  @Input() product : Product;
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
   goToUpdate (id) {
    this.productservice.goToUpdate(id);
   }
   removeproduct(id : String): void {
    console.log(id);
    this.productservice.removeProduct(id).subscribe(
      (response) => {
       console.log(response);
       window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    )
   }

}
