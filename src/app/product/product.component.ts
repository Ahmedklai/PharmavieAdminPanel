import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product-list/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product : Product;
  constructor(private productService:  ProductService , private router: Router ) { 
    
  }

  ngOnInit(): void {
    
  }

  removeproduct(id : String): void {
  
    this.productService.removeProduct(id).subscribe(
      (response) => {
       console.log(response);
       const link = ['productList'];
       this.router.navigate(link);
      },
      (error) => {
        console.log(error);
      }
    )
   }

}
